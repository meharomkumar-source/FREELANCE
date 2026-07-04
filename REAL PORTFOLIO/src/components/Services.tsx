import React, { useState } from 'react';
import { Layers, Award, Presentation, CheckCircle2, ArrowRight, Sparkles, Wand2 } from 'lucide-react';
import { SKILLS_LIST } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';

interface ServicesProps {
  onSelectService: (service: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [sectionRef, sectionInView] = useInView({ threshold: 0.1 });
  const [cardsRef, cardsInView] = useInView({ threshold: 0.1 });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.15 });

  const serviceItems = [
    {
      id: 'poster',
      title: 'Poster & Key Art Design',
      tagline: 'High-Impact Visuals That Grab Attention in 1 Second',
      icon: Layers,
      gradient: 'from-teal-600 to-emerald-800',
      borderGlow: 'group-hover:border-teal-400',
      shadowGlow: 'hover:shadow-teal-600/25',
      desc: 'Whether it is a theatrical movie poster, a massive music festival announcement, or a viral social media product launch, I craft high-resolution key art with dramatic lighting, flawless typography, and immersive composition.',
      deliverables: [
        'Theatrical & Film Key Art Posters',
        'Concert & Festival Announcement Graphics',
        'Product Launch Advertising Posters',
        'Custom 3D Typography & Photo-manipulation',
        'High-Resolution 300 DPI Print-Ready Assets'
      ]
    },
    {
      id: 'logo',
      title: 'Logo & Brand Identity',
      tagline: 'Distinctive, Timeless Marks Engineered for Growth',
      icon: Award,
      gradient: 'from-orange-500 to-rose-700',
      borderGlow: 'group-hover:border-orange-400',
      shadowGlow: 'hover:shadow-orange-500/25',
      desc: 'Your logo is the cornerstone of your business. I create minimalist, geometric, and unforgettable brand marks backed by comprehensive visual identity systems that scale seamlessly from app icons to skyscraper billboards.',
      deliverables: [
        'Minimalist & Geometric Vector Logos',
        'Comprehensive Brand Guidelines (PDF)',
        'Typography & Color Palette Architecture',
        'Realistic 3D Showcase Mockups',
        'Full Copyright Ownership Transfer'
      ]
    },
    {
      id: 'presentation',
      title: 'Pitch Decks & Slidedecks',
      tagline: 'Investor Presentations That Convert Ideas Into Capital',
      icon: Presentation,
      gradient: 'from-zinc-500 to-zinc-700',
      borderGlow: 'group-hover:border-zinc-400',
      shadowGlow: 'hover:shadow-zinc-600/25',
      desc: 'Don’t let bad slides kill a great pitch. I transform complex data, financial models, and corporate strategies into sleek, narrative-driven slidedecks that keep investors, executives, and keynote audiences captivated.',
      deliverables: [
        'Series A / Seed Investor Pitch Decks',
        'Corporate Conference Keynote Slidedecks',
        'Complex Data Visualization & Infographics',
        'Smooth Animated Transitions & Layouts',
        'Fully Editable PowerPoint / Keynote / Figma'
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-24 relative overflow-hidden bg-[#1a1e2c]/60 border-t border-b border-white/10">
      
      {/* Background ambient lighting */}
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-96 h-96 bg-teal-700/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-96 h-96 bg-orange-700/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-space uppercase tracking-widest mb-4">
            <Wand2 className="w-3.5 h-3.5" /> What I Do For Clients
          </div>
          <h2 className="text-3xl sm:text-5xl font-syne font-black text-white tracking-tight mb-6">
            Core Specialized <span className="bg-gradient-to-r from-teal-400 via-emerald-300 to-orange-400 bg-clip-text text-transparent">Creative Services</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Every project receives tailored creative direction, lightning-fast communication, and premium 3D graphic craftsmanship designed to elevate your brand.
          </p>
        </div>

        {/* 3 Service Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, idx) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === idx;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative glass-card rounded-3xl p-8 transition-all duration-700 border border-white/10 ${service.borderGlow} shadow-2xl ${service.shadowGlow} flex flex-col justify-between transform ${
                  cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                } ${isHovered ? '-translate-y-3 scale-[1.01]' : ''}`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div>
                  {/* Top Header & Icon */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-0.5 shadow-lg flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300`}>
                      <div className="w-full h-full bg-[#1a1e2c] rounded-[14px] flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <span className="text-xs font-space text-gray-400 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-syne font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-space font-medium uppercase tracking-wider text-teal-400 mb-4">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-gray-300 leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Deliverables checklist */}
                  <div className="space-y-2.5 mb-8 border-t border-white/10 pt-6">
                    <span className="text-xs font-space text-gray-400 uppercase tracking-widest block mb-3">
                      Key Deliverables:
                    </span>
                    {service.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <button
                  onClick={() => onSelectService(service.id)}
                  className={`w-full py-3.5 rounded-xl bg-white/5 hover:bg-gradient-to-r ${service.gradient} text-white font-syne font-bold text-sm border border-white/10 hover:border-transparent transition-all flex items-center justify-center gap-2 group/btn`}
                >
                  Book {service.title.split(' ')[0]} Project
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>

              </div>
            );
          })}
        </div>

        {/* Software Mastery Progress Section */}
        <div ref={skillsRef} className={`mt-24 p-8 sm:p-12 glass-card rounded-3xl border border-white/10 transition-all duration-1000 ${skillsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-space text-orange-400 tracking-widest uppercase flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> Professional Toolkit
              </span>
              <h3 className="text-2xl sm:text-3xl font-syne font-bold text-white">
                Mastery Across Industry Standard Creative Tools
              </h3>
              <p className="text-sm text-gray-400">
                From pixel-perfect image compositing to vector geometry and interactive slidedeck frameworks.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {SKILLS_LIST.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-orange-400 font-space">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-teal-500 via-emerald-400 to-orange-500 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
