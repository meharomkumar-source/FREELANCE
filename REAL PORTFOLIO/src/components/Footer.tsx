import React, { useState } from 'react';
import { Mail, Sparkles, Check } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [footerRef, footerInView] = useInView({ threshold: 0.1 });
  const emailAddress = "meharomkumar@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <footer ref={footerRef} className="bg-[#0e111a] border-t border-white/10 pt-20 pb-12 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-teal-600/15 via-orange-600/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10 transition-all duration-1000 ${footerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 via-emerald-500 to-orange-500 p-[1px] flex items-center justify-center shadow-lg">
                <div className="w-full h-full bg-[#0e111a] rounded-[11px] flex items-center justify-center">
                  <span className="font-syne font-black text-lg bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
                    OK
                  </span>
                </div>
              </div>
              <span className="font-syne font-bold text-xl text-white tracking-wide">
                Om Kumar
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Freelance 3D Creative Designer. Specializing in high-impact theatrical <strong className="text-white font-medium">Posters</strong>, minimalist <strong className="text-white font-medium">Logos</strong>, and Series A investor <strong className="text-white font-medium">Pitch Decks</strong>.
            </p>

            {/* Direct Email copy */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-space text-gray-200 transition-all group"
              >
                <Mail className="w-4 h-4 text-teal-400" />
                <span>{emailAddress}</span>
                {copied ? (
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Copied!
                  </span>
                ) : (
                  <span className="text-gray-500 group-hover:text-gray-300">Copy</span>
                )}
              </button>
            </div>
          </div>

          {/* Quick Nav Col */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-space uppercase tracking-widest text-teal-400 font-bold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400 font-medium">
              <li><a href="#services" className="hover:text-white transition-colors">Specialized Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Poster & Logo Gallery</a></li>
              <li><a href="#slidedeck" className="hover:text-white transition-colors">Interactive Slidedeck Demo</a></li>
              <li><a href="#design-lab" className="hover:text-white transition-colors">3D Mockup Sandbox</a></li>
            </ul>
          </div>

          {/* Social Profiles Col */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-space uppercase tracking-widest text-orange-400 font-bold">
              Direct Contact
            </h4>
            <div>
              <a
                href="https://wa.me/918770557320?text=Hi%20Om%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center gap-3 w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-syne font-bold text-sm transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-400/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                {/* Official WhatsApp SVG Icon */}
                <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-space text-gray-500">
          <div>
            © 2026 Om Kumar Studio. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-orange-400" /> Available for New Projects
            </span>
            <span>•</span>
            <span>Om Kumar Studio</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
