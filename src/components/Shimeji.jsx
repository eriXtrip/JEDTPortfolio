import { useState, useEffect, useRef, useCallback } from "react";
import { X } from "lucide-react";

const PADDING = 16;
const W = 80;
const H = Math.round(W * 1.35);

const ShimejiCharacter = () => (
  <svg width={W} height={H} viewBox="0 0 120 162" fill="none">
    {/* === LEGS === */}
    <rect x="42" y="128" width="14" height="18" rx="4" className="fill-neutral-700 dark:fill-neutral-600" />
    <rect x="64" y="128" width="14" height="18" rx="4" className="fill-neutral-700 dark:fill-neutral-600" />

    {/* === SHOES === */}
    <rect x="39" y="144" width="20" height="8" rx="4" className="fill-emerald-600" />
    <rect x="61" y="144" width="20" height="8" rx="4" className="fill-emerald-600" />

    {/* === MONITOR "HEAD" === */}
    <rect x="22" y="10" width="76" height="76" rx="12" className="fill-neutral-100 dark:fill-neutral-800 stroke-neutral-300 dark:stroke-neutral-600" strokeWidth="1.5" />
    {/* Glossy highlight */}
    <path d="M28 18 Q60 15 92 18" stroke="white" strokeWidth="1" opacity="0.3" fill="none" className="dark:opacity-5" />
    {/* Screen */}
    <rect x="27" y="15" width="66" height="66" rx="8" className="fill-slate-50 dark:fill-slate-900" />

    {/* === GLASSES (on screen) === */}
    <circle cx="48" cy="36" r="9" fill="none" className="stroke-neutral-700 dark:stroke-neutral-300" strokeWidth="2" />
    <circle cx="72" cy="36" r="9" fill="none" className="stroke-neutral-700 dark:stroke-neutral-300" strokeWidth="2" />
    <line x1="57" y1="36" x2="63" y2="36" className="stroke-neutral-700 dark:stroke-neutral-300" strokeWidth="2" />
    <circle cx="48" cy="36" r="2" className="fill-neutral-700 dark:fill-neutral-300" />
    <circle cx="72" cy="36" r="2" className="fill-neutral-700 dark:fill-neutral-300" />

    {/* === FACE DETAILS === */}
    <path d="M53 48 Q60 54 67 48" fill="none" className="stroke-neutral-700 dark:stroke-neutral-300" strokeWidth="2" strokeLinecap="round" />
    <ellipse cx="40" cy="46" rx="4" ry="2.5" fill="#fca5a5" opacity="0.4" />
    <ellipse cx="80" cy="46" rx="4" ry="2.5" fill="#fca5a5" opacity="0.4" />

    {/* === CODE ON SCREEN === */}
    <text x="60" y="68" textAnchor="middle" fontSize="13" fill="#059669" opacity="0.2" fontWeight="bold" fontFamily="monospace">&lt;/&gt;</text>
    <text x="60" y="67" textAnchor="middle" fontSize="11" fill="#059669" fontWeight="bold" fontFamily="monospace" className="animate-shimeji-code">&lt;/&gt;</text>

    {/* === HOODIE BODY === */}
    <rect x="26" y="84" width="68" height="46" rx="12" className="fill-emerald-500" />
    <rect x="34" y="108" width="52" height="18" rx="6" className="fill-emerald-600/50" />
    <line x1="60" y1="84" x2="60" y2="130" stroke="#047857" strokeWidth="1.5" />

    <text x="60" y="101" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold" fontFamily="system-ui">JEDT</text>

    <path d="M54 84 L52 94" stroke="#34d399" strokeWidth="2" strokeLinecap="round" />
    <path d="M66 84 L68 94" stroke="#34d399" strokeWidth="2" strokeLinecap="round" />
    <circle cx="52" cy="94" r="1.5" fill="#34d399" />
    <circle cx="68" cy="94" r="1.5" fill="#34d399" />

    {/* === ARMS / SLEEVES === */}
    <path d="M26 90 Q14 98 18 112 Q22 120 30 114" className="fill-emerald-500" />
    <path d="M94 90 Q106 98 102 112 Q98 120 90 114" className="fill-emerald-500" />
    {/* Hands (mini monitors) */}
    <rect x="15" y="110" width="10" height="10" rx="3" className="fill-neutral-100 dark:fill-neutral-800 stroke-neutral-300 dark:stroke-neutral-600" strokeWidth="1" />
    <rect x="95" y="110" width="10" height="10" rx="3" className="fill-neutral-100 dark:fill-neutral-800 stroke-neutral-300 dark:stroke-neutral-600" strokeWidth="1" />

    {/* === SITTING SURFACE === */}
    <ellipse cx="60" cy="155" rx="38" ry="3" className="fill-neutral-300/50 dark:fill-neutral-700/50" />
  </svg>
);

