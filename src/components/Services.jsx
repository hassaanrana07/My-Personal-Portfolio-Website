import React, { useState, useRef, useEffect } from 'react';
import {
  Code2,
  Settings,
  Database,
  Share2,
  Rocket,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const ServiceCard = ({ title, tagline, description, tech, icon: Icon, isCenter }) => (
  <div className={cn(
    "glass-morphism p-8 md:p-10 rounded-[2.5rem] group transition-all duration-700 w-[90%] md:w-[30%] flex-shrink-0 relative flex flex-col items-center text-center",
    isCenter
      ? "scale-100 md:scale-110 -translate-y-6 md:-translate-y-12 bg-white/[0.08] border-orange-500/30 shadow-[0_20px_40px_rgba(249,115,22,0.1)] md:shadow-[0_30px_60px_rgba(249,115,22,0.15)] opacity-100 z-10"
      : "hidden md:flex scale-90 translate-y-0 bg-white/[0.02] opacity-30 blur-[2px] pointer-events-none"
  )}>
    {/* Keyed container to trigger animation on every content change */}
    <div key={title} className={cn("flex flex-col items-center w-full h-full", isCenter && "reveal-card")}>
      <div className={cn(
        "mb-6 inline-flex p-5 rounded-2xl transition-all duration-500",
        isCenter ? "bg-orange-500/20 text-orange-500 scale-110 shadow-[0_0_20px_rgba(249,115,22,0.2)]" : "bg-white/5 text-white/20"
      )}>
        <Icon size={28} />
      </div>

      <h3 className={cn(
        "text-xl md:text-2xl font-bold tracking-tight mb-2 transition-colors duration-500",
        isCenter ? "text-white" : "text-white/40"
      )}>
        {title}
      </h3>

      <p className={cn(
        "text-[9px] uppercase tracking-[0.3em] font-black mb-6 transition-colors duration-500",
        isCenter ? "text-orange-500/80" : "text-white/20"
      )}>
        {tagline}
      </p>

      <p className={cn(
        "text-xs leading-relaxed mb-8 italic transition-colors duration-500 line-clamp-4 px-2",
        isCenter ? "text-white/50" : "text-white/10"
      )}>
        {description}
      </p>

      <div className={cn(
        "flex flex-wrap justify-center gap-2 pt-6 border-t w-full transition-colors duration-500",
        isCenter ? "border-white/10" : "border-white/5"
      )}>
        {tech.split(', ').slice(0, 3).map((t) => (
          <span key={t} className={cn(
            "text-[8px] uppercase tracking-widest px-2 py-1 rounded-md border transition-all duration-500",
            isCenter ? "text-white/30 border-white/10 bg-white/5" : "text-white/5 border-transparent"
          )}>
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const sliderRef = useRef(null);

  // Scroll-triggered entrance animation via IntersectionObserver
  useEffect(() => {
    const targets = [headingRef.current, sliderRef.current].filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('anim-visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    targets.forEach((el) => observer.observe(el));
    return () => targets.forEach((el) => observer.unobserve(el));
  }, []);

  const services = [
    {
      title: "Frontend Engineering",
      tagline: "High-Performance Interfaces",
      description: "I architect high-speed Single Page Applications (SPAs) using React.js and Vue.js. My approach prioritizes core web vitals through efficient code-splitting and custom animation hooks.",
      tech: "React.js, Vue.js, Tailwind CSS, Vite, Chart.js",
      icon: Code2
    },
    {
      title: "Backend Development",
      tagline: "Scalable API Ecosystems",
      description: "I build secure, scalable backend infrastructures using Laravel 12 and Node.js. Specialized in high-traffic optimization using Redis caching to ensure sub-second response times.",
      tech: "Laravel 12, Node.js, PHP, REST APIs, JWT, Redis",
      icon: Settings
    },
    {
      title: "Database Architecture",
      tagline: "Enterprise Data Modeling",
      description: "I design high-performance database schemas in MySQL and PostgreSQL. Architecture focusing on RBAC and complex relationship modeling for multi-tenant environments.",
      tech: "MySQL, PostgreSQL, RBAC, Schema Design",
      icon: Database
    },
    {
      title: "API Integration",
      tagline: "Mission-Critical Connectivity",
      description: "I integrate secure payment gateways and external notification APIs. My integrations are built with resilience in mind, featuring advanced error handling for absolute reliability.",
      tech: "Stripe, PayPal, Google Maps, Mailgun, Twilio",
      icon: Share2
    },
    {
      title: "DevOps & Cloud",
      tagline: "Security & Environment",
      description: "I manage the full deployment lifecycle on cloud platforms like AWS, focusing on security hardening. Implementing CI/CD pipelines to ensure seamless production delivery.",
      tech: "VPS, AWS, Git, GitHub, CI/CD, npm/npx",
      icon: Rocket
    }
  ];

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % services.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + services.length) % services.length);

  return (
    <section id="services" className="relative bg-[#050505] py-24 md:py-32 px-4 md:px-8 overflow-hidden z-20">
      {/* Section Header with arrows top-right */}
      <div ref={headingRef} className="max-w-7xl mx-auto mb-24 md:mb-32 anim-hidden">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-0">
          <div>
            <h6 className="text-[10px] uppercase tracking-[0.5em] text-orange-500 mb-6 font-bold italic">
              Core Specializations
            </h6>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none text-white transition-all duration-500">
              Architecture & <span className="text-orange-500">Code.</span>
            </h2>
          </div>

          {/* Arrows — adjusted for mobile position */}
          <div className="flex items-center gap-4 translate-y-0 md:translate-y-6">
            <button
              onClick={handlePrev}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-orange-500 hover:border-orange-500/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.1)] transition-all duration-500 group"
            >
              <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-orange-500 hover:border-orange-500/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.1)] transition-all duration-500 group"
            >
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Slider Viewport */}
      <div ref={sliderRef} className="relative flex flex-col items-center anim-hidden">
        <div className="flex items-center justify-center w-full max-w-7xl gap-[3%] h-[500px] md:h-[550px]">
          {[-1, 0, 1].map((offset) => {
            const index = (activeIndex + offset + services.length) % services.length;
            const service = services[index];
            return (
              <ServiceCard
                key={index}
                {...service}
                isCenter={offset === 0}
              />
            );
          })}
        </div>

        {/* Pagination dots only */}
        <div className="flex items-center justify-center gap-3 mt-16 relative z-30">
          {services.map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-[1.5px] rounded-full transition-all duration-700",
                i === activeIndex ? "w-12 bg-orange-500" : "w-4 bg-white/10"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
