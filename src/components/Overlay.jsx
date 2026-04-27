import React from 'react';

/**
 * Overlay: Text elements for the Hero section.
 * Updated to only show "Hassaan Ali Akbar" and "Full-Stack Web Developer".
 */
const Overlay = ({ progress }) => {
  // Helper to calculate opacity and transform based on progress window
  const getSectionStyle = (start, end) => {
    const range = end - start;
    const p = Math.max(0, Math.min(1, (progress - start) / range));

    // Hide at start (load/refresh), fade in quickly after scrolling starts
    let opacity = 0;
    if (p > 0.05 && p < 0.15) {
      opacity = (p - 0.05) / 0.1;
    } else if (p >= 0.15 && p <= 0.8) {
      opacity = 1;
    } else if (p > 0.8) {
      opacity = Math.max(0, 1 - (p - 0.8) / 0.2);
    }

    // Parallax translateY shift
    const translateY = (1 - p) * 80 - 40;

    return {
      opacity,
      transform: `translateY(${translateY}px)`,
      display: opacity === 0 ? 'none' : 'block'
    };
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-10 p-4 md:px-12 py-12 overflow-hidden flex flex-col justify-center">

      {/* Split Hero Layout: Name (Far Left) and Role (Far Right) */}
      <section
        className="w-full h-full relative transition-all duration-300 max-w-[1500px] mx-auto"
        style={getSectionStyle(0, 1)}
      >
        {/* Far Left Side: Name Stacking */}
        <div className="absolute top-[15%] md:top-1/4 left-0 flex flex-col items-start px-4 md:px-0">
          <h1 className="text-4xl md:text-[5.5rem] font-bold tracking-tighter leading-[0.85] text-white uppercase transition-all duration-500">
            Hassaan
          </h1>
          <h1 className="text-4xl md:text-[5.5rem] font-bold tracking-tighter leading-[0.85] text-transparent border-text-stroke uppercase transition-all duration-500">
            Ali Akbar
          </h1>
        </div>

        {/* Far Right Side: Role Stacking */}
        <div className="absolute bottom-[15%] md:bottom-1/4 right-0 flex flex-col items-end px-4 md:px-0">
          <div className="hidden md:block h-[1.5px] w-16 bg-orange-500 mb-8 self-end opacity-50"></div>
          <p className="text-2xl md:text-[4.5rem] font-bold tracking-tighter leading-[0.9] text-white uppercase text-right transition-all duration-500">
            Full-Stack
          </p>
          <p className="text-lg md:text-[2.5rem] font-bold tracking-tighter leading-[0.9] text-orange-500 uppercase text-right italic transition-all duration-500">
            Web Developer
          </p>
          <div className="mt-6 md:mt-8 flex items-center gap-3 text-[7px] md:text-[9px] uppercase tracking-[0.4em] text-white/20 font-black">
            <span>Enterprise Systems</span>
            <div className="w-1 h-1 rounded-full bg-orange-500/30"></div>
            <span>2026 Archive</span>
          </div>
        </div>
      </section>

      {/* Scroll indicator for the initial state */}
      {progress < 0.05 && (
        <div className="absolute bottom-12 flex flex-col items-center animate-bounce opacity-30">
          <span className="text-[8px] uppercase tracking-[0.4em] text-white/50 font-bold mb-2">Initialize Scroll</span>
          <div className="w-[1px] h-12 bg-orange-500/40"></div>
        </div>
      )}
    </div>
  );
};

export default Overlay;
