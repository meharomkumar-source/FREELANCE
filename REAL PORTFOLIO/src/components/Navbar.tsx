import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Interactive Slidedeck', href: '#slidedeck' },
    { name: '3D Design Lab', href: '#design-lab' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#141824]/85 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl shadow-teal-950/30'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-600 via-emerald-500 to-orange-500 p-[1px] flex items-center justify-center shadow-lg shadow-teal-600/25 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#141824] rounded-[11px] flex items-center justify-center">
              <span className="font-syne font-black text-lg bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
                OK
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-syne font-bold text-lg tracking-wide text-white flex items-center gap-1.5">
              Om Kumar
              <Sparkles className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
            </span>
            <span className="text-[10px] font-space tracking-widest text-orange-400 uppercase">
              3D Creative Designer
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-teal-400 hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenContact}
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold rounded-full group bg-gradient-to-br from-teal-600 via-emerald-500 to-orange-500 text-white shadow-lg shadow-teal-600/25 hover:shadow-orange-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span className="px-6 py-2.5 transition-all ease-in duration-75 bg-[#141824]/30 group-hover:bg-transparent rounded-full flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-ping" />
              Hire Om Now
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-300 hover:text-white rounded-lg bg-white/5 border border-white/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#141824]/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-4 pb-6 mt-4 space-y-3 shadow-2xl animate-in fade-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-base font-medium text-gray-200 hover:bg-white/5 hover:text-teal-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-600 to-orange-500 font-semibold text-white shadow-lg shadow-teal-600/30 text-center flex items-center justify-center gap-2"
            >
              Hire Om Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
