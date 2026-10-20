import React from 'react';
import { Calendar, MessageSquare, Sparkles, Star, Award, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import ThreeToothCanvas from './ThreeToothCanvas';
import { CLINIC_INFO } from '../data/dentalData';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
  onToggleChat: () => void;
  onExploreTreatments: () => void;
}

export default function Hero({ onOpenBooking, onOpenWhatsApp, onToggleChat, onExploreTreatments }: HeroProps) {
  return (
    <section className="relative min-h-screen pt-32 pb-20 lg:pt-40 lg:pb-32 flex items-center justify-center overflow-hidden">
      {/* Background Ambient Lighting & Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-teal-500/20 via-cyan-500/10 to-blue-600/20 rounded-full blur-[140px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            {/* VIP Status Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-teal-500/30 text-teal-300 text-xs font-semibold tracking-wide shadow-lg shadow-teal-500/10">
              <Sparkles className="w-3.5 h-3.5 text-teal-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Awwwards Nominated Luxury 3D Dental Suite</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] font-heading">
              Redefining <br className="hidden sm:inline" />
              <span className="gradient-text-teal">Dental Perfection</span> <br />
              Through 3D AI Precision.
            </h1>

            {/* Sub-headline */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Experience the pinnacle of biological dental restoration, Hollywood smile design, and zero-pain laser procedures inside a 5-star private spa environment.
            </p>

            {/* Key Value Points Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-300 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Zero-Pain Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>3D Laser Scanning</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Lifetime Warranty</span>
              </div>
            </div>

            {/* Dual CTAs & Chat Trigger */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              {/* Primary Booking Button */}
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-500 via-cyan-400 to-blue-600 text-slate-950 font-bold text-sm shadow-xl shadow-teal-500/25 hover:shadow-teal-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
              >
                <Calendar className="w-5 h-5 text-slate-950" />
                <span>Book VIP Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* WhatsApp Quick Button */}
              <button
                onClick={onOpenWhatsApp}
                className="w-full sm:w-auto px-6 py-4 rounded-2xl glass-panel text-slate-200 font-semibold text-sm hover:text-white hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all flex items-center justify-center gap-2.5 border border-white/10"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Concierge</span>
              </button>
            </div>

            {/* Trust Reviews Badge */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img className="w-9 h-9 rounded-full border-2 border-[#080C14] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120" alt="Patient" />
                  <img className="w-9 h-9 rounded-full border-2 border-[#080C14] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120" alt="Patient" />
                  <img className="w-9 h-9 rounded-full border-2 border-[#080C14] object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=120" alt="Patient" />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs font-bold text-white ml-1">{CLINIC_INFO.googleRating}</span>
                  </div>
                  <span className="text-[11px] text-slate-400">From {CLINIC_INFO.totalReviews} verified Google reviews</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Canvas & Stats */}
          <div className="lg:col-span-6 relative">
            {/* Floating Metric Card 1 (Top Left) */}
            <div className="absolute -top-6 -left-4 z-20 hidden sm:flex items-center gap-3 p-3.5 glass-panel rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl animate-float-slow">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center">
                <Award className="w-5 h-5 text-teal-400" />
              </div>
              <div>
                <span className="text-sm font-bold text-white block">99.8% Success</span>
                <span className="text-[10px] text-slate-400">CBCT Robotic Implants</span>
              </div>
            </div>

            {/* Floating Metric Card 2 (Bottom Right) */}
            <div className="absolute -bottom-6 -right-4 z-20 hidden sm:flex items-center gap-3 p-3.5 glass-panel rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <span className="text-sm font-bold text-white block">15,000+ Smiles</span>
                <span className="text-[10px] text-slate-400">Handcrafted Veneers</span>
              </div>
            </div>

            {/* 3D Tooth Canvas Container */}
            <ThreeToothCanvas />
          </div>

        </div>
      </div>
    </section>
  );
}
