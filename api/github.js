import { readFileSync } from "fs";
import { resolve } from "path";

function getToken() {
  if (process.env.GITHUB_TOKEN) return process.env.GITHUB_TOKEN;
  try {
    const envPath = resolve(process.cwd(), ".env.local");
    const content = readFileSync(envPath, "utf-8");
    const match = content.match(/^GITHUB_TOKEN=(.+)$/m);
    if (match) return match[1].replace(/\r/g, "").trim();
  } catch {}
  return null;
}

const GITHUB_API = "https://api.github.com/graphql";

const STATS_QUERY = `
  query ($login: String!) {
    user(login: $login) {
      repositories(ownerAffiliations: OWNER) {
        totalCount
      }
      pullRequests(first: 1) {
        totalCount
      }
      issues(first: 1) {
        totalCount
      }
      followers {
        totalCount
      }
      starredRepositories {
        totalCount
      }
    }
  }
`;

const CONTRIBUTION_QUERY = `
  query ($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
        restrictedContributionsCount
      }
    }
  }
`;

const cache = new Map();
const CACHE_TTL = 30 * 60 * 1000;

function getCached(key) {
  const entry = cache.get(key);
  if (entry && Date.now() - entry.ts < CACHE_TTL) return entry.data;
  cache.delete(key);
  return null;
}

function setCache(key, data) {
  cache.set(key, { data, ts: Date.now() });
}

async function githubFetch(query, variables) {
  const token = getToken();
  if (!token) throw new Error("GITHUB_TOKEN not found in env or .env.local");

  const res = await fetch(GITHUB_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
  const json = await res.json();
  if (json.errors) throw new Error(json.errors.map((e) => e.message).join(", "));
  return json;
}

async function fetchStats(username) {
  const cacheKey = `stats:${username}`;
  const cached = getCached(cacheKey);
  if (cached) return cached;

  const json = await githubFetch(STATS_QUERY, { login: username });
  const user = json.data?.user;
  if (!user) throw new Error("User not found");

  const stats = {
    repositories: user.repositories.totalCount,
    pullRequests: user.pullRequests.totalCount,
    issues: user.issues.totalCount,
    followers: user.followers.totalCount,
    stars: user.starredRepositories.totalCount,
  };

  setCache(cacheKey, stats);
  return stats;
}

async function fetchContributionsForRange(username, from, to) {
  const cacheKey = `contrib:${username}:${from}:${to}`;
  const cached = getCached(cacheKey);
  if (cached) return cached;

  try {
    const json = await githubFetch(CONTRIBUTION_QUERY, {
      login: username,
      from: new Date(from).toISOString(),
      to: new Date(to).toISOString(),
    });

    if (!json.data?.user) return { weeks: [], total: 0, restricted: 0 };

    const cal = json.data.user.contributionsCollection.contributionCalendar;
    const restricted = json.data.user.contributionsCollection.restrictedContributionsCount;

    const result = {
      weeks: cal.weeks.map((w) =>
        w.contributionDays.map((d) => ({ date: d.date, count: d.contributionCount }))
      ),
      total: cal.totalContributions,
      restricted,
    };

    setCache(cacheKey, result);
    return result;
  } catch {
    return { weeks: [], total: 0, restricted: 0 };
  }
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { username } = req.body;
    if (!username) return res.status(400).json({ error: "Missing username" });

    const stats = await fetchStats(username);

    const now = new Date();
    const ranges = [];
    for (let year = 2023; year <= now.getFullYear(); year++) {
      const from = new Date(year, 0, 1).getTime();
      const to = year === now.getFullYear() ? now.getTime() : new Date(year, 11, 31, 23, 59, 59).getTime();
      ranges.push({ from, to, year });
    }

    const results = await Promise.all(
      ranges.map((r) => fetchContributionsForRange(username, r.from, r.to))
    );

    const seen = new Set();
    const allWeeks = [];
    let totalContributions = 0;

    for (const r of results) {
      totalContributions += r.total + r.restricted;
      for (const week of r.weeks) {
        const filtered = week.filter((d) => {
          if (seen.has(d.date)) return false;
          seen.add(d.date);
          return true;
        });
        if (filtered.length > 0) allWeeks.push(filtered);
      }
    }

    allWeeks.sort((a, b) => a[0].date.localeCompare(b[0].date));

    return res.status(200).json({ totalContributions, weeks: allWeeks, stats });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
