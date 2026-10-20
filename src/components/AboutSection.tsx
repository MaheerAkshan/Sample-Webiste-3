import React from 'react';
import { Cpu, HeartPulse, Tv, Sparkles, ShieldAlert, Zap, Layers, Award } from 'lucide-react';

export default function AboutSection() {
  const spaFeatures = [
    {
      icon: Tv,
      title: "4K VR Cinema Headsets",
      desc: "Immerse yourself in concert films, tranquil ocean visualizer, or Netflix during your procedure with noise-canceling Bose headphones."
    },
    {
      icon: Zap,
      title: "Zero-Pain Laser Dentistry",
      desc: "Waterlase hydro-photonic energy cleans teeth and contours gums without heat, friction, or drill vibrations."
    },
    {
      icon: Cpu,
      title: "On-Site 3D Ceramic Lab",
      desc: "Custom Swiss E.max porcelain crowns and veneers milled in 20 minutes for single-visit smile transformations."
    },
    {
      icon: HeartPulse,
      title: "Targeted Micro-Anesthesia",
      desc: "Computer-controlled wand delivers numbing agent at the exact painless cellular absorption threshold."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#080C14]">
      {/* Glow Ambient Lights */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full glass-panel border border-teal-500/30 text-teal-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            The AURA Difference
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Where Biological Precision Meets <br />
            <span className="gradient-text-teal">5-Star Spa Luxury.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            We eliminated clinical white-coat anxiety, loud drills, and painful recovery. Step into a world of architectural calm, Japanese mindfulness, and Swiss surgical engineering.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Visual Container */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200" 
                alt="Luxury Dental Suite" 
                className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-[#080C14]/30 to-transparent"></div>
              
              {/* Overlay Glass Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 glass-panel rounded-2xl border border-white/15 backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6 text-teal-300" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Private VIP Hospitality Lounge</h4>
                    <p className="text-xs text-slate-300 mt-0.5">Complimentary matcha bar, organic juices, aromatherapy, and dedicated personal care concierge.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Features Accordion Grid */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
            {spaFeatures.map((f, index) => {
              const Icon = f.icon;
              return (
                <div 
                  key={index}
                  className="p-6 glass-panel rounded-2xl border border-white/10 hover:border-teal-500/40 hover:bg-slate-900/60 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-teal-500/50 transition-all">
                    <Icon className="w-6 h-6 text-teal-400" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Stats Highlight Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 glass-panel rounded-3xl border border-white/10 shadow-2xl backdrop-blur-2xl">
          <div className="text-center p-4">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading block gradient-text-teal">
              18+
            </span>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1 block">Years of Surgical Excellence</span>
          </div>
          <div className="text-center p-4 border-l border-white/10">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading block gradient-text-teal">
              12,500+
            </span>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1 block">Implants Successfully Placed</span>
          </div>
          <div className="text-center p-4 border-l border-white/10">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading block gradient-text-teal">
              100%
            </span>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1 block">Painless Treatment Protocol</span>
          </div>
          <div className="text-center p-4 border-l border-white/10">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading block gradient-text-teal">
              0% APR
            </span>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1 block">Flexible In-House Financing</span>
          </div>
        </div>

      </div>
    </section>
  );
}
