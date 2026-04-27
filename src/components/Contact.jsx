import React, { useState } from 'react';
import { Send, Mail, MapPin, Linkedin, Github, Download, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const RESUME_URL = '/Hassaan Ali Akbar Resume.pdf';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Using Web3Forms - a free service for static sites
      // They just need to swap the ACCESS_KEY with their own from web3forms.com
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: "a2414371-779d-458b-a4b1-1192e66ba66e", // I'll mention this to the user
          subject: `Portfolio Inquiry from ${formData.name}`,
          from_name: "Hassaan's Portfolio",
          ...formData
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative bg-[#050505] py-24 px-8 md:px-24 z-20 border-t border-white/5 overflow-hidden">

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">

        {/* Left Side: Contact Info */}
        <div className="flex flex-col justify-center">
          <h6 className="text-[10px] uppercase tracking-[0.5em] text-orange-500 mb-4 font-bold italic">
            Get in touch
          </h6>
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none text-white mb-8">
            Let's Start a <br /> <span className="text-orange-500 italic lowercase">Project.</span>
          </h2>
          <p className="text-white/40 text-base md:text-lg leading-relaxed italic max-w-lg mb-12">
            I am currently available for new projects or high-impact digital architectural consultations.
            If you're looking for an enterprise-level Full-Stack Developer, my digital door is always open.
          </p>

          <div className="flex flex-col gap-6">
            <a href="mailto:hassaanalee07@gmail.com" className="flex items-center gap-6 group cursor-pointer hover:translate-x-2 transition-all duration-300 w-fit">
              <div className="p-4 rounded-2xl bg-white/5 text-orange-500 group-hover:scale-110 group-hover:bg-orange-500/10 transition-all duration-500">
                <Mail size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] uppercase tracking-widest text-orange-500/60 font-bold mb-1">Email Direct</span>
                <span className="text-white text-base font-bold tracking-tight">hassaanalee07@gmail.com</span>
              </div>
            </a>

            <div className="flex items-center gap-6 group cursor-pointer hover:translate-x-2 transition-all duration-300">
              <div className="p-4 rounded-2xl bg-white/5 text-orange-500 group-hover:scale-110 group-hover:bg-orange-500/10 transition-all duration-500">
                <MapPin size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] uppercase tracking-widest text-orange-500/60 font-bold mb-1">Location</span>
                <span className="text-white text-base font-bold tracking-tight">Lahore, Punjab - Pakistan</span>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/hassaanaliakbar" },
                { icon: Github, href: "https://github.com/hassaanrana07" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-white/5 text-white/40 hover:text-orange-500 hover:bg-orange-500/10 transition-all duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

            {/* ── Download Resume Button ── */}
            <a
              href={RESUME_URL}
              download="Hassaan Ali Akbar Resume.pdf"
              className="mt-2 flex items-center gap-3 w-fit bg-orange-500/10 hover:bg-orange-500 border border-orange-500/30 hover:border-orange-500 px-6 py-4 rounded-2xl text-orange-500 hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(249,115,22,0.08)] hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] group"
            >
              <Download size={18} className="group-hover:animate-bounce" />
              <span className="text-xs uppercase font-black tracking-widest">Download Resume</span>
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="relative group/form">
          <div className="absolute -inset-4 bg-orange-500/5 rounded-[3rem] blur-2xl group-hover/form:bg-orange-500/10 transition-all duration-700"></div>

          <form
            onSubmit={handleSubmit}
            className="relative glass-morphism p-8 md:p-12 rounded-[2.5rem] border border-orange-500/10 flex flex-col gap-8 shadow-2xl"
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-500 mb-6 border border-orange-500/20">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-white/40 text-sm max-w-[250px]">
                  Thank you for reaching out. I'll get back to you shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-orange-500 text-[10px] uppercase font-bold tracking-[0.3em] hover:text-white transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-[8px] uppercase tracking-widest font-bold text-white/30 ml-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white/5 border border-white/5 px-6 py-4 rounded-2xl text-white outline-none focus:border-orange-500/40 transition-all font-medium"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[8px] uppercase tracking-widest font-bold text-white/30 ml-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white/5 border border-white/5 px-6 py-4 rounded-2xl text-white outline-none focus:border-orange-500/40 transition-all font-medium"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[8px] uppercase tracking-widest font-bold text-white/30 ml-2">How can I help?</label>
                  <textarea
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-white/5 border border-white/5 px-6 py-4 rounded-2xl text-white outline-none focus:border-orange-500/40 transition-all resize-none font-medium"
                    placeholder="Describe your project, budget, and timeline..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="mt-4 flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-500 py-5 rounded-2xl text-white text-xs uppercase font-bold tracking-widest transition-all shadow-[0_0_20px_rgba(249,115,22,0.2)] disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {status === 'sending' ? (
                    <>Processing... <Loader2 size={16} className="animate-spin" /></>
                  ) : (
                    <>Send Message <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                  )}
                </button>

                {status === 'error' && (
                  <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-500 text-[10px] uppercase font-bold tracking-widest animate-in slide-in-from-top-2 duration-300">
                    <AlertCircle size={14} /> Something went wrong. Please try again.
                  </div>
                )}
              </>
            )}
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;

