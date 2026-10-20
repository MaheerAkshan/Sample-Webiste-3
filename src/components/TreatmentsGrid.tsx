import React, { useState } from 'react';
import { TREATMENTS } from '../data/dentalData';
import { Treatment, TreatmentId } from '../types';
import { Sparkles, ArrowRight, Clock, ShieldCheck, DollarSign } from 'lucide-react';

interface TreatmentsGridProps {
  onSelectTreatment: (treatmentId: TreatmentId) => void;
  onBookTreatment: (treatmentId: TreatmentId) => void;
}

export default function TreatmentsGrid({ onSelectTreatment, onBookTreatment }: TreatmentsGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Cosmetic Dentistry', 'Restorative & Surgical', 'Orthodontics', 'Emergency Services'];

  const filteredTreatments = activeCategory === 'All' 
    ? TREATMENTS 
    : TREATMENTS.filter(t => t.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="treatments" className="py-24 relative overflow-hidden bg-[#060911]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            3D Precision Procedures
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            World-Class Dental Care, <br />
            <span className="gradient-text-blue">Tailored to Perfection.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Click any procedure to inspect full step-by-step 3D anatomical guides, recovery timelines, and transparent pricing models.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold tracking-wide transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 shadow-lg shadow-teal-500/25 scale-105'
                  : 'glass-panel text-slate-300 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Treatments Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTreatments.map((t) => (
            <div
              key={t.id}
              className="glass-panel glass-panel-hover rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Image Header */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={t.heroImage} 
                    alt={t.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent"></div>
                  
                  {/* Category Tag */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full glass-panel border border-white/20 text-[10px] font-bold text-teal-300 uppercase tracking-widest backdrop-blur-md">
                    {t.category}
                  </span>

                  {/* Monthly Estimate Badge */}
                  <span className="absolute bottom-3 right-4 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-500/40 text-teal-300 text-xs font-bold backdrop-blur-md">
                    {t.monthlyEstimate}
                  </span>
                </div>

                {/* Content Box */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors font-heading">
                      {t.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {t.subtitle}
                    </p>
                  </div>

                  {/* Feature Highlights List */}
                  <ul className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-white/5">
                    {t.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0"></span>
                        <span className="truncate">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Duration & Success Rate */}
                  <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] text-slate-400 bg-slate-900/50 p-3 rounded-2xl border border-white/5">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                      <span className="truncate">{t.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{t.successRate} Success</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 grid grid-cols-2 gap-3">
                <button
                  onClick={() => onSelectTreatment(t.id)}
                  className="w-full py-3 rounded-xl glass-panel text-slate-200 font-semibold text-xs border border-white/10 hover:border-teal-500/40 hover:text-teal-300 transition-all text-center flex items-center justify-center gap-1 group/btn"
                >
                  <span>3D Procedure</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
                <button
                  onClick={() => onBookTreatment(t.id)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-bold text-xs shadow-md shadow-teal-500/20 hover:shadow-teal-500/40 transition-all text-center"
                >
                  Book Treatment
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
