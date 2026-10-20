import React, { useState } from 'react';
import { TREATMENTS } from '../data/dentalData';
import { TreatmentId } from '../types';
import { Sparkles, Calculator, CheckCircle2, ShieldCheck, DollarSign, Calendar } from 'lucide-react';

interface PricingCalculatorProps {
  onOpenBookingWithTreatment: (treatmentId: TreatmentId) => void;
}

export default function PricingCalculator({ onOpenBookingWithTreatment }: PricingCalculatorProps) {
  const [selectedTreatmentId, setSelectedTreatmentId] = useState<TreatmentId>('invisalign');
  const [downPayment, setDownPayment] = useState<number>(500);
  const [termMonths, setTermMonths] = useState<number>(12);

  // Price estimations map
  const treatmentPrices: Record<TreatmentId, number> = {
    'dental-implants': 2400,
    'smile-makeover': 3800,
    'teeth-whitening': 550,
    'invisalign': 4200,
    'root-canal': 1200,
    'braces': 4500,
    'pediatric': 280,
    'emergency': 350
  };

  const currentTreatmentPrice = treatmentPrices[selectedTreatmentId] || 3000;
  const principalAmount = Math.max(0, currentTreatmentPrice - downPayment);
  const monthlyPayment = Math.round(principalAmount / termMonths);

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-[#080C14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full glass-panel border border-teal-500/30 text-teal-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Transparent Luxury Investment
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Zero-Interest Financing & <br />
            <span className="gradient-text-teal">Flexible Payment Plans.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            We believe world-class aesthetic and biological care should be accessible. Calculate your custom 0% APR monthly investment below.
          </p>
        </div>

        {/* Calculator Widget Container */}
        <div className="grid lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Controls Box */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center">
                <Calculator className="w-5 h-5 text-teal-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-heading">0% APR Payment Calculator</h3>
                <p className="text-xs text-slate-400">Select procedure, down payment, and term</p>
              </div>
            </div>

            {/* Treatment Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                1. Select Desired Procedure
              </label>
              <select
                value={selectedTreatmentId}
                onChange={(e) => setSelectedTreatmentId(e.target.value as TreatmentId)}
                className="w-full px-4 py-3 rounded-2xl bg-slate-900/90 border border-white/15 text-white text-sm focus:outline-none focus:border-teal-400 transition-colors"
              >
                {TREATMENTS.map(t => (
                  <option key={t.id} value={t.id}>
                    {t.title} (~${treatmentPrices[t.id]})
                  </option>
                ))}
              </select>
            </div>

            {/* Down Payment Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <label className="font-bold text-slate-300 uppercase tracking-wider">
                  2. Down Payment Amount
                </label>
                <span className="font-bold text-teal-400 font-mono text-sm">${downPayment}</span>
              </div>
              <input
                type="range"
                min="0"
                max={Math.min(2000, currentTreatmentPrice - 200)}
                step="100"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full accent-teal-400 cursor-pointer"
              />
            </div>

            {/* Term Selection Buttons */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                3. Select Loan Term (0% APR)
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[6, 12, 24].map((m) => (
                  <button
                    key={m}
                    onClick={() => setTermMonths(m)}
                    className={`py-3 rounded-2xl text-xs font-bold transition-all border ${
                      termMonths === m
                        ? 'bg-teal-500/20 text-teal-300 border-teal-500 shadow-lg shadow-teal-500/20'
                        : 'glass-panel text-slate-300 border-white/10 hover:text-white'
                    }`}
                  >
                    {m} Months
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Output Box */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border border-teal-500/30 shadow-2xl space-y-6 text-center lg:text-left flex flex-col justify-between h-full">
            
            <div className="space-y-4">
              <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-[10px] font-bold uppercase tracking-widest inline-block">
                Instant Guaranteed Rate
              </span>
              
              <div>
                <span className="text-xs text-slate-400 block font-medium">Estimated Monthly Investment</span>
                <div className="flex items-baseline justify-center lg:justify-start gap-1 mt-1">
                  <span className="text-5xl font-extrabold text-white font-heading font-mono">${monthlyPayment}</span>
                  <span className="text-sm font-semibold text-teal-400">/ mo</span>
                </div>
                <span className="text-[11px] text-slate-400 block mt-1">0% Interest • 0 Hidden Fees</span>
              </div>

              <div className="space-y-2 pt-4 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Estimated Total:</span>
                  <span className="font-semibold text-white">${currentTreatmentPrice}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Down Payment Today:</span>
                  <span className="font-semibold text-teal-300">${downPayment}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Remaining Financed:</span>
                  <span className="font-semibold text-white">${principalAmount}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <button
                onClick={() => onOpenBookingWithTreatment(selectedTreatmentId)}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-teal-500 via-cyan-400 to-blue-600 text-slate-950 font-bold text-sm shadow-xl shadow-teal-500/25 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                <span>Lock In 0% APR Plan & Book</span>
              </button>
              
              <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                <span>CareCredit & In-House Concierge Financing Approved</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
