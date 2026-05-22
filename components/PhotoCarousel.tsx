"use client";
import { useState, useEffect, useCallback } from "react";

const C = "#112864";

export default function PhotoCarousel({ photos }: { photos: string[] }) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + photos.length) % photos.length), [photos.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % photos.length), [photos.length]);

  // Auto-advance
  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  if (!photos.length) return null;

  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <p className="font-raleway text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: "rgba(17,40,100,0.4)" }}>
              NEScO 2025
            </p>
            <h2 className="font-unbounded font-bold text-3xl md:text-4xl" style={{ color: C }}>
              From the tournament
            </h2>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <span className="font-unbounded text-sm" style={{ color: "rgba(17,40,100,0.35)" }}>
              {String(current + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
            </span>
            <button onClick={prev}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
              style={{ border: "1px solid rgba(17,40,100,0.2)", color: C }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L5 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
              style={{ background: C, color: "#fff" }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L11 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Main image */}
        <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: "16/7" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={current}
            src={photos[current]}
            alt={`NEScO 2025 — photo ${current + 1}`}
            className="w-full h-full object-cover"
            style={{ transition: "opacity 0.4s ease" }}
          />
        </div>

        {/* Thumbnail strip */}
        <div className="flex gap-3 mt-4 overflow-x-auto pb-1">
          {photos.map((src, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className="shrink-0 rounded-xl overflow-hidden transition-all"
              style={{
                width: "96px", height: "60px",
                outline: i === current ? `2px solid ${C}` : "2px solid transparent",
                outlineOffset: "2px",
                opacity: i === current ? 1 : 0.45,
              }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-1.5 mt-6">
          {photos.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className="rounded-full transition-all"
              style={{
                width: i === current ? "24px" : "6px",
                height: "6px",
                background: i === current ? C : "rgba(17,40,100,0.2)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
