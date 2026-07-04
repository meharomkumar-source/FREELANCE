import React, { useEffect } from 'react';
import { X, Calendar, User, Tag, Palette, Sparkles } from 'lucide-react';
import { PortfolioItem } from '../data/portfolioData';

interface ProjectModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onOpenContact: (prefill?: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ item, onClose, onOpenContact }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl bg-[#0e1320] border border-white/20 rounded-3xl overflow-hidden shadow-2xl shadow-cyan-950/50">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2.5 rounded-full bg-black/60 hover:bg-white text-gray-300 hover:text-black transition-all border border-white/10 shadow-lg"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] overflow-y-auto">
          
          {/* Visual Showcase (Left) */}
          <div className="lg:col-span-7 bg-black p-6 sm:p-10 flex flex-col justify-center relative min-h-[350px]">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-auto max-h-[650px] object-contain rounded-2xl shadow-2xl mx-auto"
            />

            {/* Logo Palette Showcase */}
            {item.category === 'logo' && item.palette && (
              <div className="mt-8 p-4 bg-white/5 rounded-2xl border border-white/10">
                <span className="text-xs font-space text-gray-300 uppercase block mb-3 flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5 text-purple-400" /> Official Brand Color Palette
                </span>
                <div className="grid grid-cols-4 gap-3">
                  {item.palette.map((color, i) => (
                    <div key={i} className="text-center group">
                      <div
                        className="h-10 w-full rounded-xl shadow-md border border-white/10 mb-1 transition-transform group-hover:scale-105"
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-[10px] font-space text-gray-400 block uppercase">
                        {color}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Project Details (Right) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-space font-bold uppercase tracking-wider bg-white/10 text-cyan-400 border border-white/10">
                  {item.category}
                </span>
                <span className="text-xs font-space text-gray-400">
                  {item.subCategory}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-syne font-black text-white leading-tight">
                {item.title}
              </h2>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {item.description}
              </p>

              {/* Metadata */}
              <div className="space-y-3 pt-4 border-t border-white/10 text-xs font-space text-gray-400">
                {item.client && (
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-gray-300">
                      <User className="w-4 h-4 text-cyan-400" /> Client:
                    </span>
                    <span className="text-white font-medium">{item.client}</span>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-gray-300">
                    <Calendar className="w-4 h-4 text-purple-400" /> Delivery Year:
                  </span>
                  <span className="text-white font-medium">{item.year || '2025'}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="pt-2">
                <span className="text-xs font-space text-gray-400 uppercase tracking-widest block mb-2 flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5" /> Techniques & Tags:
                </span>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Actions */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenContact(`Hi Om, I saw "${item.title}" and would love to commission a similar ${item.category} project.`);
                }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-syne font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all text-center flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" /> Commission Similar {item.category.toUpperCase()}
              </button>
              <button
                onClick={onClose}
                className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 font-semibold text-xs transition-colors"
              >
                Back to Portfolio Gallery
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
