import React, { useState, useRef } from 'react';
import { BEFORE_AFTER_ITEMS } from '../data/dentalData';
import { Sparkles, MoveHorizontal, CheckCircle2, User, Clock, Award } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 to 100
  const isDragging = useRef<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeItem = BEFORE_AFTER_ITEMS[activeItemIndex];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="before-after" className="py-24 relative overflow-hidden bg-[#080C14]">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full glass-panel border border-teal-500/30 text-teal-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Verified Clinical Results
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Drag to Reveal <br />
            <span className="gradient-text-teal">Real Smile Transformations.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Drag the interactive slider handle left and right to inspect real patient before & after results produced in our studio.
          </p>
        </div>

        {/* Case Selection Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-3 mb-10">
          {BEFORE_AFTER_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveItemIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all ${
                activeItemIndex === idx
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 shadow-lg shadow-teal-500/25 scale-105'
                  : 'glass-panel text-slate-300 hover:text-white border border-white/10'
              }`}
            >
              {item.treatmentName}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Container */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Slider Container */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              className="relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden glass-panel border border-white/15 shadow-2xl select-none cursor-ew-resize touch-none"
              onMouseDown={(e) => {
                isDragging.current = true;
                handleMove(e.clientX);
              }}
              onMouseUp={() => { isDragging.current = false; }}
              onMouseLeave={() => { isDragging.current = false; }}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
            >
              {/* After Image (Full Base Background) */}
              <img
                src={activeItem.afterImage}
                alt="After Transformation"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
              <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-teal-500/80 text-slate-950 font-bold text-xs shadow-lg backdrop-blur-md z-10">
                AFTER AURA
              </span>

              {/* Before Image (Clipped Overlay) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none transition-all duration-75"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={activeItem.beforeImage}
                  alt="Before Treatment"
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/80 text-slate-200 font-bold text-xs shadow-lg backdrop-blur-md border border-white/20 z-10">
                  BEFORE
                </span>
              </div>

              {/* Drag Line & Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 via-white to-cyan-400 z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-tr from-teal-400 to-cyan-400 text-slate-950 font-bold shadow-2xl flex items-center justify-center border-2 border-white">
                  <MoveHorizontal className="w-5 h-5 animate-pulse" />
                </div>
              </div>

            </div>
            
            <div className="mt-3 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
              <MoveHorizontal className="w-4 h-4 text-teal-400" />
              <span>Drag handle left or right to compare natural enamel transformation</span>
            </div>
          </div>

          {/* Right Column: Case Clinical Notes */}
          <div className="lg:col-span-4 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-teal-400 block mb-1">
                Clinical Case Study
              </span>
              <h3 className="text-xl font-bold text-white font-heading">
                {activeItem.treatmentName}
              </h3>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between py-2 border-b border-white/10 text-slate-300">
                <span className="flex items-center gap-2 text-slate-400">
                  <User className="w-4 h-4 text-teal-400" /> Patient Age
                </span>
                <span className="font-semibold text-white">{activeItem.patientAge} Years Old</span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-white/10 text-slate-300">
                <span className="flex items-center gap-2 text-slate-400">
                  <Award className="w-4 h-4 text-teal-400" /> Lead Specialist
                </span>
                <span className="font-semibold text-white">{activeItem.doctorName}</span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-white/10 text-slate-300">
                <span className="flex items-center gap-2 text-slate-400">
                  <Clock className="w-4 h-4 text-teal-400" /> Treatment Span
                </span>
                <span className="font-semibold text-teal-300">{activeItem.duration}</span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Clinical Description</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {activeItem.description}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-teal-500/10 border border-teal-500/30 text-xs text-teal-300 space-y-1">
              <span className="font-bold block">100% Guaranteed Structural Retention</span>
              <p className="text-[11px] text-slate-300">Every smile transformation includes our 10-year warranty on ceramic materials and complimentary semi-annual micro-polishing.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
