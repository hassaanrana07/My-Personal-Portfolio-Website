import React, { useState } from 'react';
import {
  Building2,
  Users2,
  Construction,
  Wind,
  Search,
  ExternalLink,
  FileText,
  Terminal,
  FileSearch,
  CheckCircle2,
  Dot,
  Github
} from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 0,
      title: "Property Management System",
      shortTitle: "Property Management",
      category: "Full-scale ERP for Real Estate",
      badge: "12+ Modules",
      stack_primary: "REACT",
      icon: Building2,
      description: "An enterprise-grade platform designed for large-scale real estate firms. The system automates lease agreements, maintenance requests, and financial reporting across multiple regions. Integrated with real-time analytics and automated billing cycles.",
      tech: ["Laravel 10", "React.js", "Tailwind CSS", "MySQL", "Redis", "Stripe API"],
      status: [
        { label: "Core Engine", value: "100%" },
        { label: "Mobile Sync", value: "85%" }
      ],
      timeline: [
        { phase: "Phase 1: Architecture", date: "Jan - Mar 2023" },
        { phase: "Phase 2: Alpha Testing", date: "Apr - Jun 2023" }
      ],
      version: "V2.4.0",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D",
      github: "https://github.com/hassaanrana07/Rent-Bro---Property-and-Rental-Management-System.git"
    },
    {
      id: 1,
      title: "Personal Portfolio Website",
      shortTitle: "Portfolio",
      category: "Frontend Development",
      badge: "Responsive",
      stack_primary: "REACT",
      icon: Users2,
      description: "A modern, interactive personal portfolio website showcasing projects, skills, and professional experience with high-end animations and responsive design.",
      tech: ["React.js", "Tailwind CSS", "Vite"],
      status: [
        { label: "UI/UX Design", value: "100%" },
        { label: "Development", value: "100%" }
      ],
      timeline: [
        { phase: "Initial Release", date: "Jan - Feb 2024" },
        { phase: "Refinements", date: "Mar 2024" }
      ],
      version: "V1.0.0",
      image: "/Profile.png",
      github: "https://github.com/hassaanrana07/My-Personal-Portfolio-Website.git"
    },
    {
      id: 2,
      title: "Civil Works ERP",
      shortTitle: "Civil Works ERP",
      category: "Infrastructure Tracking System",
      badge: "15 Modules",
      stack_primary: "LARAVEL",
      icon: Construction,
      description: "Enterprise Resource Planning tool specifically tailored for infrastructure and construction projects. Handles material procurement, labor attendance via biometric integration, and project milestone tracking with deep analytics.",
      tech: ["Laravel 11", "MySQL", "Inertia.js", "Redis", "Real-time Charts"],
      status: [
        { label: "Material Tracking", value: "100%" },
        { label: "Labor Analytics", value: "90%" }
      ],
      timeline: [
        { phase: "Core Development", date: "May - Jul 2023" },
        { phase: "Field Testing", date: "Aug - Sep 2023" }
      ],
      version: "V3.1.0",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uc3RydWN0aW9ufGVufDB8fDB8fHww",
      github: "https://github.com/hassaanrana07/Bulk-Beam-Construction-Management-System.git"
    },
    {
      id: 3,
      title: "Air-Sense AQI Monitor",
      shortTitle: "Air-Sense AQI",
      category: "Real-Time Air Quality System",
      badge: "Live WebSockets",
      stack_primary: "REACT",
      icon: Wind,
      description: "Real-time air quality monitoring and alert system that tracks live AQI data across cities using EPA-standard pollutant calculations. Features an interactive dark-themed map with live AQI nodes, WebSocket-powered threshold alerts, and downloadable date-range reports with secure user authentication.",
      tech: ["Laravel", "React.js", "Vite", "MySQL", "Redis", "Tailwind CSS", "WebSockets", "Leaflet.js", "OpenWeatherMap API", "Laravel Sanctum"],
      status: [
        { label: "AQI Engine & Map", value: "100%" },
        { label: "Real-Time Alerts", value: "95%" },
        { label: "Auth & Favorites", value: "100%" },
        { label: "Reports & Downloads", value: "85%" }
      ],
      timeline: [
        { phase: "Core Backend & API Integration", date: "Oct – Nov 2024" },
        { phase: "Frontend & Map Integration", date: "Nov – Dec 2024" },
        { phase: "WebSockets & Alerts", date: "Jan 2025" },
        { phase: "Testing & Refinements", date: "Feb 2025" }
      ],
      version: "V1.5.0",
      image: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=500&auto=format&fit=crop&q=60",
      github: "https://github.com/hassaanrana07/AirSense.git"
    }
  ];

  const current = projects[activeProject];

  return (
    <section id="work" className="relative bg-[#0d0a08] py-24 px-8 md:px-24 z-20 min-h-screen font-inter">
      <div className="max-w-7xl mx-auto px-2 md:px-0">

        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white mb-6">
              Enterprise <span className="text-orange-500">Dashboard</span>
            </h2>
            <p className="text-white/40 text-base md:text-lg leading-relaxed max-w-xl italic">
              Architecting scalable solutions for complex business workflows. From HRMS to real-time property management systems.
            </p>
          </div>

          <div className="relative w-full md:w-80 group">
            <div className="absolute inset-y-0 left-4 flex items-center text-orange-500/50">
              <Search size={18} />
            </div>
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full bg-white/[0.03] border border-white/5 py-4 pl-12 pr-4 rounded-xl text-white text-sm outline-none focus:border-orange-500/20 transition-all placeholder:text-white/20"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Sidebar: Project Directory - Responsive Stacking */}
          <div className="lg:col-span-4 flex flex-col gap-4 md:gap-6 order-2 lg:order-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">Project Directory</span>
              <span className="bg-orange-500/10 text-orange-500 text-[9px] font-bold px-2 py-1 rounded">4 Active</span>
            </div>

            {projects.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActiveProject(i)}
                className={`flex items-center gap-4 md:gap-5 p-4 md:p-6 rounded-2xl border transition-all duration-500 text-left group
                  ${activeProject === i
                    ? 'bg-orange-500/5 border-orange-500/40 shadow-[0_0_30px_rgba(249,115,22,0.1)] opacity-100'
                    : 'bg-white/[0.02] border-white/5 opacity-40 hover:opacity-100'
                  }`}
              >
                <div className={`p-3 rounded-xl transition-all duration-500 ${activeProject === i ? 'bg-orange-500 text-black shadow-[0_0_15px_rgba(249,115,22,0.3)]' : 'bg-white/5 text-white/40'}`}>
                  <p.icon size={18} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-white font-bold text-sm tracking-tight">{p.shortTitle}</h4>
                    {activeProject === i && <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>}
                  </div>
                  <p className="text-[9px] uppercase tracking-widest text-white/30 font-medium">{p.category}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Main Display Area */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="relative glass-morphism rounded-[2rem] md:rounded-[2.5rem] border border-white/5 overflow-hidden transition-all duration-700 bg-[#16120e]">

              {/* Featured Image Header - Better Mobile Aspect Ratio */}
              <div className="relative aspect-video md:aspect-[21/9] overflow-hidden group">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-1000 scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16120e] via-transparent to-transparent"></div>
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-8">
                  <div className="flex items-center gap-3 mb-2 md:mb-3">
                    <span className="bg-orange-500 text-black text-[7px] md:text-[9px] font-black px-2 py-1 rounded uppercase tracking-widest">Featured Work</span>
                    <span className="bg-white/10 text-white/60 text-[7px] md:text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-widest backdrop-blur-md">{current.version}</span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold tracking-tighter text-white uppercase drop-shadow-2xl">
                    {current.title}
                  </h3>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 md:p-8">

                {/* Row 1: Summary + Tech side by side (Stack on mobile) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <div className="flex items-center gap-2 mb-4 text-orange-500">
                      <FileSearch size={14} />
                      <h5 className="text-[9px] uppercase tracking-[0.3em] font-black">Project Summary</h5>
                    </div>
                    <p className="text-white/50 text-xs leading-relaxed italic line-clamp-4 md:line-clamp-6">
                      {current.description}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-4 text-orange-500">
                      <Terminal size={14} />
                      <h5 className="text-[9px] uppercase tracking-[0.3em] font-black">Tech Stack</h5>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {current.tech.map((t, index) => (
                        <span key={index} className="text-[7px] md:text-[8px] font-bold text-orange-500/80 px-2 py-1 bg-orange-500/5 rounded-md border border-orange-500/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Row 2: Dev Status + Timeline (Stack on mobile) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-black/20 rounded-2xl p-4 border border-white/5">
                    <h5 className="text-[7px] uppercase tracking-[0.4em] font-black text-white/40 mb-3">Dev Status</h5>
                    <div className="flex flex-col gap-2.5">
                      {current.status.map((s, i) => (
                        <div key={i}>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-[8px] text-white/60 font-medium truncate pr-2">{s.label}</span>
                            <span className="text-[8px] text-orange-500 font-bold shrink-0">{s.value}</span>
                          </div>
                          <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-orange-500" style={{ width: s.value }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-black/20 rounded-2xl p-4 border border-white/5">
                    <h5 className="text-[7px] uppercase tracking-[0.4em] font-black text-white/40 mb-3">Timeline</h5>
                    <div className="flex flex-col gap-2.5">
                      {current.timeline.map((item, i) => (
                        <div key={i} className="flex gap-2 items-start">
                          <Dot size={14} className="text-orange-500 shrink-0 mt-0.5" />
                          <div>
                            <p className="text-[9px] font-bold text-white/80 leading-tight">{item.phase}</p>
                            <span className="text-[7px] text-white/30 uppercase tracking-widest">{item.date}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-5 border-t border-white/5">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 py-4 rounded-xl text-black text-[9px] uppercase font-extrabold tracking-widest transition-all shadow-[0_10px_30px_rgba(249,115,22,0.2)]">
                    <ExternalLink size={14} /> View Live Demo
                  </button>
                  <a href={current.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-white/[0.03] hover:bg-white/5 border border-white/10 py-4 rounded-xl text-white text-[9px] uppercase font-extrabold tracking-widest transition-all">
                    <Github size={14} /> GitHub Repo
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;

