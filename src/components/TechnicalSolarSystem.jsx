import React, { useEffect, useRef } from 'react';
import {
  Terminal,
  Workflow,
  Award,
  Package,
  Cpu,
  Github,
  Globe,
  Database,
  Cloud,
  FileJson,
  Layout,
  Layers,
  Container,
  Flame,
  Zap,
  Box,
  CodeXml,
  Compass
} from 'lucide-react';
import gsap from 'gsap';

const SkillOrbit = ({ children, radius, speed, reverse = false }) => {
  const orbitRef = useRef(null);

  useEffect(() => {
    gsap.to(orbitRef.current, {
      rotation: reverse ? -360 : 360,
      duration: speed,
      repeat: -1,
      ease: "none"
    });
  }, [speed, reverse]);

  return (
    <div
      ref={orbitRef}
      className="absolute border border-orange-500/10 rounded-full flex items-center justify-center pointer-events-none"
      style={{ width: radius * 2, height: radius * 2 }}
    >
      {children}
    </div>
  );
};

const OrbitItem = ({ icon: Icon, image, label, angle, radius, reverse = false }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    gsap.to(itemRef.current, {
      rotation: reverse ? 360 : -360,
      duration: 30,
      repeat: -1,
      ease: "none"
    });
  }, [reverse]);

  const x = Math.cos(angle * (Math.PI / 180)) * radius;
  const y = Math.sin(angle * (Math.PI / 180)) * radius;

  return (
    <div
      ref={itemRef}
      className="absolute flex flex-col items-center justify-center pointer-events-auto group"
      style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: 'translate(-50%, -50%)' }}
    >
      <div className="w-12 h-12 md:w-14 md:h-14 bg-[#0a0a0a] border border-orange-500/20 rounded-2xl flex items-center justify-center p-3 transition-all duration-500 group-hover:border-orange-500 group-hover:bg-orange-500/10 shadow-[0_0_20px_rgba(249,115,22,0.05)] group-hover:shadow-[0_0_30px_rgba(249,115,22,0.2)] group-hover:scale-110 relative overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={label}
            className="w-full h-full object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
          />
        ) : Icon ? (
          <Icon size={24} className="text-orange-500/50 group-hover:text-orange-500 transition-colors duration-500" />
        ) : (
          <span className="text-[10px] font-extrabold italic text-orange-500/50">{label}</span>
        )}
      </div>
      <span className="absolute -bottom-8 text-[9px] uppercase tracking-widest text-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap font-black">
        {label}
      </span>
    </div>
  );
};

const TechnicalSolarSystem = () => {
  return (
    <section id="skills" className="relative bg-[#050505] py-24 px-8 md:px-24 z-20 overflow-hidden min-h-screen flex flex-col items-center justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="text-center mb-24 relative z-10">
        <h6 className="text-[10px] uppercase tracking-[0.5em] text-orange-500 mb-6 font-bold italic">
          Technical Universe
        </h6>
        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none text-white mb-6">
          Skill <span className="text-orange-500">Orbit.</span>
        </h2>
      </div>

      <div className="relative w-full max-w-[900px] aspect-square flex items-center justify-center mb-12 md:mb-24 scale-[0.5] sm:scale-[0.7] md:scale-100 transition-transform duration-700">

        {/* Core - Skills Center */}
        <div className="relative z-30 flex flex-col items-center">
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border-2 border-orange-500/50 flex flex-col items-center justify-center bg-[#050505] shadow-[0_0_50px_rgba(249,115,22,0.2)]">
            <Terminal size={40} className="text-orange-500 mb-2" />
            <span className="text-[11px] uppercase tracking-[0.3em] font-extrabold text-orange-500">Skills</span>
          </div>
        </div>

        {/* Inner Orbit: Core Languages & Frameworks */}
        <SkillOrbit radius={160} speed={50} reverse={false}>
          <OrbitItem label="HTML5" angle={0} radius={160} image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" reverse={false} />
          <OrbitItem label="PHP" angle={60} radius={160} image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" reverse={false} />
          <OrbitItem label="JS" angle={120} radius={160} image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" reverse={false} />
          <OrbitItem label="Laravel" angle={180} radius={160} image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" reverse={false} />
          <OrbitItem label="React" angle={240} radius={160} image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" reverse={false} />
          <OrbitItem label="CSS3" angle={300} radius={160} image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" reverse={false} />
        </SkillOrbit>

        {/* Middle Orbit: Essentials & Databases */}
        <SkillOrbit radius={260} speed={70} reverse={true}>
          <OrbitItem label="Tailwind" angle={45} radius={260} image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" reverse={true} />
          <OrbitItem label="MySQL" angle={135} radius={260} image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" reverse={true} />
          <OrbitItem label="PostgreSQL" angle={225} radius={260} image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" reverse={true} />
          <OrbitItem label="Bootstrap" angle={315} radius={260} image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" reverse={true} />
        </SkillOrbit>

        {/* Outer Orbit: Cloud & Ecosystem */}
        <SkillOrbit radius={360} speed={90} reverse={false}>
          <OrbitItem label="Git" angle={0} radius={360} image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" reverse={false} />
          <OrbitItem label="AWS" angle={60} radius={360} image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" reverse={false} />
          <OrbitItem label="Redis" angle={120} radius={360} image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" reverse={false} />
          <OrbitItem label="WordPress" angle={180} radius={360} image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" reverse={false} />
          <OrbitItem label="Socket.io" angle={240} radius={360} image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" reverse={false} />
          <OrbitItem label="Composer" angle={300} radius={360} image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/composer/composer-original.svg" reverse={false} />
        </SkillOrbit>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-16 relative z-10 px-4 md:px-0">
        {[
          { icon: Award, value: "BS CS", label: "Virtual University", sub: "Currently In Progress" },
          { icon: Package, value: "5+", label: "Projects Completed", sub: "Full Lifecycle Delivery" },
          { icon: Cpu, value: "Modern Stack", label: "Laravel 12 & React", sub: "Enterprise Architecture" }
        ].map((stat, i) => (
          <div key={i} className="bg-white/[0.03] border border-white/5 p-10 rounded-3xl flex flex-col items-start hover:bg-white/[0.06] transition-all group scale-95 hover:scale-100 duration-500 translate-y-0 hover:-translate-y-2">
            <div className="p-4 rounded-xl bg-orange-500/5 text-orange-500 mb-8 border border-orange-500/10 group-hover:scale-110 transition-transform duration-500">
              <stat.icon size={26} />
            </div>
            <h3 className="text-4xl font-bold text-white mb-3 tracking-tighter">{stat.value}</h3>
            <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.3em] mb-2">{stat.label}</p>
            <p className="text-white/30 text-[9px] uppercase tracking-widest italic">{stat.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSolarSystem;
