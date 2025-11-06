import React from 'react';

export default function BackgroundFX() {
  return (
    <div className="fixed inset-0 overflow-hidden" aria-hidden>
      {/* Neon scanlines */}
      <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-screen bg-[repeating-linear-gradient(0deg,rgba(34,211,238,0.05),rgba(34,211,238,0.05)_2px,transparent_3px,transparent_6px)]" />
      {/* Glowing diagonal lines */}
      <div className="pointer-events-none absolute -left-20 top-0 h-[140%] w-40 rotate-12 bg-gradient-to-b from-fuchsia-500/10 via-cyan-400/20 to-transparent blur-2xl" />
      <div className="pointer-events-none absolute -right-20 top-10 h-[120%] w-36 -rotate-12 bg-gradient-to-b from-purple-500/10 via-fuchsia-400/20 to-transparent blur-2xl" />
      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 24 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-cyan-400/20 shadow-[0_0_12px_rgba(34,211,238,0.6)]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${6 + Math.random() * 6}px`,
              height: `${6 + Math.random() * 6}px`,
              filter: 'blur(0.5px)'
            }}
          />
        ))}
      </div>
    </div>
  );
}
