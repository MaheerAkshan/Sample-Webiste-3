import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/dentalData';
import { MapPin, Navigation, Clock, Phone, ShieldCheck, Copy, Check, Car } from 'lucide-react';

export default function InteractiveMap() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CLINIC_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#060911]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Location Info Card */}
          <div className="lg:col-span-5 glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-bold uppercase tracking-widest mb-3">
                Flagship Studio
              </span>
              <h2 className="text-3xl font-bold text-white font-heading">
                Fifth Avenue Luxury Suite
              </h2>
              <p className="text-xs text-slate-300 mt-1">
                Located in Manhattan’s prestigious medical district with direct private VIP elevator access.
              </p>
            </div>

            {/* Address & Quick Copy */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 flex items-start justify-between gap-3 text-xs">
              <div className="space-y-1">
                <span className="text-slate-400 font-bold block text-[10px] uppercase">Clinic Address</span>
                <p className="font-semibold text-white leading-relaxed">{CLINIC_INFO.address}</p>
              </div>
              <button
                onClick={handleCopyAddress}
                className="p-2 rounded-xl glass-panel text-slate-300 hover:text-teal-300 transition-colors border border-white/10 shrink-0"
                title="Copy Address"
              >
                {copied ? <Check className="w-4 h-4 text-teal-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Hours & Parking */}
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="flex items-center gap-2 text-slate-400">
                  <Clock className="w-4 h-4 text-teal-400" /> Operating Hours
                </span>
                <span className="font-semibold text-teal-300">Mon - Fri: {CLINIC_INFO.hours.weekdays}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="flex items-center gap-2 text-slate-400">
                  <Car className="w-4 h-4 text-teal-400" /> Valet Parking
                </span>
                <span className="font-semibold text-white">Complimentary White-Glove Valet</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="flex items-center gap-2 text-slate-400">
                  <Phone className="w-4 h-4 text-teal-400" /> Reception Desk
                </span>
                <a href={`tel:${CLINIC_INFO.phone}`} className="font-semibold text-white hover:text-teal-300">
                  {CLINIC_INFO.phone}
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href="https://maps.google.com/?q=740+Fifth+Avenue+New+York"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-bold text-xs shadow-lg shadow-teal-500/25 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4 text-slate-950" />
                <span>Open in Google Maps</span>
              </a>
            </div>

          </div>

          {/* Right Column: Dark Satellite Style Interactive Map Canvas Mockup */}
          <div className="lg:col-span-7 relative h-[420px] rounded-3xl overflow-hidden glass-panel border border-white/15 shadow-2xl group">
            {/* Dark Styled Map Overlay Graphic */}
            <iframe
              title="AURA Studio Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.078696803273!2d-73.97600862342445!3d40.76243817138549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f964098651%3A0xb3e18a8b15d023b8!2s740%205th%20Ave%2C%20New%20York%2C%20NY%2010019!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.2)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Custom Glowing Studio Pin Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 glass-panel rounded-2xl border border-teal-400 shadow-2xl backdrop-blur-md flex items-center gap-3 animate-bounce">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-400 flex items-center justify-center text-slate-950 font-bold">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-white block">AURA Studio Suite 2800</span>
                <span className="text-[10px] text-teal-300 font-medium">740 Fifth Ave • Valet Entrance</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
