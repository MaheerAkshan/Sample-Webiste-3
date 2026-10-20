import React from 'react';
import { CLINIC_INFO, TREATMENTS } from '../data/dentalData';
import { Sparkles, PhoneCall, Mail, MapPin, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import { TreatmentId } from '../types';

interface FooterProps {
  onSelectTreatment: (treatmentId: TreatmentId) => void;
  onOpenBooking: () => void;
}

export default function Footer({ onSelectTreatment, onOpenBooking }: FooterProps) {
  return (
    <footer className="bg-[#04060A] text-slate-400 text-xs border-t border-white/10 pt-20 pb-12 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-teal-500/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Top Newsletter & Call to Action Banner */}
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8 bg-gradient-to-r from-[#080C14] via-[#0F172A] to-[#080C14]">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest block">
              VIP Dental Privilege Club
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Join Our VIP Aesthetic Smile Journal
            </h3>
            <p className="text-xs text-slate-300">
              Receive quarterly insights on bio-integrative enamel restoration, Japanese skincare alignment, and private clinic events.
            </p>
          </div>

          <div className="flex w-full sm:w-auto max-w-md items-center gap-2">
            <input
              type="email"
              placeholder="Enter your VIP email address..."
              className="px-4 py-3.5 rounded-2xl bg-slate-900 border border-white/15 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-teal-400 w-full"
            />
            <button
              onClick={() => alert("Thank you for subscribing to the AURA VIP Aesthetic Journal.")}
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-bold text-xs shadow-lg shadow-teal-500/25 shrink-0 hover:scale-105 transition-transform"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* 4-Column Footer Sitemap */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4 col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-teal-400" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight font-heading">
                AURA <span className="text-teal-400 font-light">STUDIO</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              World-class 3D precision dental care, zero-pain laser procedures, and Hollywood smile architecture inside Manhattan's premier medical spa.
            </p>
            <div className="pt-2 flex items-center gap-2 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>ISO 9001:2026 Medical Certified</span>
            </div>
          </div>

          {/* Col 2: Procedures */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-heading uppercase tracking-wider">3D Procedures</h4>
            <ul className="space-y-2 text-xs">
              {TREATMENTS.slice(0, 5).map((t) => (
                <li key={t.id}>
                  <button
                    onClick={() => onSelectTreatment(t.id)}
                    className="hover:text-teal-300 transition-colors text-left"
                  >
                    {t.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Specialized Care */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-heading uppercase tracking-wider">Specialized Suites</h4>
            <ul className="space-y-2 text-xs">
              {TREATMENTS.slice(5).map((t) => (
                <li key={t.id}>
                  <button
                    onClick={() => onSelectTreatment(t.id)}
                    className="hover:text-teal-300 transition-colors text-left"
                  >
                    {t.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Emergency */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white font-heading uppercase tracking-wider">Contact & VIP Suite</h4>
            <div className="space-y-2 text-xs text-slate-300">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                740 Fifth Ave, Suite 2800, New York
              </p>
              <p className="flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                {CLINIC_INFO.phone}
              </p>
              <p className="flex items-center gap-2 text-amber-400 font-semibold">
                <PhoneCall className="w-3.5 h-3.5 animate-pulse shrink-0" />
                Emergency: {CLINIC_INFO.emergencyPhone}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                {CLINIC_INFO.email}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© 2026 AURA Dental Studio LLC. All rights reserved. Awwwards Nominated Design.</p>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#about" className="hover:text-slate-300 transition-colors">Terms of VIP Service</a>
            <a href="#about" className="hover:text-slate-300 transition-colors">HIPAA Compliance</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
