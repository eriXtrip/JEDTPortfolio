import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

const VISITOR_ID_KEY = "portfolio-visitor-id";
const HEART_EMIT_INTERVAL_MS = 700;
const HEART_STREAM_DURATION_MS = 60_000;
const HEART_STREAM_PAUSE_MS = 30_000;
const HEART_DRIFT_PATTERN = [-28, 14, 0, -14, 28];

function createVisitorId() {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (digit) => {
    const random = Math.floor(Math.random() * 16);
    return (digit === "x" ? random : (random & 0x3) | 0x8).toString(16);
  });
}

function getVisitorId() {
  try {
    const storedId = window.localStorage.getItem(VISITOR_ID_KEY);
    if (storedId) return storedId;

    const visitorId = createVisitorId();
    window.localStorage.setItem(VISITOR_ID_KEY, visitorId);
    return visitorId;
  } catch {
    return createVisitorId();
  }
}

export function LikeButton() {
  const [visitorId, setVisitorId] = useState(null);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [floatingHearts, setFloatingHearts] = useState([]);

  useEffect(() => {
    const id = getVisitorId();
    const controller = new AbortController();
    setVisitorId(id);

    fetch(`/api/likes?visitorId=${encodeURIComponent(id)}`, {
      signal: controller.signal,
    })
      .then(async (response) => {
        if (!response.ok) throw new Error("Could not load likes");
        return response.json();
      })
      .then((data) => {
        setLiked(data.liked);
        setLikesCount(data.likes);
      })
      .catch((error) => {
        if (error.name !== "AbortError") setHasError(true);
      })
      .finally(() => setIsLoading(false));

    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!liked) {
      setFloatingHearts([]);
      return undefined;
    }

    let heartIndex = 0;
    let emitInterval;
    let streamTimeout;
    let pauseTimeout;

    const emitHeart = () => {
      const drift = HEART_DRIFT_PATTERN[heartIndex % HEART_DRIFT_PATTERN.length];
      const id = `heart-${heartIndex}`;
      heartIndex += 1;
      setFloatingHearts((current) => [
        ...current,
        {
          id,
          drift: `${drift}px`,
        },
      ]);
    };

    const startStream = () => {
      emitHeart();
      emitInterval = window.setInterval(emitHeart, HEART_EMIT_INTERVAL_MS);
      streamTimeout = window.setTimeout(() => {
        window.clearInterval(emitInterval);
        pauseTimeout = window.setTimeout(startStream, HEART_STREAM_PAUSE_MS);
      }, HEART_STREAM_DURATION_MS);
    };

    startStream();
    return () => {
      window.clearInterval(emitInterval);
      window.clearTimeout(streamTimeout);
      window.clearTimeout(pauseTimeout);
    };
  }, [liked]);

  const toggleLiked = async () => {
    if (!visitorId || isSaving) return;

    const nextLiked = !liked;
    const previousCount = likesCount;
    setLiked(nextLiked);
    setLikesCount((count) =>
      count === null ? null : Math.max(0, count + (nextLiked ? 1 : -1)),
    );
    setIsSaving(true);
    setHasError(false);

    try {
      const response = await fetch("/api/likes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ visitorId, liked: nextLiked }),
      });
      if (!response.ok) throw new Error("Could not save like");

      const data = await response.json();
      setLiked(data.liked);
      setLikesCount(data.likes);
    } catch {
      setLiked(!nextLiked);
      setLikesCount(previousCount);
      setHasError(true);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <>
      <div className="like-heart-layer" aria-hidden="true">
        {floatingHearts.map((heart) => (
          <Heart
            key={heart.id}
            className="like-heart-float h-5 w-5 fill-rose-500 text-rose-500"
            style={{
              "--heart-drift-x": heart.drift,
            }}
            onAnimationEnd={() =>
              setFloatingHearts((current) =>
                current.filter((item) => item.id !== heart.id),
              )
            }
          />
        ))}
      </div>
      <button
        type="button"
        onClick={toggleLiked}
        disabled={!visitorId || isLoading || isSaving}
        aria-pressed={liked}
        aria-label={
          hasError
            ? "Like count unavailable. Try again."
            : `${liked ? "Unlike" : "Like"} this portfolio. ${likesCount ?? "Loading"} likes.`
        }
        title={hasError ? "Shared likes are unavailable. Try again." : undefined}
        className={`fixed bottom-5 right-5 z-[60] inline-flex h-12 items-center justify-center rounded-full border border-neutral-200 bg-white text-sm font-bold text-neutral-800 shadow-lg transition-all hover:-translate-y-0.5 hover:border-rose-300 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-70 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:focus-visible:ring-offset-neutral-950 ${liked ? "w-12 min-w-12 px-0" : "min-w-20 gap-2.5 px-4"}`}
      >
        <Heart
          className={`h-5 w-5 transition-all ${liked ? "fill-rose-500 text-rose-500" : "text-rose-500"}`}
          aria-hidden="true"
        />
        {!liked && (
          <span className="min-w-4 text-center tabular-nums" aria-hidden="true">
            {likesCount ?? "..."}
          </span>
        )}
        {hasError && <span className="sr-only">Shared likes are unavailable.</span>}
      </button>
    </>
  );
}
