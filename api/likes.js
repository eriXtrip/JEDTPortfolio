import process from "node:process";

const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function getSupabaseConfig() {
  const url = process.env.SUPABASE_URL?.replace(/\/+$/, "");
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  return url && key ? { url, key } : null;
}

async function supabaseRequest(path, { url, key }, options = {}) {
  return fetch(`${url}/rest/v1/${path}`, {
    ...options,
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      ...(options.headers || {}),
    },
    cache: "no-store",
  });
}

async function getLikeState(visitorId, config) {
  const countPath = "portfolio_likes?select=visitor_id&limit=1";
  const visitorPath = `portfolio_likes?select=visitor_id&visitor_id=eq.${visitorId}&limit=1`;
  const [countResponse, visitorResponse] = await Promise.all([
    supabaseRequest(countPath, config, {
      headers: { Prefer: "count=exact", "Range-Unit": "items", Range: "0-0" },
    }),
    supabaseRequest(visitorPath, config),
  ]);

  if (!countResponse.ok || !visitorResponse.ok) {
    throw new Error("Unable to read like data");
  }

  const total = countResponse.headers.get("content-range")?.split("/").pop();
  const likes = Number.parseInt(total, 10);
  const visitorLikes = await visitorResponse.json();

  return {
    likes: Number.isNaN(likes) ? 0 : likes,
    liked: visitorLikes.length > 0,
  };
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, max-age=0");

  const config = getSupabaseConfig();
  if (!config) {
    return res.status(503).json({ error: "Like storage is not configured" });
  }

  const visitorId = req.method === "GET" ? req.query?.visitorId : req.body?.visitorId;
  if (typeof visitorId !== "string" || !UUID_PATTERN.test(visitorId)) {
    return res.status(400).json({ error: "A valid visitor ID is required" });
  }

  try {
    if (req.method === "POST") {
      if (typeof req.body?.liked !== "boolean") {
        return res.status(400).json({ error: "A liked value is required" });
      }

      if (req.body.liked) {
        const response = await supabaseRequest(
          "portfolio_likes?on_conflict=visitor_id",
          config,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Prefer: "resolution=merge-duplicates,return=minimal",
            },
            body: JSON.stringify({ visitor_id: visitorId }),
          },
        );
        if (!response.ok) throw new Error("Unable to save like");
      } else {
        const response = await supabaseRequest(
          `portfolio_likes?visitor_id=eq.${visitorId}`,
          config,
          { method: "DELETE", headers: { Prefer: "return=minimal" } },
        );
        if (!response.ok) throw new Error("Unable to remove like");
      }
    } else if (req.method !== "GET") {
      res.setHeader("Allow", "GET, POST");
      return res.status(405).json({ error: "Method not allowed" });
    }

    const state = await getLikeState(visitorId, config);
    return res.status(200).json(state);
  } catch (error) {
    console.error("Portfolio likes request failed:", error.message);
    return res.status(500).json({ error: "Could not load or save likes" });
  }
}