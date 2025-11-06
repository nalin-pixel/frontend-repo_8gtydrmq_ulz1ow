import { useEffect } from 'react';
import Spline from '@splinetool/react-spline';

function useOrbitronFont() {
  useEffect(() => {
    const id = 'orbitron-font-link';
    if (document.getElementById(id)) return;
    const link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;800&display=swap';
    document.head.appendChild(link);
    return () => {
      // keep font loaded across navigation
    };
  }, []);
}

export default function Hero() {
  useOrbitronFont();
  return (
    <section className="relative w-full h-[60vh] min-h-[420px] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/BL9Cjn3fkAdLBhXm/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient + vignette overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0f1a]/10 to-[#0b0f1a]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,255,0.10),transparent_60%)]" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-widest uppercase"
          style={{ fontFamily: 'Orbitron, var(--font-ibm-plex-sans, system-ui), sans-serif' }}
        >
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-purple-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">
            Daftar Mantan Surya
          </span>
        </h1>
        <p className="mt-4 text-cyan-300/80 italic text-sm md:text-base">
          Data ini diambil dari API /db/customers
        </p>

        {/* Holographic neon underline */}
        <div className="mt-6 h-[2px] w-48 sm:w-64 bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-[1px]" />
      </div>
    </section>
  );
}
