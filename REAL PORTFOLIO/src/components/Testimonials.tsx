import React from 'react';
import { Star, Quote, MessageSquareHeart } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

export const Testimonials: React.FC = () => {
  const [sectionRef, sectionInView] = useInView({ threshold: 0.1 });
  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden bg-[#0a0d16]/50 border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-space uppercase tracking-widest mb-4">
            <MessageSquareHeart className="w-3.5 h-3.5" /> Client Reputation
          </div>
          <h2 className="text-3xl sm:text-5xl font-syne font-black text-white tracking-tight mb-4">
            Loved By Founders & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Creative Directors</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Don't just take my word for it — here is what clients say about working with Om Kumar.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              className={`glass-card rounded-3xl p-8 border border-white/10 flex flex-col justify-between hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-700 relative group ${
                sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5 group-hover:text-purple-400/20 transition-colors" />

              <div>
                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-gray-200 italic mb-8 leading-relaxed">
                  “{t.quote}”
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-500/40"
                />
                <div>
                  <h4 className="font-syne font-bold text-white text-base">
                    {t.name}
                  </h4>
                  <p className="text-xs text-gray-400 font-space">
                    {t.role}, <strong className="text-gray-300">{t.company}</strong>
                  </p>
                  <span className="text-[10px] font-space text-purple-400 uppercase tracking-wider block mt-0.5">
                    Project: {t.projectType}
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
