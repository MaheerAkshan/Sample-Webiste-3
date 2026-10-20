import React from 'react';
import { TESTIMONIALS, CLINIC_INFO } from '../data/dentalData';
import { Sparkles, Star, Quote, CheckCircle2, Play } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-24 relative overflow-hidden bg-[#060911]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full glass-panel border border-teal-500/30 text-teal-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Verified Patient Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Loved by 15,000+ Patients <br />
            <span className="gradient-text-teal">Rated {CLINIC_INFO.googleRating} Stars on Google.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Read real unedited feedback from clients who transformed their smiles and oral health at AURA Dental Studio.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div 
              key={t.id}
              className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between space-y-6 relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5 group-hover:text-teal-500/10 transition-colors pointer-events-none" />

              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs text-slate-400 ml-2">{t.date}</span>
                </div>

                {/* Comment Body */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              {/* Patient Info Footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-teal-500/30 shrink-0"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold text-white">{t.name}</h4>
                    {t.verifiedBadge && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                    )}
                  </div>
                  <p className="text-[11px] text-teal-300 font-semibold">{t.treatment}</p>
                  <p className="text-[10px] text-slate-400">{t.location}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Video Testimonial Preview Banner */}
        <div className="mt-16 relative rounded-3xl overflow-hidden glass-panel border border-white/15 shadow-2xl p-8 sm:p-12 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-8 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#080C14]">
          <div className="space-y-3 max-w-2xl">
            <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider inline-block">
              Cinematic Video Stories
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Watch Sophia’s 7-Day Hollywood Smile Journey
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              See raw unedited 4K footage of digital smile simulation, veneer placement, and immediate reaction after seeing her new smile in the mirror for the first time.
            </p>
          </div>

          <button 
            onClick={() => alert("Playing 4K Patient Transformation Documentary")}
            className="group relative flex items-center gap-4 px-6 py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-bold text-sm shadow-xl shadow-teal-500/25 hover:scale-105 transition-all shrink-0"
          >
            <div className="w-10 h-10 rounded-full bg-slate-950 text-teal-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-4 h-4 fill-teal-400 ml-0.5" />
            </div>
            <span>Watch 4K Video Story (2:45)</span>
          </button>
        </div>

      </div>
    </section>
  );
}
