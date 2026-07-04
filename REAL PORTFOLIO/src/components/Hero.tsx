import React, { useState } from 'react';
import { Sparkles, ArrowDownRight, Eye, Send, Layers, Award, Presentation, Palette, Rotate3d } from 'lucide-react';
import { FREELANCE_STATS } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'poster' | 'logo' | 'presentation'>('poster');
  const [heroRef, heroInView] = useInView({ threshold: 0.15 });
  const [statsRef, statsInView] = useInView({ threshold: 0.2 });

  const showcasePreviews = {
    poster: {
      title: 'Cyberpunk 2088 Key Art',
      badge: 'Poster Design',
      img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
      color: 'from-teal-600 to-emerald-700',
      desc: 'Theatrical key art, movie posters & high-energy event promotional designs.'
    },
    logo: {
      title: 'Vortex AI Brand Mark',
      badge: 'Logo & Identity',
      img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      color: 'from-orange-500 to-rose-700',
      desc: 'Timeless geometric vector logos, emblems, and visual brand systems.'
    },
    presentation: {
      title: 'Series A Investor Pitch Deck',
      badge: 'Presentations',
      img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
      color: 'from-zinc-500 to-zinc-700',
      desc: 'High-converting investor decks, corporate keynote slidedecks & infographics.'
    }
  };

  const currentPreview = showcasePreviews[activeTab];

  return (
    <section ref={heroRef} className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background radial glowing gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-teal-900/25 via-zinc-800/15 to-orange-900/20 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center transition-all duration-1000 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Holographic Freelancer Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-950/50 border border-teal-500/30 text-teal-300 text-xs sm:text-sm font-space tracking-wide shadow-lg shadow-teal-600/10 backdrop-blur-md animate-bounce duration-1000">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-ping" />
              <Sparkles className="w-4 h-4 text-orange-400" />
              AVAILABLE FOR HIRE — POSTERS, LOGOS & PRESENTATIONS
            </div>

            {/* Main Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-syne font-black tracking-tight leading-none text-white">
                I'm <span className="bg-gradient-to-r from-teal-400 via-emerald-300 to-orange-400 bg-clip-text text-transparent">Om Kumar</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-syne font-bold text-gray-300">
                Bringing Your Brand to Life in <span className="text-teal-400 underline decoration-teal-400/40 underline-offset-4">3D</span> & High-Definition
              </h2>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Freelance visual storyteller specialized in crafting iconic <strong className="text-white font-medium">Posters</strong>, distinctive <strong className="text-white font-medium">Logos</strong>, and high-stakes <strong className="text-white font-medium">Investor Pitch Decks</strong>. Combining Three.js 3D depth with master-level vector and typography aesthetics.
            </p>

            {/* Core Skill Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <span className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 flex items-center gap-2">
                <Palette className="w-4 h-4 text-teal-400" /> Poster & Key Art
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 flex items-center gap-2">
                <Award className="w-4 h-4 text-orange-400" /> Logo & Identity
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 flex items-center gap-2">
                <Presentation className="w-4 h-4 text-zinc-300" /> Slidedecks & Decks
              </span>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#portfolio"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-teal-600 via-emerald-500 to-orange-500 text-white font-syne font-bold text-base shadow-xl shadow-teal-600/25 hover:shadow-orange-500/40 hover:scale-105 active:scale-95 transition-all text-center flex items-center justify-center gap-2 group"
              >
                <Eye className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Explore 3D Work
              </a>
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/20 font-syne font-bold text-base transition-all flex items-center justify-center gap-2 group"
              >
                <Send className="w-5 h-5 text-orange-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Request Custom Quote
              </button>
            </div>

          </div>

          {/* Right Column: Interactive 3D Showcase Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            {/* Interactive Tab Selector */}
            <div className="flex bg-[#1c2130] p-1.5 rounded-2xl border border-white/10 mb-6 shadow-xl z-10 max-w-full overflow-x-auto">
              <button
                onClick={() => setActiveTab('poster')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                  activeTab === 'poster'
                    ? 'bg-gradient-to-r from-teal-600 to-emerald-700 text-white shadow-lg shadow-teal-600/20 scale-105'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Layers className="w-4 h-4" /> Poster
              </button>
              <button
                onClick={() => setActiveTab('logo')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                  activeTab === 'logo'
                    ? 'bg-gradient-to-r from-orange-500 to-rose-600 text-white shadow-lg shadow-orange-500/20 scale-105'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Award className="w-4 h-4" /> Logo
              </button>
              <button
                onClick={() => setActiveTab('presentation')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                  activeTab === 'presentation'
                    ? 'bg-gradient-to-r from-zinc-600 to-zinc-700 text-white shadow-lg shadow-zinc-600/20 scale-105'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Presentation className="w-4 h-4" /> Slidedeck
              </button>
            </div>

            {/* 3D Floating Showcase Box */}
            <div className="relative w-full max-w-md perspective-1000 group cursor-pointer">
              
              {/* Outer Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-teal-500 via-emerald-500 to-orange-500 rounded-3xl opacity-40 blur-xl group-hover:opacity-75 transition-opacity duration-500" />
              
              <div className="relative glass-card rounded-3xl overflow-hidden border border-white/20 p-6 shadow-2xl transition-all duration-500 transform group-hover:rotate-1 group-hover:-translate-y-2">
                
                {/* Image Frame with 3D Float effect */}
                <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-[#141824] shadow-inner mb-5">
                  <img
                    key={activeTab}
                    src={currentPreview.img}
                    alt={currentPreview.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 animate-in fade-in duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141824] via-transparent to-transparent opacity-60" />
                  
                  {/* Category Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${currentPreview.color} text-white shadow-md flex items-center gap-1.5`}>
                    <Rotate3d className="w-3.5 h-3.5 animate-spin-slow" />
                    {currentPreview.badge}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-syne font-bold text-white mb-1">
                      {currentPreview.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                  {currentPreview.desc}
                </p>

                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-xs font-space text-teal-400 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> Live 3D Interactive Preview
                  </span>
                  <a
                    href={activeTab === 'presentation' ? '#slidedeck' : '#portfolio'}
                    className="inline-flex items-center gap-1 text-xs font-bold text-white hover:text-teal-400 transition-colors bg-white/10 px-3 py-1.5 rounded-lg"
                  >
                    Examine Project <ArrowDownRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* Stats Section */}
        <div ref={statsRef} className={`mt-24 pt-12 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          {FREELANCE_STATS.map((stat, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl text-center group hover:border-teal-500/40 transition-all duration-300">
              <div className="text-3xl sm:text-4xl md:text-5xl font-syne font-extrabold bg-gradient-to-r from-teal-400 via-emerald-300 to-orange-400 bg-clip-text text-transparent mb-1 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-space uppercase tracking-wider text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
