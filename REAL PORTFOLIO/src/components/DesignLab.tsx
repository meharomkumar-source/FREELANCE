import React, { useState } from 'react';
import { Rotate3d, Sparkles } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export const DesignLab: React.FC = () => {
  const [sectionRef, sectionInView] = useInView({ threshold: 0.1 });
  const [labRef, labInView] = useInView({ threshold: 0.15 });
  const [labMode, setLabMode] = useState<'poster' | 'logo' | 'slidedeck'>('poster');
  const [themeColor, setThemeColor] = useState<'cyan' | 'purple' | 'emerald' | 'amber'>('cyan');
  const [customHeadline, setCustomHeadline] = useState('OM KUMAR CREATIVE');
  const [isSpinning, setIsSpinning] = useState(true);

  const themeConfig = {
    cyan: {
      accent: 'from-cyan-400 to-blue-600',
      text: 'text-cyan-400',
      border: 'border-cyan-500/50',
      glow: 'shadow-cyan-500/30',
      bg: 'bg-cyan-950/30',
      hex: '#06b6d4'
    },
    purple: {
      accent: 'from-purple-400 to-pink-600',
      text: 'text-purple-400',
      border: 'border-purple-500/50',
      glow: 'shadow-purple-500/30',
      bg: 'bg-purple-950/30',
      hex: '#a855f7'
    },
    emerald: {
      accent: 'from-emerald-400 to-teal-600',
      text: 'text-emerald-400',
      border: 'border-emerald-500/50',
      glow: 'shadow-emerald-500/30',
      bg: 'bg-emerald-950/30',
      hex: '#10b981'
    },
    amber: {
      accent: 'from-amber-400 to-orange-600',
      text: 'text-amber-400',
      border: 'border-amber-500/50',
      glow: 'shadow-amber-500/30',
      bg: 'bg-amber-950/30',
      hex: '#f59e0b'
    }
  };

  const currentTheme = themeConfig[themeColor];

  return (
    <section ref={sectionRef} id="design-lab" className="py-24 relative overflow-hidden bg-[#0a0d16]/80 border-t border-b border-white/10">
      
      {/* Ambient background blur */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[160px] opacity-20 pointer-events-none transition-all duration-700"
        style={{ backgroundColor: currentTheme.hex }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-space uppercase tracking-widest mb-4">
            <Rotate3d className="w-3.5 h-3.5 animate-spin" /> Interactive 3D Mockup Sandbox
          </div>
          <h2 className="text-3xl sm:text-5xl font-syne font-black text-white tracking-tight mb-4">
            Test My <span className={`bg-gradient-to-r ${currentTheme.accent} bg-clip-text text-transparent`}>Design Customization Lab</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Customize the 3D hologram below to preview how I adapt typography, color palettes, and brand mockups for your specific project.
          </p>
        </div>

        {/* Lab Workspace Grid */}
        <div ref={labRef} className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-all duration-1000 delay-200 ${labInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          
          {/* Controls Column */}
          <div className="lg:col-span-5 space-y-8 glass-card p-6 sm:p-8 rounded-3xl border border-white/15">
            
            {/* 1. Select Asset Type */}
            <div className="space-y-3">
              <label className="text-xs font-space text-gray-300 uppercase tracking-wider block font-bold">
                1. Select Mockup Type:
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setLabMode('poster')}
                  className={`py-3 px-2 rounded-xl text-xs font-semibold font-syne transition-all ${
                    labMode === 'poster'
                      ? `bg-gradient-to-r ${currentTheme.accent} text-white shadow-lg ${currentTheme.glow}`
                      : 'bg-white/5 text-gray-400 hover:text-white border border-white/10'
                  }`}
                >
                  Poster Billboard
                </button>
                <button
                  onClick={() => setLabMode('logo')}
                  className={`py-3 px-2 rounded-xl text-xs font-semibold font-syne transition-all ${
                    labMode === 'logo'
                      ? `bg-gradient-to-r ${currentTheme.accent} text-white shadow-lg ${currentTheme.glow}`
                      : 'bg-white/5 text-gray-400 hover:text-white border border-white/10'
                  }`}
                >
                  Logo Hologram
                </button>
                <button
                  onClick={() => setLabMode('slidedeck')}
                  className={`py-3 px-2 rounded-xl text-xs font-semibold font-syne transition-all ${
                    labMode === 'slidedeck'
                      ? `bg-gradient-to-r ${currentTheme.accent} text-white shadow-lg ${currentTheme.glow}`
                      : 'bg-white/5 text-gray-400 hover:text-white border border-white/10'
                  }`}
                >
                  Slidedeck Screen
                </button>
              </div>
            </div>

            {/* 2. Pick Color Scheme */}
            <div className="space-y-3">
              <label className="text-xs font-space text-gray-300 uppercase tracking-wider block font-bold">
                2. Hologram Lighting Theme:
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setThemeColor('cyan')}
                  className={`w-10 h-10 rounded-xl bg-[#06b6d4] flex items-center justify-center transition-transform ${
                    themeColor === 'cyan' ? 'scale-125 ring-2 ring-white shadow-lg shadow-cyan-500/50' : 'opacity-70 hover:opacity-100'
                  }`}
                  aria-label="Cyan theme"
                />
                <button
                  onClick={() => setThemeColor('purple')}
                  className={`w-10 h-10 rounded-xl bg-[#a855f7] flex items-center justify-center transition-transform ${
                    themeColor === 'purple' ? 'scale-125 ring-2 ring-white shadow-lg shadow-purple-500/50' : 'opacity-70 hover:opacity-100'
                  }`}
                  aria-label="Purple theme"
                />
                <button
                  onClick={() => setThemeColor('emerald')}
                  className={`w-10 h-10 rounded-xl bg-[#10b981] flex items-center justify-center transition-transform ${
                    themeColor === 'emerald' ? 'scale-125 ring-2 ring-white shadow-lg shadow-emerald-500/50' : 'opacity-70 hover:opacity-100'
                  }`}
                  aria-label="Emerald theme"
                />
                <button
                  onClick={() => setThemeColor('amber')}
                  className={`w-10 h-10 rounded-xl bg-[#f59e0b] flex items-center justify-center transition-transform ${
                    themeColor === 'amber' ? 'scale-125 ring-2 ring-white shadow-lg shadow-amber-500/50' : 'opacity-70 hover:opacity-100'
                  }`}
                  aria-label="Amber theme"
                />
                <span className="text-xs font-space text-gray-400 uppercase ml-2">
                  Active: {themeColor}
                </span>
              </div>
            </div>

            {/* 3. Custom Text */}
            <div className="space-y-3">
              <label className="text-xs font-space text-gray-300 uppercase tracking-wider block font-bold">
                3. Live Custom Headline:
              </label>
              <input
                type="text"
                value={customHeadline}
                onChange={(e) => setCustomHeadline(e.target.value)}
                maxLength={24}
                className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/20 text-white font-syne font-bold text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                placeholder="Enter your brand or title..."
              />
            </div>

            {/* 4. Rotation speed toggle */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <span className="text-xs font-space text-gray-400">
                3D Continuous Spin:
              </span>
              <button
                onClick={() => setIsSpinning(!isSpinning)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  isSpinning ? 'bg-white/20 text-white' : 'bg-white/5 text-gray-500'
                }`}
              >
                {isSpinning ? '● Spinning ON' : '○ Paused'}
              </button>
            </div>

          </div>

          {/* 3D Hologram Preview Column */}
          <div className="lg:col-span-7 flex items-center justify-center">
            
            <div className="relative w-full max-w-lg aspect-square perspective-2000 flex items-center justify-center">
              
              {/* Floating Holographic Rings */}
              <div
                className={`absolute inset-4 rounded-full border border-dashed transition-all duration-1000 ${currentTheme.border} ${
                  isSpinning ? 'animate-spin-slow' : ''
                }`}
              />
              <div
                className={`absolute inset-16 rounded-full border border-white/10 transition-all duration-1000 ${
                  isSpinning ? 'animate-spin-slow' : ''
                }`}
                style={{ animationDirection: 'reverse', animationDuration: '12s' }}
              />

              {/* Central 3D Display Unit */}
              <div
                className={`relative w-80 h-96 sm:w-96 sm:h-[420px] rounded-3xl transition-all duration-500 transform ${
                  isSpinning ? 'animate-float' : ''
                } p-6 flex flex-col justify-between shadow-2xl border ${currentTheme.border} ${currentTheme.bg} backdrop-blur-2xl`}
              >
                
                {/* Top status */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-[10px] font-space text-gray-300 uppercase tracking-widest flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-white animate-pulse" /> Live 3D Hologram
                  </span>
                  <span className={`text-[10px] font-space font-bold uppercase ${currentTheme.text}`}>
                    MODE: {labMode}
                  </span>
                </div>

                {/* Central graphics depending on mode */}
                <div className="my-auto text-center space-y-6">
                  {labMode === 'poster' && (
                    <div className="space-y-4">
                      <div className="w-24 h-32 mx-auto rounded-xl bg-gradient-to-tr from-cyan-500 via-purple-600 to-pink-500 p-1 shadow-2xl transform rotate-3">
                        <div className="w-full h-full bg-black/80 rounded-lg flex items-center justify-center p-2">
                          <span className="text-[10px] font-space text-cyan-300 tracking-tighter uppercase font-bold">
                            KEY ART 2026
                          </span>
                        </div>
                      </div>
                      <h4 className="text-2xl sm:text-3xl font-syne font-black tracking-tight text-white uppercase break-words px-4">
                        {customHeadline}
                      </h4>
                      <p className="text-xs text-gray-400">
                        High-contrast theatrical poster concept with fluid depth.
                      </p>
                    </div>
                  )}

                  {labMode === 'logo' && (
                    <div className="space-y-4">
                      <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/30 flex items-center justify-center shadow-2xl backdrop-blur-md transform hover:rotate-180 transition-transform duration-700">
                        <span className={`text-4xl font-syne font-black tracking-tight ${currentTheme.text}`}>
                          {customHeadline.slice(0, 2) || 'OK'}
                        </span>
                      </div>
                      <h4 className="text-xl sm:text-2xl font-syne font-bold text-white uppercase break-words">
                        {customHeadline}
                      </h4>
                      <p className="text-xs text-gray-400">
                        Vector geometry emblem rendered with realistic glass & lighting.
                      </p>
                    </div>
                  )}

                  {labMode === 'slidedeck' && (
                    <div className="space-y-4">
                      <div className="w-48 h-28 mx-auto rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/40 p-3 flex flex-col justify-between text-left shadow-2xl">
                        <div className="flex items-center justify-between">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                          <span className="text-[9px] font-space text-emerald-400 font-bold">SLIDE 01</span>
                        </div>
                        <div>
                          <span className="text-xs font-syne font-bold text-white line-clamp-1">
                            {customHeadline}
                          </span>
                          <span className="text-[9px] font-space text-gray-400 block mt-0.5">
                            Series A Financial Growth Story
                          </span>
                        </div>
                      </div>
                      <h4 className="text-lg sm:text-xl font-syne font-bold text-white uppercase">
                        {customHeadline}
                      </h4>
                      <p className="text-xs text-gray-400">
                        16:9 widescreen presentation layout with bold typographic hierarchy.
                      </p>
                    </div>
                  )}
                </div>

                {/* Bottom badge */}
                <div className="border-t border-white/10 pt-3 flex items-center justify-between text-[11px] text-gray-400 font-space">
                  <span>Engine: Three.js / CSS 3D</span>
                  <span className="text-white font-semibold">Om Kumar Studio</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
