const GITHUB_API = "https://api.github.com/graphql";

const token = import.meta.env.VITE_GITHUB_TOKEN;

const headers = {
  "Content-Type": "application/json",
  ...(token ? { Authorization: `bearer ${token}` } : {}),
};

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

const fetchStats = async (username) => {
  const res = await fetch(GITHUB_API, {
    method: "POST",
    headers,
    body: JSON.stringify({ query: STATS_QUERY, variables: { login: username } }),
  });
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
  const json = await res.json();
  if (json.errors) throw new Error(json.errors.map((e) => e.message).join(", "));
  const user = json.data?.user;
  if (!user) throw new Error("User not found");
  return {
    repositories: user.repositories.totalCount,
    pullRequests: user.pullRequests.totalCount,
    issues: user.issues.totalCount,
    followers: user.followers.totalCount,
    stars: user.starredRepositories.totalCount,
  };
};

const fetchContributionsForRange = async (username, from, to) => {
  const res = await fetch(GITHUB_API, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query: CONTRIBUTION_QUERY,
      variables: { login: username, from: from.toISOString(), to: to.toISOString() },
    }),
  });
  if (!res.ok) return { weeks: [], total: 0, restricted: 0 };
  const json = await res.json();
  if (json.errors || !json.data?.user) return { weeks: [], total: 0, restricted: 0 };
  const cal = json.data.user.contributionsCollection.contributionCalendar;
  const restricted = json.data.user.contributionsCollection.restrictedContributionsCount;
  return {
    weeks: cal.weeks.map((w) =>
      w.contributionDays.map((d) => ({ date: d.date, count: d.contributionCount }))
    ),
    total: cal.totalContributions,
    restricted,
  };
};

export const fetchGitHubData = async (username) => {
  const stats = await fetchStats(username);

  const now = new Date();
  const ranges = [];
  for (let year = 2023; year <= now.getFullYear(); year++) {
    const from = new Date(year, 0, 1);
    const to = year === now.getFullYear() ? now : new Date(year, 11, 31, 23, 59, 59);
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

  return { totalContributions, weeks: allWeeks, stats };
};
