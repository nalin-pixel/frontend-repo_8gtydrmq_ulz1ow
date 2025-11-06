import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <section className="relative h-[40vh] md:h-[55vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/BL9Cjn3fkAdLBhXm/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* subtle gradient and vignette to blend with the page, doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0f1a66] to-[#0b0f1a]" />
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,255,255,0.15),transparent_60%)]" />
      </div>
    </section>
  );
}
