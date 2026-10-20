import React from 'react';
import { CLINIC_INFO } from '../data/dentalData';
import { MessageSquare, ExternalLink } from 'lucide-react';

interface WhatsAppWidgetProps {
  onDirectClick: () => void;
}

export default function WhatsAppWidget({ onDirectClick }: WhatsAppWidgetProps) {
  const quickTemplates = [
    "Hello AURA VIP Concierge, I would like to book a 3D Smile Consultation.",
    "I have an urgent dental question regarding 3D Titanium Implants.",
    "Please send me zero-interest financing details for Veneers."
  ];

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden sm:block">
      <a
        href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(quickTemplates[0])}`}
        target="_blank"
        rel="noreferrer"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-2xl shadow-emerald-500/30 hover:scale-105 transition-all duration-300"
      >
        <MessageSquare className="w-4 h-4 fill-slate-950" />
        <span>WhatsApp VIP Concierge</span>
        <ExternalLink className="w-3 h-3 opacity-70 group-hover:translate-x-0.5 transition-transform" />
      </a>
    </div>
  );
}
