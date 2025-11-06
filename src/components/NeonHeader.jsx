import React from 'react';

export default function NeonHeader() {
  return (
    <header className="relative z-10 text-center px-4">
      <h1
        className="text-3xl md:text-5xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-purple-500 drop-shadow-[0_0_10px_rgba(168,85,247,0.6)] animate-pulse"
        style={{
          textShadow:
            '0 0 10px rgba(34,211,238,0.8), 0 0 20px rgba(217,70,239,0.6), 0 0 30px rgba(147,51,234,0.6)'
        }}
      >
        Daftar Mantan Surya
      </h1>
      <p className="mt-2 text-cyan-300/80 italic text-sm md:text-base">
        Data ini diambil dari API /db/customers
      </p>
    </header>
  );
}
