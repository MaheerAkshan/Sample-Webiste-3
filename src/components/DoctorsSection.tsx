import React from 'react';
import { DOCTORS } from '../data/dentalData';
import { Doctor } from '../types';
import { Sparkles, Award, GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';

interface DoctorsSectionProps {
  onBookDoctor: (doctorId: string) => void;
}

export default function DoctorsSection({ onBookDoctor }: DoctorsSectionProps) {
  return (
    <section id="doctors" className="py-24 relative overflow-hidden bg-[#060911]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full glass-panel border border-teal-500/30 text-teal-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            World-Class Clinical Faculty
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Trained at Harvard, ETH Zurich & <br />
            <span className="gradient-text-teal">King’s College London.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Our surgeons, orthodontists, and endodontists are international pioneers in 3D robotic dentistry, digital smile architecture, and laser micro-surgery.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {DOCTORS.map((doc) => (
            <div 
              key={doc.id}
              className="glass-panel glass-panel-hover rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Doctor Avatar Header */}
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={doc.avatar} 
                    alt={doc.name} 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/30 to-transparent"></div>
                  
                  {/* Availability Badge */}
                  <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-slate-900/80 text-teal-300 text-[11px] font-bold border border-teal-500/30 backdrop-blur-md flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping"></span>
                    {doc.availability}
                  </span>

                  {/* Surgeries Counter Badge */}
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full glass-panel text-white font-mono text-xs font-bold border border-white/20">
                    {doc.surgeriesPerformed} Surgeries
                  </span>
                </div>

                {/* Doctor Details */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors font-heading">
                      {doc.name}
                    </h3>
                    <p className="text-xs text-teal-400 font-semibold mt-0.5">{doc.title}</p>
                    <p className="text-xs text-slate-400">{doc.role}</p>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xs text-slate-300 italic bg-slate-900/60 p-3 rounded-2xl border-l-2 border-teal-400">
                    "{doc.quote}"
                  </blockquote>

                  {/* Education & Credentials */}
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block flex items-center gap-1">
                      <GraduationCap className="w-3.5 h-3.5 text-teal-400" />
                      Academic Credentials
                    </span>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {doc.education.map((edu, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                          <span className="truncate">{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specialties Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {doc.specialties.map((spec, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-teal-500/10 text-teal-300 border border-teal-500/20 text-[10px] font-semibold">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Booking CTA */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onBookDoctor(doc.id)}
                  className="w-full py-3 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-bold text-xs shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation with {doc.name.split(',')[0]}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
