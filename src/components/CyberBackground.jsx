import { useEffect } from 'react';

export default function CyberBackground() {
  useEffect(() => {
    // generate a few glowing particles for ambiance
    const container = document.getElementById('cyber-bg');
    if (!container) return;

    const particles = Array.from({ length: 24 }).map(() => {
      const el = document.createElement('div');
      el.className = 'absolute rounded-full mix-blend-screen pointer-events-none';
      const size = Math.random() * 6 + 2; // 2-8px
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.background = 'radial-gradient(circle, rgba(34,211,238,0.9) 0%, rgba(34,211,238,0.0) 70%)';
      el.style.filter = 'drop-shadow(0 0 8px rgba(34,211,238,0.8))';
      el.style.left = `${Math.random() * 100}%`;
      el.style.top = `${Math.random() * 100}%`;
      el.style.opacity = `${0.5 + Math.random() * 0.5}`;
      container.appendChild(el);
      return el;
    });

    return () => {
      particles.forEach(p => p.remove());
    };
  }, []);

  return (
    <div id="cyber-bg" className="fixed inset-0 -z-0 overflow-hidden" aria-hidden>
      {/* Neon corner accents */}
      <div className="absolute left-6 top-10 h-0.5 w-24 bg-cyan-400/70 blur-[1px]" />
      <div className="absolute left-6 top-12 h-0.5 w-16 bg-fuchsia-400/70 blur-[1px]" />
      <div className="absolute right-8 bottom-12 h-0.5 w-24 bg-cyan-400/70 blur-[1px]" />
      <div className="absolute right-8 bottom-10 h-0.5 w-16 bg-fuchsia-400/70 blur-[1px]" />

      {/* Vignette edges */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-100px,rgba(168,85,247,0.15),transparent_60%)]" />
    </div>
  );
}
