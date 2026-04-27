import React from 'react';
import { User, MapPin, GraduationCap, Award, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative bg-[#050505] py-24 px-6 md:px-24 z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Visual/Profile */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-orange-500/10 rounded-[2rem] blur-2xl group-hover:bg-orange-500/20 transition-all duration-700"></div>
            <div className="relative glass-morphism rounded-[2rem] overflow-hidden aspect-square flex items-center justify-center">
               {/* Profile Image with subtle zoom */}
               <img 
                 src="/hassaan-profile.jpg" 
                 alt="Hassaan Ali Akbar" 
                 className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
               />
            </div>
            
            {/* Floating Info Tags - Adjusted for mobile position */}
            <div className="absolute -bottom-6 right-0 md:-right-6 glass-morphism p-6 rounded-2xl border border-orange-500/20 shadow-xl max-w-[180px] md:max-w-[200px] z-10">
               <div className="flex items-center gap-3 mb-2">
                  <MapPin size={14} className="text-orange-500" />
                  <span className="text-white/80 text-[10px] font-bold uppercase tracking-widest">Lahore, Pakistan</span>
               </div>
               <p className="text-white/40 text-[9px] leading-relaxed italic">Currently at Ronnie Ridge Technology</p>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col gap-8">
            <div>
              <h6 className="text-[10px] uppercase tracking-[0.5em] text-orange-500 mb-4 font-bold italic">
                The Architect
              </h6>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none text-white mb-8">
                Building the <br /> <span className="text-orange-500">future</span> of web.
              </h2>
              <p className="text-white/50 text-base md:text-lg leading-relaxed italic max-w-xl">
                I am a Certified Full-Stack Web Developer specialized in architecting high-performance digital ecosystems. 
                With a deep focus on the Laravel and React ecosystem, I bridge the gap between complex backend logic and 
                fluid, intuitive user experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white/5 rounded-xl text-orange-500">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm tracking-widest uppercase">Education</h4>
                  <p className="text-white/40 text-xs mt-1">BS Computer Science (In Progress)</p>
                  <p className="text-orange-500/50 text-[9px] mt-1 font-bold">Virtual University of Pakistan</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white/5 rounded-xl text-orange-500">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm tracking-widest uppercase">Certification</h4>
                  <p className="text-white/40 text-xs mt-1">Full-Stack Web Dev</p>
                  <p className="text-orange-500/50 text-[9px] mt-1 font-bold">Professional Certified Developer</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white/5 rounded-xl text-orange-500">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm tracking-widest uppercase">Current Role</h4>
                  <p className="text-white/40 text-xs mt-1">Full-Stack Developer</p>
                  <p className="text-orange-500/50 text-[9px] mt-1 font-bold">Ronnie Ridge Technology</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