export const Shimeji = () => {
  const [visible, setVisible] = useState(true);
  const [pos, setPos] = useState(() => ({
    x: window.innerWidth - 120,
    y: window.innerHeight - 160,
  }));
  const [isDragging, setIsDragging] = useState(false);
  const [facing, setFacing] = useState(1);
  const posRef = useRef(pos);
  const dragInfo = useRef({ sx: 0, sy: 0, px: 0, py: 0 });
  const animId = useRef(null);
  const cooldownRef = useRef(false);

  useEffect(() => {
    posRef.current = pos;
  }, [pos]);

  const moveTo = useCallback((tx, ty) => {
    if (animId.current) cancelAnimationFrame(animId.current);
    const step = () => {
      setPos((prev) => {
        const dx = tx - prev.x;
        const dy = ty - prev.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 0.5) return prev;
        const speed = Math.min(0.8, dist / 20);
        return {
          x: prev.x + (dx / dist) * speed,
          y: prev.y + (dy / dist) * speed,
        };
      });
      animId.current = requestAnimationFrame(step);
    };
    animId.current = requestAnimationFrame(step);
  }, []);

  useEffect(() => {
    if (isDragging || cooldownRef.current) return;

    const pickTarget = () => {
      if (isDragging) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const tx = PADDING + Math.random() * (w - W - PADDING * 2);
      const ty = PADDING + Math.random() * (h - H - PADDING * 2);
      setFacing(tx > posRef.current.x ? 1 : -1);
      moveTo(tx, ty);
    };

    const initial = setTimeout(pickTarget, 2000);
    const interval = setInterval(pickTarget, 5000 + Math.random() * 4000);

    return () => {
      clearTimeout(initial);
      clearInterval(interval);
      if (animId.current) cancelAnimationFrame(animId.current);
    };
  }, [isDragging, moveTo]);

  const onPointerDown = useCallback(
    (e) => {
      e.preventDefault();
      if (animId.current) cancelAnimationFrame(animId.current);
      setIsDragging(true);
      dragInfo.current = {
        sx: e.clientX,
        sy: e.clientY,
        px: pos.x,
        py: pos.y,
      };
    },
    [pos],
  );

  useEffect(() => {
    if (!isDragging) return;

    const onMove = (e) => {
      setPos({
        x: Math.max(
          0,
          Math.min(
            window.innerWidth - W,
            dragInfo.current.px + e.clientX - dragInfo.current.sx,
          ),
        ),
        y: Math.max(
          0,
          Math.min(
            window.innerHeight - H,
            dragInfo.current.py + e.clientY - dragInfo.current.sy,
          ),
        ),
      });
    };
    const onUp = () => {
      setIsDragging(false);
      cooldownRef.current = true;
      setTimeout(() => {
        cooldownRef.current = false;
      }, 2000);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [isDragging]);

  if (!visible) {
    return (
      <button
        onClick={() => setVisible(true)}
        className="fixed bottom-6 right-6 z-50 w-10 h-10 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-emerald-500/25 active:scale-95"
        title="Show mascot"
      >
        <svg width="20" height="20" viewBox="0 0 120 162" fill="none">
          <rect x="22" y="10" width="76" height="76" rx="12" fill="white" />
          <rect x="27" y="15" width="66" height="66" rx="8" fill="none" stroke="white" strokeWidth="2" />
          <circle cx="48" cy="36" r="7" fill="none" stroke="white" strokeWidth="2.5" />
          <circle cx="72" cy="36" r="7" fill="none" stroke="white" strokeWidth="2.5" />
          <line x1="55" y1="36" x2="65" y2="36" stroke="white" strokeWidth="2.5" />
          <circle cx="48" cy="36" r="2" fill="white" />
          <circle cx="72" cy="36" r="2" fill="white" />
          <path d="M53 46 Q60 52 67 46" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <text x="60" y="64" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold" fontFamily="monospace">&lt;/&gt;</text>
        </svg>
      </button>
    );
  }

  return (
    <div
      style={{
        position: "fixed",
        left: pos.x,
        top: pos.y,
        zIndex: 9999,
        cursor: isDragging ? "grabbing" : "grab",
        userSelect: "none",
        touchAction: "none",
      }}
      onPointerDown={onPointerDown}
    >
      <div className={`transition-transform duration-300 ${isDragging ? "" : "animate-shimeji-bob"}`}>
        <div style={{ transform: `scaleX(${facing})` }}>
          <ShimejiCharacter />
        </div>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          setVisible(false);
        }}
        style={{ [facing === 1 ? "right" : "left"]: -6 }}
        className="absolute top-[-6px] w-5 h-5 bg-neutral-800/70 dark:bg-neutral-200/70 text-white dark:text-neutral-800 rounded-full flex items-center justify-center opacity-50 hover:opacity-100 transition-all duration-200 backdrop-blur-sm hover:scale-110"
      >
        <X size={10} />
      </button>
    </div>
  );
};
