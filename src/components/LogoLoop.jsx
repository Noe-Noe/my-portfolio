import { useEffect, useMemo, useRef, useState } from "react";

export default function LogoLoop({
  items = [], // [{ node: <SiReact/>, label:"React", href:"..." }]
  speed = 60, // px per second
  gap = 48,
  height = 44,
  pauseOnHover = true,
  className = "",
}) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  const [copies, setCopies] = useState(2);
  const [paused, setPaused] = useState(false);

  const styleVars = useMemo(
    () => ({
      "--gap": `${gap}px`,
      "--h": `${height}px`,
      "--speed": `${speed}s`,
    }),
    [gap, height, speed]
  );

  // Decide how many copies needed to fill width smoothly
  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const calc = () => {
      const containerW = container.clientWidth;
      const seq = track.querySelector("[data-seq='1']");
      if (!seq) return;

      const seqW = seq.getBoundingClientRect().width;
      if (!seqW) return;

      // enough copies so it never shows empty area
      const needed = Math.ceil(containerW / seqW) + 2;
      setCopies(Math.max(2, needed));
    };

    calc();
    const ro = new ResizeObserver(calc);
    ro.observe(container);

    return () => ro.disconnect();
  }, [items]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={styleVars}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
      aria-label="Tech logo loop"
    >
      <div
        ref={trackRef}
        className={`flex w-max items-center will-change-transform ${
          paused ? "" : "animate-logoLoop"
        }`}
        style={{ animationPlayState: paused ? "paused" : "running" }}
      >
        {Array.from({ length: copies }).map((_, copyIndex) => (
          <div
            key={copyIndex}
            data-seq={copyIndex === 0 ? "1" : undefined}
            className="flex items-center"
          >
            {items.map((it, i) => (
              <div
        key={`${copyIndex}-${i}`}
        className="mr-(--gap) inline-flex items-center gap-2 text-zinc-300/80"
        style={{ fontSize: "var(--h)" }}
            >
              <span className="inline-flex items-center" style={{ fontSize: "var(--h)" }}>
              {it.node}
                </span>
                 <span className="text-sm text-zinc-400">{it.label}</span>
            </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
