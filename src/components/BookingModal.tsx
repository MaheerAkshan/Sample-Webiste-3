import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { TREATMENTS, DOCTORS, CLINIC_INFO } from '../data/dentalData';
import { TreatmentId, BookingFormData } from '../types';
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle2, Download, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTreatmentId?: TreatmentId | '';
  initialDoctorId?: string;
}

export default function BookingModal({ isOpen, onClose, initialTreatmentId = '', initialDoctorId = '' }: BookingModalProps) {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    email: '',
    treatmentId: initialTreatmentId,
    preferredDoctorId: initialDoctorId || 'any',
    date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0], // 2 days from now
    timeSlot: '11:00 AM',
    notes: '',
    isEmergency: false
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const timeSlots = [
    '09:00 AM', '10:30 AM', '11:00 AM', '01:30 PM', '03:00 PM', '04:30 PM', '06:00 PM'
  ];

  const handleNextStep = () => {
    if (step === 4) {
      // Complete submission
      setIsSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else {
      setStep(step + 1);
    }
  };

  const handleDownloadCalendar = () => {
    const title = `AURA Dental VIP Consultation - ${formData.treatmentId || 'Dental Care'}`;
    const details = `Appointment at AURA Dental Studio (740 Fifth Ave, Suite 2800). Doctor: ${formData.preferredDoctorId}.`;
    const icsContent = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:${title}\nDESCRIPTION:${details}\nLOCATION:${CLINIC_INFO.address}\nDTSTART:${formData.date.replace(/-/g, '')}T110000Z\nDTEND:${formData.date.replace(/-/g, '')}T120000Z\nEND:VEVENT\nEND:VCALENDAR`;
    
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'aura-appointment.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const selectedTreatment = TREATMENTS.find(t => t.id === formData.treatmentId);
  const selectedDoctor = DOCTORS.find(d => d.id === formData.preferredDoctorId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-fade-in overflow-y-auto">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-2xl glass-panel rounded-3xl border border-teal-500/40 shadow-2xl overflow-hidden my-auto">
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-slate-900/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400 font-bold">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-heading">
                {isSubmitted ? "VIP Appointment Confirmed" : "Book VIP Appointment"}
              </h3>
              <p className="text-xs text-slate-400">
                {isSubmitted ? "Your priority reservation is active" : `Step ${step} of 4 • Guaranteed Zero-Wait Arrival`}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full glass-panel border border-white/20 text-slate-400 hover:text-white flex items-center justify-center transition-transform hover:scale-110"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {!isSubmitted ? (
            <>
              {/* Step Progress Bar */}
              <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-teal-500 to-cyan-400 h-full transition-all duration-500"
                  style={{ width: `${(step / 4) * 100}%` }}
                ></div>
              </div>

              {/* STEP 1: Select Treatment */}
              {step === 1 && (
                <div className="space-y-4 animate-fade-in">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                    Select Required Treatment / Service
                  </label>
                  <div className="grid sm:grid-cols-2 gap-3 max-h-[300px] overflow-y-auto custom-scrollbar pr-1">
                    {TREATMENTS.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, treatmentId: t.id })}
                        className={`p-3.5 rounded-2xl border text-left transition-all ${
                          formData.treatmentId === t.id
                            ? 'bg-teal-500/20 border-teal-400 text-white shadow-md'
                            : 'glass-panel border-white/10 text-slate-300 hover:border-white/20'
                        }`}
                      >
                        <span className="font-bold text-xs block text-white">{t.title}</span>
                        <span className="text-[10px] text-teal-300 block">{t.monthlyEstimate}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2: Select Specialist */}
              {step === 2 && (
                <div className="space-y-4 animate-fade-in">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                    Choose Preferred Specialist
                  </label>
                  <div className="space-y-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, preferredDoctorId: 'any' })}
                      className={`w-full p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all ${
                        formData.preferredDoctorId === 'any'
                          ? 'bg-teal-500/20 border-teal-400 text-white shadow-md'
                          : 'glass-panel border-white/10 text-slate-300'
                      }`}
                    >
                      <span className="font-bold text-xs">First Available Senior Faculty Specialist</span>
                      <span className="text-[10px] text-teal-300">Fastest Appointment</span>
                    </button>

                    {DOCTORS.map((doc) => (
                      <button
                        key={doc.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, preferredDoctorId: doc.id })}
                        className={`w-full p-3.5 rounded-2xl border text-left flex items-center gap-3 transition-all ${
                          formData.preferredDoctorId === doc.id
                            ? 'bg-teal-500/20 border-teal-400 text-white shadow-md'
                            : 'glass-panel border-white/10 text-slate-300'
                        }`}
                      >
                        <img src={doc.avatar} alt={doc.name} className="w-10 h-10 rounded-full object-cover shrink-0" />
                        <div>
                          <span className="font-bold text-xs block text-white">{doc.name}</span>
                          <span className="text-[10px] text-slate-400">{doc.role}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 3: Date & Time Picker */}
              {step === 3 && (
                <div className="space-y-4 animate-fade-in">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-white/15 text-white text-sm focus:outline-none focus:border-teal-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                      Select Available VIP Time Slot
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeSlot: slot })}
                          className={`py-2.5 rounded-xl text-xs font-bold transition-all border ${
                            formData.timeSlot === slot
                              ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 border-teal-400 shadow-md'
                              : 'glass-panel border-white/10 text-slate-300 hover:text-white'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Patient Information */}
              {step === 4 && (
                <div className="space-y-4 animate-fade-in">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-white/15 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-teal-400"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-white/15 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-teal-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="vip@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-white/15 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-teal-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">Medical Notes / Special Requests</label>
                    <textarea
                      rows={2}
                      placeholder="Any dental anxiety, pre-existing conditions, or VR entertainment preferences..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-900 border border-white/15 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-teal-400"
                    ></textarea>
                  </div>
                </div>
              )}

              {/* Navigation Controls */}
              <div className="pt-4 flex items-center justify-between border-t border-white/10">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-5 py-2.5 rounded-xl glass-panel text-slate-300 text-xs font-semibold hover:text-white"
                  >
                    Back
                  </button>
                ) : <div></div>}

                <button
                  type="button"
                  onClick={handleNextStep}
                  disabled={step === 4 && (!formData.name || !formData.phone || !formData.email)}
                  className="px-7 py-3 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-bold text-xs shadow-lg shadow-teal-500/25 hover:scale-105 transition-all disabled:opacity-50 flex items-center gap-2"
                >
                  <span>{step === 4 ? "Confirm & Reserve Slot" : "Continue"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </>
          ) : (
            /* SUCCESS CONFIRMATION SCREEN */
            <div className="text-center py-6 space-y-6 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-teal-500/20 border-2 border-teal-400 text-teal-300 flex items-center justify-center mx-auto shadow-2xl shadow-teal-500/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-white font-heading">
                  Reservation Complete, {formData.name || 'Valued Patient'}!
                </h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                  Your VIP appointment has been locked into our system for <span className="text-teal-300 font-bold">{formData.date} at {formData.timeSlot}</span>. A SMS and Email confirmation receipt has been dispatched.
                </p>
              </div>

              {/* Reservation Details Box */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 text-xs space-y-2 text-left max-w-md mx-auto">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Treatment:</span>
                  <span className="font-bold text-white">{selectedTreatment?.title || 'General Consultation'}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Specialist:</span>
                  <span className="font-bold text-teal-300">{selectedDoctor?.name || 'First Available Specialist'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Location:</span>
                  <span className="font-semibold text-white">740 Fifth Ave, Suite 2800</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleDownloadCalendar}
                  className="w-full sm:w-auto px-6 py-3 rounded-2xl glass-panel text-white text-xs font-bold border border-white/15 hover:border-teal-400 flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 text-teal-400" />
                  <span>Add to Apple / Google iCal</span>
                </button>
                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello AURA Concierge, I just booked an appointment for ${formData.name} on ${formData.date} at ${formData.timeSlot}. Please verify.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-emerald-500 text-slate-950 text-xs font-bold flex items-center justify-center gap-2 hover:bg-emerald-400 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Confirm on WhatsApp</span>
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
