import React, { useState } from 'react';
import { FAQS } from '../data/dentalData';
import { Sparkles, Search, ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const categories = ['All', 'General', 'Treatments', 'Booking & Payment', 'Technology & Safety'];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCat = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-[#080C14]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full glass-panel border border-teal-500/30 text-teal-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Patient Guidance
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Frequently Asked <span className="gradient-text-teal">Questions.</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Everything you need to know about our 3D surgical technology, painless anesthesia protocols, and appointment guarantees.
          </p>
        </div>

        {/* Live Search Input */}
        <div className="relative max-w-xl mx-auto mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search questions (e.g. pain, financing, laser, veneers)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl glass-panel border border-white/15 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-teal-400 transition-colors shadow-lg"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-teal-500/20 text-teal-300 border border-teal-500 shadow-md'
                  : 'glass-panel text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div 
                  key={faq.id}
                  className="glass-panel rounded-2xl border border-white/10 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-slate-100 hover:text-teal-300 transition-colors text-sm sm:text-base"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-teal-400 shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-teal-400' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 bg-slate-900/40">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 glass-panel rounded-2xl text-slate-400 text-sm">
              No matching questions found for "{searchTerm}". Ask our AURA AI assistant directly!
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
