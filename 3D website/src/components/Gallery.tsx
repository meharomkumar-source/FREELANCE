import React, { useState } from 'react';
import { Layers, Award, Presentation, Eye, Sparkles, ExternalLink, Filter } from 'lucide-react';
import { PORTFOLIO_ITEMS, PortfolioItem } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

interface GalleryProps {
  onOpenProject: (item: PortfolioItem) => void;
  selectedCategory?: string;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenProject, selectedCategory = 'all' }) => {
  const [filter, setFilter] = useState<string>(selectedCategory);
  const [headerRef, headerInView] = useInView({ threshold: 0.1 });
  const [gridRef, gridInView] = useInView({ threshold: 0.05 });

  const filterOptions = [
    { id: 'all', label: 'All Work', icon: Filter },
    { id: 'poster', label: 'Posters & Key Art', icon: Layers },
    { id: 'logo', label: 'Logos & Branding', icon: Award },
    { id: 'presentation', label: 'Pitch Decks & Slides', icon: Presentation },
  ];

  const filteredItems = filter === 'all' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-[#07090e]">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-teal-700/12 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filters */}
        <div ref={headerRef} className={`flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 transition-all duration-1000 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-space uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Selected Works
          </div>
            <h2 className="text-3xl sm:text-5xl font-syne font-black text-white tracking-tight">
              Featured <span className="bg-gradient-to-r from-teal-400 via-emerald-300 to-orange-400 bg-clip-text text-transparent">Design Portfolio</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-[#121826] p-1.5 rounded-2xl border border-white/10 shadow-xl">
            {filterOptions.map((opt) => {
              const Icon = opt.icon;
              const isActive = filter === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setFilter(opt.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-gradient-to-r from-teal-600 to-emerald-700 text-white shadow-lg shadow-teal-600/25 scale-105'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => {
                if (item.category === 'presentation') {
                  const el = document.getElementById('slidedeck');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  onOpenProject(item);
                }
              }}
              className={`group cursor-pointer perspective-1000 flex flex-col justify-between transition-all duration-700 ${
                gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              <div className="relative glass-card rounded-3xl overflow-hidden border border-white/15 p-4 transition-all duration-500 hover:border-teal-400/50 hover:shadow-2xl hover:shadow-teal-600/15 transform hover:-translate-y-2 hover:rotate-[0.5deg]">
                
                {/* Image Frame */}
                  <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-[#141824]">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141824]/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[10px] font-space uppercase tracking-widest font-bold bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                    {item.category}
                  </div>

                  {/* Client Tag */}
                  {item.client && (
                    <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full text-[10px] font-space text-gray-300 bg-black/50 backdrop-blur-md border border-white/10">
                      {item.client}
                    </div>
                  )}

                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 bg-teal-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <span className="px-5 py-2.5 rounded-full bg-white text-black font-syne font-bold text-xs sm:text-sm shadow-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Eye className="w-4 h-4 text-teal-600" />
                      {item.category === 'presentation' ? 'Launch Slidedeck' : 'Inspect Details'}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 pt-5">
                  <span className="text-xs font-space text-teal-400 uppercase tracking-wider block mb-1">
                    {item.subCategory}
                  </span>
                  <h3 className="text-xl font-syne font-bold text-white mb-3 line-clamp-1 group-hover:text-teal-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {item.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-space px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="px-4 pb-2 pt-3 mt-2 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 group-hover:text-white transition-colors">
                  <span className="font-space">Year: {item.year || '2025'}</span>
                  <span className="flex items-center gap-1 font-semibold text-teal-400">
                    View Project <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
