import React, { useState, useEffect } from 'react';
import { Presentation, ChevronLeft, ChevronRight, Download, Sparkles, Monitor, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

export const SlideDeckViewer: React.FC = () => {
  const [sectionRef, sectionInView] = useInView({ threshold: 0.1 });
  // Find presentation projects
  const presentationProjects = PORTFOLIO_ITEMS.filter(item => item.category === 'presentation');
  
  const [selectedDeckIdx, setSelectedDeckIdx] = useState(0);
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const activeDeck = presentationProjects[selectedDeckIdx] || presentationProjects[0];
  const slides = activeDeck.slides || [];
  const activeSlide = slides[currentSlideIdx] || slides[0];

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlideIdx((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlideIdx((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slides.length, isAnimating]);

  return (
    <section ref={sectionRef} id="slidedeck" className="py-24 relative overflow-hidden bg-[#07090e]">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-teal-700/12 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 transition-all duration-1000 ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-500/10 border border-zinc-500/20 text-zinc-300 text-xs font-space uppercase tracking-widest mb-4">
            <Monitor className="w-3.5 h-3.5" /> Interactive Presentation Demo
          </div>
            <h2 className="text-3xl sm:text-5xl font-syne font-black text-white tracking-tight">
              Test-Drive My <span className="bg-gradient-to-r from-teal-400 via-emerald-300 to-orange-400 bg-clip-text text-transparent">Slidedeck Design</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-xl">
              Use arrow keys or click Next/Prev to experience the layout hierarchy, typography, and visual pacing I build for corporate pitch decks.
            </p>
          </div>

          {/* Deck selector tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-[#121826] p-1.5 rounded-2xl border border-white/10">
            {presentationProjects.map((proj, idx) => (
              <button
                key={proj.id}
                onClick={() => {
                  setSelectedDeckIdx(idx);
                  setCurrentSlideIdx(0);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedDeckIdx === idx
                    ? 'bg-gradient-to-r from-teal-600 to-emerald-700 text-white shadow-lg shadow-teal-600/25'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {proj.title.split(' ')[0]} Deck
              </button>
            ))}
          </div>
        </div>

        {/* 16:9 Interactive Slidedeck Frame */}
        <div className={`relative glass-card rounded-3xl border border-white/20 p-4 sm:p-8 shadow-2xl overflow-hidden group transition-all duration-1000 delay-200 ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          
          {/* Top Window Bar */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-orange-500/80" />
              <div className="w-3 h-3 rounded-full bg-teal-500/80" />
              <span className="ml-3 text-xs font-space text-gray-400">
                Om_Kumar_Pitch_Deck_Master.pptx [16:9 Widescreen]
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-space px-3 py-1 rounded-full bg-white/5 border border-white/10 text-teal-400 font-bold">
                Slide {currentSlideIdx + 1} of {slides.length}
              </span>
              <button
                onClick={() => alert(`Downloading high-resolution ${activeDeck.title} sample...`)}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-lg bg-teal-500/10 hover:bg-teal-500 text-teal-400 hover:text-white transition-all border border-teal-500/20"
              >
                <Download className="w-3.5 h-3.5" /> Sample Deck PDF
              </button>
            </div>
          </div>

          {/* Slide Stage Container */}
          <div className="relative min-h-[420px] sm:min-h-[480px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0c101a] to-[#07090e] border border-white/10 p-6 sm:p-12 flex flex-col justify-between shadow-inner">
            
            {/* Background geometric accents */}
            <div
              className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full blur-3xl opacity-25 transition-colors duration-500 pointer-events-none"
              style={{ backgroundColor: activeSlide?.bgAccent || '#10b981' }}
            />

            {/* Slide Content Grid */}
            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-opacity duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              
              <div className="lg:col-span-7 space-y-6">
                
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-xs font-space text-teal-300 font-bold tracking-wider uppercase">
                  <Presentation className="w-3.5 h-3.5" /> Keynote Slide {currentSlideIdx + 1}
                </div>

                <div className="space-y-3">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-syne font-black text-white leading-tight">
                    {activeSlide?.title}
                  </h3>
                  <h4 className="text-lg sm:text-xl font-syne font-bold text-orange-400">
                    {activeSlide?.subtitle}
                  </h4>
                </div>

                <div className="text-sm sm:text-base text-gray-300 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5 whitespace-pre-line">
                  {activeSlide?.content}
                </div>

                <div className="flex items-center gap-4 pt-2 text-xs font-space text-gray-400">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-teal-400" /> Investor Grade Polish
                  </span>
                  <span>•</span>
                  <span>Custom Slide Hierarchy</span>
                  <span>•</span>
                  <span>Grid & Alignment Verified</span>
                </div>

              </div>

              {/* Slide Visual Column */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-[#07090e] aspect-video sm:aspect-square md:aspect-video lg:aspect-square flex items-center justify-center">
                  <img
                    src={activeSlide?.image}
                    alt={activeSlide?.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090e]/80 via-transparent to-transparent" />
                  
                  {/* Floating slide badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs font-space bg-[#07090e]/90 px-3 py-1 rounded-full text-gray-300 border border-white/10">
                      {activeDeck.client}
                    </span>
                    <span className="text-xs font-bold text-teal-400 flex items-center gap-1">
                      Visual Pacing <Sparkles className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Slide Navigation Footer Controls */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
              <button
                onClick={handlePrev}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-all border border-white/10 hover:border-teal-500/50 active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" /> Previous Slide
              </button>

              {/* Dot Indicators */}
              <div className="flex items-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlideIdx(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentSlideIdx === i ? 'w-8 bg-blue-400' : 'w-2.5 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-slate-600 hover:from-blue-500 hover:to-slate-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/20 active:scale-95"
              >
                Next Slide <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
