import React from 'react';
import { Treatment, TreatmentId } from '../types';
import { TREATMENTS } from '../data/dentalData';
import { X, CheckCircle2, Clock, ShieldCheck, DollarSign, Calendar, ChevronRight } from 'lucide-react';

interface TreatmentDetailModalProps {
  treatmentId: TreatmentId | null;
  onClose: () => void;
  onBookTreatment: (treatmentId: TreatmentId) => void;
}

export default function TreatmentDetailModal({ treatmentId, onClose, onBookTreatment }: TreatmentDetailModalProps) {
  if (!treatmentId) return null;

  const treatment = TREATMENTS.find(t => t.id === treatmentId);
  if (!treatment) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-xl animate-fade-in overflow-y-auto">
      
      {/* Modal Card Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] glass-panel rounded-3xl border border-teal-500/30 shadow-2xl overflow-y-auto custom-scrollbar my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full glass-panel border border-white/20 text-slate-300 hover:text-white flex items-center justify-center hover:scale-110 transition-transform"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image Banner */}
        <div className="relative h-72 sm:h-80 w-full overflow-hidden">
          <img 
            src={treatment.heroImage} 
            alt={treatment.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/60 to-transparent"></div>
          
          <div className="absolute bottom-6 left-6 right-6 space-y-2">
            <span className="px-3 py-1 rounded-full bg-teal-500/20 border border-teal-500/40 text-teal-300 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
              {treatment.category}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
              {treatment.title}
            </h2>
            <p className="text-sm text-slate-300 font-medium">
              {treatment.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-900/80 border border-white/10 text-xs">
            <div className="space-y-1">
              <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Duration</span>
              <p className="text-slate-200 font-semibold flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-teal-400" />
                {treatment.duration}
              </p>
            </div>
            <div className="space-y-1 border-l border-white/10 pl-4">
              <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Recovery</span>
              <p className="text-slate-200 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                {treatment.recoveryTime}
              </p>
            </div>
            <div className="space-y-1 border-l border-white/10 pl-4">
              <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Pricing</span>
              <p className="text-teal-300 font-bold flex items-center gap-1">
                <DollarSign className="w-3.5 h-3.5 text-teal-400" />
                {treatment.priceRange}
              </p>
            </div>
            <div className="space-y-1 border-l border-white/10 pl-4">
              <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">0% APR Financing</span>
              <p className="text-amber-300 font-bold">
                {treatment.monthlyEstimate}
              </p>
            </div>
          </div>

          {/* Detailed Overview */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white font-heading">Procedure Overview</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {treatment.description}
            </p>
          </div>

          {/* Key Advantages */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white font-heading">Key Biological Advantages</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {treatment.features.map((f, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl glass-panel border border-white/5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3D Step-by-Step Procedure Process */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white font-heading">Step-by-Step Surgical Journey</h3>
            <div className="space-y-3">
              {treatment.procedureSteps.map((step) => (
                <div key={step.step} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/60 border border-white/10">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-teal-500 to-cyan-500 text-slate-950 font-bold text-sm flex items-center justify-center shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{step.title}</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Treatment FAQs */}
          {treatment.faqs && treatment.faqs.length > 0 && (
            <div className="space-y-4 border-t border-white/10 pt-6">
              <h3 className="text-lg font-bold text-white font-heading">Frequently Asked Questions</h3>
              <div className="space-y-3">
                {treatment.faqs.map((faq, i) => (
                  <div key={i} className="p-4 rounded-2xl glass-panel border border-white/5 space-y-1 text-xs">
                    <p className="font-bold text-teal-300">Q: {faq.question}</p>
                    <p className="text-slate-300 leading-relaxed">A: {faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Modal Footer CTA */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs text-slate-400 block">Ready to schedule your consultation?</span>
              <span className="text-sm font-bold text-teal-300">{treatment.monthlyEstimate} available with zero interest.</span>
            </div>
            <button
              onClick={() => {
                onClose();
                onBookTreatment(treatment.id);
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-bold text-sm shadow-xl shadow-teal-500/25 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book {treatment.title}</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
