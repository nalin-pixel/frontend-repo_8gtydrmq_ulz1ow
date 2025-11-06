import React from 'react';
import HeroCover from './components/HeroCover';
import NeonHeader from './components/NeonHeader';
import CyberTable from './components/CyberTable';
import BackgroundFX from './components/BackgroundFX';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0f1a] text-white relative font-['Orbitron',_ui-sans-serif,_system-ui]">
      {/* Ambient background accents */}
      <BackgroundFX />

      {/* Hero section with Spline cover */}
      <HeroCover />

      {/* Main content */}
      <main className="relative z-10 mx-auto max-w-6xl px-4 -mt-12 md:-mt-16">
        <div className="animate-[fadeIn_800ms_ease-out]">
          <NeonHeader />
          <CyberTable />
        </div>
      </main>

      {/* Keyframes for fade-in */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(6px);} to { opacity: 1; transform: translateY(0);} }
      `}</style>
    </div>
  );
}

export default App;
