import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

const VISITOR_ID_KEY = "portfolio-visitor-id";

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

  const addFloatingHearts = () => {
    const hearts = [-20, 0, 20].map((offset, index) => ({
      id: `${Date.now()}-${Math.random()}`,
      offset,
      drift: index === 0 ? "-18px" : index === 2 ? "18px" : "0px",
    }));
    setFloatingHearts((current) => [...current, ...hearts]);
  };

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
    if (nextLiked) addFloatingHearts();

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
      className="fixed bottom-5 right-5 z-[60] inline-flex h-12 min-w-36 items-center justify-center gap-2.5 rounded-full border border-neutral-200 bg-white px-5 text-sm font-bold text-neutral-800 shadow-lg transition-all hover:-translate-y-0.5 hover:border-rose-300 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-70 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:focus-visible:ring-offset-neutral-950"
    >
      <Heart
        className={`h-5 w-5 transition-all ${liked ? "fill-rose-500 text-rose-500" : "text-rose-500"}`}
        aria-hidden="true"
      />
      <span>{liked ? "Liked" : "Like"}</span>
      <span className="min-w-4 text-center tabular-nums" aria-hidden="true">
        {likesCount ?? "..."}
      </span>
      {floatingHearts.map((heart) => (
        <Heart
          key={heart.id}
          aria-hidden="true"
          className="like-heart-float h-5 w-5 fill-rose-500 text-rose-500"
          style={{
            "--heart-offset": `${heart.offset}px`,
            "--heart-drift": heart.drift,
          }}
          onAnimationEnd={() =>
            setFloatingHearts((current) =>
              current.filter((item) => item.id !== heart.id),
            )
          }
        />
      ))}
      {hasError && <span className="sr-only">Shared likes are unavailable.</span>}
    </button>
  );
}