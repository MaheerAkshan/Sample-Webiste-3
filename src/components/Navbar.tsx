import React, { useState, useEffect } from 'react';
import { Sparkles, PhoneCall, Calendar, ChevronDown, Menu, X, ShieldCheck, MapPin, Clock } from 'lucide-react';
import { CLINIC_INFO, TREATMENTS } from '../data/dentalData';
import { TreatmentId } from '../types';

interface NavbarProps {
  onOpenBooking: (treatmentId?: TreatmentId) => void;
  onSelectTreatmentView: (treatmentId: TreatmentId) => void;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ onOpenBooking, onSelectTreatmentView, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'py-3 bg-[#080C14]/85 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-black/50' : 'py-5 bg-transparent'
    }`}>
      {/* Top Utility Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2 hidden md:flex items-center justify-between text-xs text-slate-400 border-b border-white/5 pb-2">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-teal-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping"></span>
            Open Today • {CLINIC_INFO.hours.weekdays}
          </span>
          <span className="flex items-center gap-1 hover:text-slate-200 transition-colors">
            <MapPin className="w-3.5 h-3.5 text-slate-500" />
            740 Fifth Ave, Suite 2800, New York
          </span>
          <span className="flex items-center gap-1 hover:text-slate-200 transition-colors">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
            Complimentary Valet & Private VIP Lounge
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a href={`tel:${CLINIC_INFO.emergencyPhone}`} className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1">
            <PhoneCall className="w-3 h-3 animate-pulse" />
            24/7 Emergency Line
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('hero')}
            className="flex items-center gap-3 group text-left"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-teal-500 via-cyan-400 to-blue-600 p-[1px] shadow-lg shadow-teal-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#080C14] rounded-[15px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-teal-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white font-heading block">
                AURA <span className="text-teal-400 font-light">STUDIO</span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 uppercase block font-medium">
                Luxury 3D Dental Suite
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <button 
              onClick={() => onNavigate('about')}
              className="hover:text-teal-400 transition-colors py-2"
            >
              About Clinic
            </button>

            {/* Treatments Mega Dropdown */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setShowServicesMenu(true)}
              onMouseLeave={() => setShowServicesMenu(false)}
            >
              <button 
                onClick={() => onNavigate('treatments')}
                className="flex items-center gap-1 hover:text-teal-400 transition-colors"
              >
                <span>Treatments & 3D Procedures</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showServicesMenu ? 'rotate-180 text-teal-400' : ''}`} />
              </button>

              {/* Dropdown Box */}
              {showServicesMenu && (
                <div className="absolute top-full left-0 w-80 glass-panel rounded-2xl p-3 border border-white/10 shadow-2xl backdrop-blur-2xl animate-fade-in grid gap-1 z-50">
                  <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-white/5 mb-1">
                    3D Specialized Care
                  </div>
                  {TREATMENTS.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        onSelectTreatmentView(t.id);
                        setShowServicesMenu(false);
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl hover:bg-teal-500/10 hover:text-teal-300 transition-all text-xs flex items-center justify-between group"
                    >
                      <div>
                        <span className="font-semibold text-slate-200 block group-hover:text-teal-300">{t.title}</span>
                        <span className="text-[10px] text-slate-400">{t.category}</span>
                      </div>
                      <span className="text-[10px] font-mono text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button 
              onClick={() => onNavigate('doctors')}
              className="hover:text-teal-400 transition-colors py-2"
            >
              Specialists
            </button>
            <button 
              onClick={() => onNavigate('before-after')}
              className="hover:text-teal-400 transition-colors py-2"
            >
              Before & After
            </button>
            <button 
              onClick={() => onNavigate('pricing')}
              className="hover:text-teal-400 transition-colors py-2"
            >
              Pricing & Financing
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="hover:text-teal-400 transition-colors py-2"
            >
              Contact
            </button>
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="relative group overflow-hidden rounded-2xl p-[1px] focus:outline-none"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-teal-500 via-cyan-400 to-blue-600 rounded-2xl transition-all duration-300 group-hover:opacity-90"></span>
              <span className="relative flex items-center gap-2 px-5 py-2.5 rounded-[15px] bg-[#080C14] text-xs font-bold text-white transition-all duration-300 group-hover:bg-transparent group-hover:text-slate-950">
                <Calendar className="w-4 h-4 text-teal-400 group-hover:text-slate-950 transition-colors" />
                <span>Book VIP Appointment</span>
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white glass-panel"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-b border-white/10 px-6 py-6 mt-3 space-y-4 animate-fade-in">
          <div className="grid gap-2 border-b border-white/10 pb-4">
            <button 
              onClick={() => { onNavigate('about'); setMobileMenuOpen(false); }}
              className="text-left py-2 font-medium text-slate-200 hover:text-teal-400 text-sm"
            >
              About Clinic
            </button>
            <button 
              onClick={() => { onNavigate('treatments'); setMobileMenuOpen(false); }}
              className="text-left py-2 font-medium text-slate-200 hover:text-teal-400 text-sm"
            >
              Featured Procedures
            </button>
            <button 
              onClick={() => { onNavigate('doctors'); setMobileMenuOpen(false); }}
              className="text-left py-2 font-medium text-slate-200 hover:text-teal-400 text-sm"
            >
              Specialists
            </button>
            <button 
              onClick={() => { onNavigate('before-after'); setMobileMenuOpen(false); }}
              className="text-left py-2 font-medium text-slate-200 hover:text-teal-400 text-sm"
            >
              Before & After Gallery
            </button>
            <button 
              onClick={() => { onNavigate('pricing'); setMobileMenuOpen(false); }}
              className="text-left py-2 font-medium text-slate-200 hover:text-teal-400 text-sm"
            >
              Pricing & Financing
            </button>
            <button 
              onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }}
              className="text-left py-2 font-medium text-slate-200 hover:text-teal-400 text-sm"
            >
              Location & Contact
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => { onOpenBooking(); setMobileMenuOpen(false); }}
              className="w-full py-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl text-slate-950 font-bold text-sm shadow-lg shadow-teal-500/25 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment Now
            </button>
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="w-full py-3 glass-panel rounded-xl text-slate-200 font-semibold text-xs text-center border border-white/10 flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-teal-400" />
              Call Reception: {CLINIC_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
