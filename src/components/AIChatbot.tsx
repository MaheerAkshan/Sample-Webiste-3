import React, { useState, useRef, useEffect } from 'react';
import { CLINIC_INFO, TREATMENTS } from '../data/dentalData';
import { ChatMessage } from '../types';
import { MessageSquare, X, Send, Sparkles, Bot, User, ArrowRight, PhoneCall } from 'lucide-react';

interface AIChatbotProps {
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
  isOpen: boolean;
  onToggle: () => void;
}

export default function AIChatbot({ onOpenBooking, onOpenWhatsApp, isOpen, onToggle }: AIChatbotProps) {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm-1',
      sender: 'bot',
      text: 'Hello! I am AURA AI, your personal dental concierge. How can I assist you today? I can answer procedure questions, estimate costs, or check open appointment slots.',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      actionButtons: [
        { label: '🦷 Estimate Treatment Cost', action: 'pricing' },
        { label: '📅 Book VIP Appointment', action: 'book' },
        { label: '⚡ Emergency Care', action: 'emergency' }
      ]
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');

    // Generate intelligent AI response
    setTimeout(() => {
      let replyText = "I would be delighted to assist you with that! Our clinic specializes in 3D precision implants, laser whitening, and Hollywood smile transformations.";
      let actions: ChatMessage['actionButtons'] = [
        { label: '📅 Book Consultation', action: 'book' },
        { label: '💬 Chat on WhatsApp', action: 'whatsapp' }
      ];

      const lower = text.toLowerCase();
      if (lower.includes('price') || lower.includes('cost') || lower.includes('financing')) {
        replyText = "At AURA Dental Studio, we offer 0% APR financing starting at $39/month for whitening, $129/month for Invisalign, and $149/month for 3D implants. Would you like to launch our payment calculator?";
        actions = [{ label: '🧮 Open Pricing Calculator', action: 'pricing' }, { label: '📅 Book Now', action: 'book' }];
      } else if (lower.includes('pain') || lower.includes('emergency') || lower.includes('toothache') || lower.includes('hurt')) {
        replyText = "If you are experiencing acute pain, our 24/7 VIP Emergency Surgical Team can admit you immediately with zero waiting time. Our computer-guided anesthesia wand stops pain in under 60 seconds.";
        actions = [{ label: '🚨 Call Emergency Line', action: 'call_emergency' }, { label: '💬 Instant WhatsApp', action: 'whatsapp' }];
      } else if (lower.includes('whitening') || lower.includes('white')) {
        replyText = "Our Laser Teeth Whitening session brightens enamel by up to 8 shades in a single 45-minute appointment with zero post-procedure sensitivity.";
      } else if (lower.includes('implant')) {
        replyText = "Our 3D Guided Titanium Implants have a 99.4% success rate. Using CBCT 3D scanning, placement is micro-invasive and flapless with zero sutures needed.";
      }

      const botMsg: ChatMessage = {
        id: `b-${Date.now()}`,
        sender: 'bot',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actionButtons: actions
      };

      setMessages(prev => [...prev, botMsg]);
    }, 600);
  };

  const handleActionClick = (action: string) => {
    if (action === 'book') onOpenBooking();
    else if (action === 'whatsapp') onOpenWhatsApp();
    else if (action === 'call_emergency') window.location.href = `tel:${CLINIC_INFO.emergencyPhone}`;
    else if (action === 'pricing') {
      const el = document.getElementById('pricing');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={onToggle}
          className="relative group p-4 rounded-full bg-gradient-to-r from-teal-500 via-cyan-400 to-blue-600 text-slate-950 shadow-2xl shadow-teal-500/40 hover:scale-110 transition-transform duration-300 flex items-center justify-center"
        >
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-teal-400 border-2 border-[#080C14] animate-ping"></span>
          <Bot className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window Container */}
      {isOpen && (
        <div className="w-[92vw] sm:w-[380px] h-[520px] glass-panel rounded-3xl border border-teal-500/40 shadow-2xl overflow-hidden flex flex-col justify-between animate-fade-in backdrop-blur-2xl">
          
          {/* Header */}
          <div className="p-4 border-b border-white/10 bg-slate-900/90 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-teal-500/20 border border-teal-500/40 text-teal-400 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5 font-heading">
                  AURA AI Assistant
                  <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                </h4>
                <span className="text-[10px] text-slate-400">Online • Powered by Dental Intelligence</span>
              </div>
            </div>

            <button
              onClick={onToggle}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Stream */}
          <div className="p-4 overflow-y-auto custom-scrollbar flex-1 space-y-4 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-full bg-teal-500/20 border border-teal-500/40 text-teal-400 flex items-center justify-center shrink-0 mt-1">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div className={`max-w-[80%] space-y-2 ${m.sender === 'user' ? 'text-right' : 'text-left'}`}>
                  <div
                    className={`p-3.5 rounded-2xl leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-medium shadow-md'
                        : 'glass-panel text-slate-200 border border-white/10'
                    }`}
                  >
                    {m.text}
                  </div>

                  {/* Interactive Action Buttons */}
                  {m.actionButtons && m.actionButtons.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {m.actionButtons.map((btn, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleActionClick(btn.action)}
                          className="px-3 py-1.5 rounded-xl bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 border border-teal-500/30 text-[11px] font-semibold transition-all"
                        >
                          {btn.label}
                        </button>
                      ))}
                    </div>
                  )}

                  <span className="text-[9px] text-slate-500 block px-1">{m.timestamp}</span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar */}
          <div className="p-3 border-t border-white/10 bg-slate-900/90 flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask about treatments, pricing, pain..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-800 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-teal-400"
            />
            <button
              onClick={() => handleSend()}
              className="p-2.5 rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-400 text-slate-950 hover:scale-105 transition-transform font-bold"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
