import React, { useRef, useState, useEffect } from 'react';
import ScrollyCanvas from './components/ScrollyCanvas';
import Overlay from './components/Overlay';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import TechnicalSolarSystem from './components/TechnicalSolarSystem';
import Contact from './components/Contact';
import { useScrollProgress } from './hooks/useScrollProgress';

/**
 * App: The root component for Hassaan Ali Akbar's Portfolio.
 * Orchestrates the cinematic scrollytelling experience.
 */
function App() {
  const scrollContainerRef = useRef(null);
  const progress = useScrollProgress(scrollContainerRef);

  // Navbar only visible within the hero section (500vh tall)
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hero section is 500vh — hide navbar once user scrolls past it
      const heroHeight = window.innerHeight * 5;
      setShowNav(window.scrollY < heroHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative flex flex-col font-inter selection:bg-orange-500 selection:text-black bg-[#050505]">

      {/* 
        1. HERO: THE STICKY SCROLLER 
      */}
      <div
        ref={scrollContainerRef}
        className="relative w-full h-[500vh]"
      >
        <div className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-[#121212]">
          <ScrollyCanvas progress={progress} />
          <Overlay progress={progress} />
        </div>
      </div>

      {/* 
        2. ABOUT: THE ARCHITECT 
      */}
      <div className="relative z-20" id="about">
        <About />
      </div>

      {/* 
        3. SERVICES: TECHNICAL CAPABILITIES (NOW A SLIDER)
      */}
      <div className="relative z-20" id="services">
        <Services />
      </div>

      {/* 
        4. PROJECTS: FLAGSHIP WORKS 
      */}
      <div className="relative z-20" id="work">
        <Projects />
      </div>

      {/* 
        5. SKILLS: TECHNICAL SOLAR SYSTEM (UPDATED ICONS)
      */}
      <div className="relative z-20" id="skills">
        <TechnicalSolarSystem />
      </div>

      {/* 
        6. CONTACT: LET'S CONNECT
      */}
      <div className="relative z-20" id="contact">
        <Contact />
      </div>

      {/* 
        FOOTER: FINAL BRANDING 
      */}
      <footer className="relative bg-[#050505] py-24 px-6 md:px-24 z-20 border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="text-8xl md:text-[20rem] font-bold text-white/[0.03] absolute top-[-3rem] md:top-[-15rem] left-0 md:left-0 pointer-events-none select-none tracking-tighter">
            Hassaan
          </div>

          <h2 className="text-4xl md:text-8xl font-bold tracking-tighter text-center mb-16 relative text-white">
            Let's build something <br />
            <span className="text-orange-500 italic lowercase">extraordinary.</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-6 md:gap-16">
            {[
              { name: 'GitHub', href: 'https://github.com/hassaanrana07', download: null },
              { name: 'LinkedIn', href: 'https://www.linkedin.com/in/hassaanaliakbar', download: null },
              { name: 'Resume', href: '/Hassaan Ali Akbar Resume.pdf', download: 'Hassaan Ali Akbar Resume.pdf' },
              { name: 'Email', href: 'mailto:hassaanalee07@gmail.com', download: null }
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target={social.href.startsWith('http') ? "_blank" : undefined}
                rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                download={social.download || undefined}
                className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold text-white/40 hover:text-white transition-all border-b border-transparent hover:border-orange-500 pb-2"
              >
                {social.name}
              </a>
            ))}
          </div>

          <p className="mt-20 text-center text-white/20 text-[9px] md:text-[10px] uppercase tracking-[0.5em]">
            Hassaan Ali Akbar © 2026 • Handcrafted with passion and logic.
          </p>
        </div>
      </footer>

      {/* GLOBAL NAVIGATION - MOBILITY OPTIMIZED */}
      <nav
        className={`fixed top-0 left-0 w-full p-6 md:p-12 z-50 flex items-center justify-between transition-all duration-500 ease-in-out ${showNav ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
      >
        <div className="flex items-center gap-4 pointer-events-auto group cursor-pointer">
          <div className="w-10 h-10 border border-orange-500/40 rounded-lg flex items-center justify-center font-bold text-xl text-white transition-all duration-300 group-hover:bg-orange-500 group-hover:text-black group-hover:scale-110 shadow-[0_0_15px_rgba(249,115,22,0.1)]">
            H
          </div>
          <span className="text-[10px] uppercase font-bold tracking-[0.4em] opacity-40 group-hover:opacity-100 transition-all hidden lg:block text-white">
            Hassaan Ali Akbar
          </span>
        </div>

        <div className="flex items-center gap-4 md:gap-10 pointer-events-auto bg-black/5 md:bg-transparent px-4 py-2 md:px-0 md:py-0 rounded-full backdrop-blur-md md:backdrop-blur-none border border-white/5 md:border-transparent">
          {[
            { name: 'Home', href: '#', mobile: true },
            { name: 'About', href: '#about', mobile: false },
            { name: 'Services', href: '#services', mobile: true },
            { name: 'Work', href: '#work', mobile: true },
            { name: 'Skills', href: '#skills', mobile: false },
            { name: 'Contact', href: '#contact', mobile: true }
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-[8px] md:text-[10px] uppercase font-bold tracking-[0.3em] text-white/40 hover:text-white transition-all cursor-pointer relative ${!item.mobile ? 'hidden md:block' : ''}`}
            >
              {item.name}
            </a>
          ))}
          <a href="#contact" className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-lg transition-all text-[8px] uppercase tracking-[0.2em] ml-2 hidden sm:block">
            Hire
          </a>
        </div>
      </nav>

    </main>
  );
}

export default App;
