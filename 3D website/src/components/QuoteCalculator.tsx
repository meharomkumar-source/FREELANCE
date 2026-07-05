import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Clock, ShieldCheck, DollarSign, Wand2, Layers, Award, Presentation, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PRICING_TIERS } from '../data/portfolioData';

interface QuoteCalculatorProps {
  prefilledMessage?: string;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ prefilledMessage = '' }) => {
  const [service, setService] = useState<'poster' | 'logo' | 'presentation'>('logo');
  const [urgency, setUrgency] = useState<'standard' | 'express' | 'rush'>('standard');
  const [extras, setExtras] = useState<string[]>(['source']);
  
  // Contact form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(prefilledMessage);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledMessage) {
      setMessage(prefilledMessage);
    }
  }, [prefilledMessage]);

  const basePrices = {
    poster: 200,
    logo: 350,
    presentation: 550
  };

  const urgencyMultipliers = {
    standard: 0,
    express: 100,
    rush: 220
  };

  const extraPrices: Record<string, number> = {
    source: 0, // included
    mockup3d: 75,
    extraConcept: 100,
    rushCall: 50
  };

  const calculateEstimate = () => {
    let total = basePrices[service] + urgencyMultipliers[urgency];
    extras.forEach(ex => {
      total += extraPrices[ex] || 0;
    });
    return total;
  };

  const toggleExtra = (id: string) => {
    if (id === 'source') return; // always included
    setExtras(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      alert('Please enter your name and email address.');
      return;
    }

    // Trigger celebratory confetti
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#06b6d4', '#a855f7', '#10b981', '#f59e0b']
    });

    setSubmitted(true);
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-[#07090e]">
      
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-br from-cyan-600/10 via-purple-600/10 to-blue-600/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Pricing Tiers Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-space uppercase tracking-widest mb-4">
            <DollarSign className="w-3.5 h-3.5" /> Transparent Freelance Rates
          </div>
          <h2 className="text-3xl sm:text-5xl font-syne font-black text-white tracking-tight mb-4">
            Standard <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Pricing Packages</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Simple, upfront rates with unlimited draft revisions. Need something tailored? Use the interactive calculator below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {PRICING_TIERS.map((tier, idx) => (
            <div
              key={idx}
              className={`relative glass-card rounded-3xl p-8 border flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 ${
                tier.popular
                  ? 'border-cyan-400/80 shadow-2xl shadow-cyan-500/20 bg-[#121929]/90'
                  : 'border-white/10 hover:border-white/30'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-space text-xs font-bold tracking-wider uppercase shadow-lg">
                  ✦ Most Requested
                </div>
              )}

              <div>
                <h3 className="text-2xl font-syne font-bold text-white mb-2">
                  {tier.name}
                </h3>
                <p className="text-xs text-gray-400 mb-6 min-h-[36px]">
                  {tier.description}
                </p>

                <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-white/10">
                  <span className="text-4xl sm:text-5xl font-syne font-black text-white">
                    {tier.price}
                  </span>
                  <span className="text-xs font-space text-cyan-400 uppercase tracking-wider">
                    / Project
                  </span>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2 text-xs font-space font-medium text-emerald-400 mb-4">
                    <Clock className="w-4 h-4" /> Est. Delivery: {tier.delivery}
                  </div>
                  {tier.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact-form"
                onClick={() => {
                  setService(tier.category);
                  setMessage(`Hi Om, I am interested in your "${tier.name}" package (${tier.price}). Let's discuss my project requirements.`);
                }}
                className={`w-full py-4 rounded-xl font-syne font-bold text-sm transition-all text-center block ${
                  tier.popular
                    ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white shadow-lg shadow-cyan-500/30 hover:scale-105'
                    : 'bg-white/10 hover:bg-white text-white hover:text-black'
                }`}
              >
                Select {tier.name.split(' ')[0]} Package
              </a>
            </div>
          ))}
        </div>

        {/* Interactive Quote Calculator & Contact Section */}
        <div id="contact-form" className="glass-card rounded-3xl border border-white/20 p-6 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Interactive Quote Estimator */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-space text-cyan-400 uppercase tracking-widest mb-2 font-bold">
                  <Wand2 className="w-4 h-4" /> Instant Freelance Estimator
                </div>
                <h3 className="text-3xl font-syne font-bold text-white">
                  Customize & Calculate Your Project Investment
                </h3>
              </div>

              {/* Step 1 */}
              <div className="space-y-3">
                <label className="text-xs font-space text-gray-300 uppercase tracking-wider block font-bold">
                  1. Select Primary Project Need:
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setService('poster')}
                    className={`p-4 rounded-2xl text-center transition-all flex flex-col items-center justify-center gap-2 border ${
                      service === 'poster'
                        ? 'bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border-cyan-400 text-white shadow-lg shadow-cyan-500/20'
                        : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                    }`}
                  >
                    <Layers className="w-6 h-6 text-cyan-400" />
                    <span className="text-xs font-syne font-bold">Poster Design</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setService('logo')}
                    className={`p-4 rounded-2xl text-center transition-all flex flex-col items-center justify-center gap-2 border ${
                      service === 'logo'
                        ? 'bg-gradient-to-br from-purple-500/20 to-pink-600/20 border-purple-400 text-white shadow-lg shadow-purple-500/20'
                        : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                    }`}
                  >
                    <Award className="w-6 h-6 text-purple-400" />
                    <span className="text-xs font-syne font-bold">Logo & Identity</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setService('presentation')}
                    className={`p-4 rounded-2xl text-center transition-all flex flex-col items-center justify-center gap-2 border ${
                      service === 'presentation'
                        ? 'bg-gradient-to-br from-emerald-500/20 to-teal-600/20 border-emerald-400 text-white shadow-lg shadow-emerald-500/20'
                        : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                    }`}
                  >
                    <Presentation className="w-6 h-6 text-emerald-400" />
                    <span className="text-xs font-syne font-bold">Pitch Deck</span>
                  </button>
                </div>
              </div>

              {/* Step 2 */}
              <div className="space-y-3">
                <label className="text-xs font-space text-gray-300 uppercase tracking-wider block font-bold">
                  2. Select Desired Turnaround Speed:
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setUrgency('standard')}
                    className={`p-3 rounded-xl text-xs font-bold font-space transition-all border ${
                      urgency === 'standard' ? 'bg-white text-black border-white' : 'bg-white/5 text-gray-400 border-white/10 hover:text-white'
                    }`}
                  >
                    Standard (4-6 Days)
                  </button>
                  <button
                    type="button"
                    onClick={() => setUrgency('express')}
                    className={`p-3 rounded-xl text-xs font-bold font-space transition-all border ${
                      urgency === 'express' ? 'bg-cyan-500 text-black border-cyan-400' : 'bg-white/5 text-gray-400 border-white/10 hover:text-white'
                    }`}
                  >
                    Express (48h +$100)
                  </button>
                  <button
                    type="button"
                    onClick={() => setUrgency('rush')}
                    className={`p-3 rounded-xl text-xs font-bold font-space transition-all border ${
                      urgency === 'rush' ? 'bg-amber-500 text-black border-amber-400' : 'bg-white/5 text-gray-400 border-white/10 hover:text-white'
                    }`}
                  >
                    Rush (24h +$220)
                  </button>
                </div>
              </div>

              {/* Step 3 */}
              <div className="space-y-3">
                <label className="text-xs font-space text-gray-300 uppercase tracking-wider block font-bold">
                  3. Add-On Deliverables:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => toggleExtra('mockup3d')}
                    className={`p-3 rounded-xl text-left text-xs font-medium transition-all border flex items-center justify-between ${
                      extras.includes('mockup3d')
                        ? 'bg-purple-900/40 border-purple-400 text-white'
                        : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                    }`}
                  >
                    <span>3D Animated Mockup Reel</span>
                    <span className="font-space text-purple-300">+$75</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleExtra('extraConcept')}
                    className={`p-3 rounded-xl text-left text-xs font-medium transition-all border flex items-center justify-between ${
                      extras.includes('extraConcept')
                        ? 'bg-cyan-900/40 border-cyan-400 text-white'
                        : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                    }`}
                  >
                    <span>Extra Concept Direction</span>
                    <span className="font-space text-cyan-300">+$100</span>
                  </button>
                </div>
              </div>

              {/* Estimate Result Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/60 via-blue-950/60 to-purple-950/60 border border-cyan-500/40 flex items-center justify-between shadow-xl">
                <div>
                  <span className="text-xs font-space text-cyan-300 uppercase tracking-wider block font-semibold">
                    Instant Estimated Investment Range:
                  </span>
                  <span className="text-3xl sm:text-4xl font-syne font-black text-white">
                    ${calculateEstimate()} — ${calculateEstimate() + 150}
                  </span>
                </div>
                <div className="text-right hidden sm:block">
                  <span className="text-[10px] font-space px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    ✓ 100% Satisfaction Guaranteed
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Direct Contact Form */}
            <div className="lg:col-span-6 bg-[#0c111d] p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-6 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-gradient-to-tr from-emerald-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/40">
                    <CheckCircle2 className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="text-3xl font-syne font-bold text-white">
                    Message Received, {name}!
                  </h3>
                  <p className="text-gray-300 text-base max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. I will review your project requirements and get back to you with conceptual ideas and availability within 2 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white text-white hover:text-black font-semibold text-xs transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h4 className="text-2xl font-syne font-bold text-white mb-2 flex items-center gap-2">
                      <MessageSquare className="w-6 h-6 text-cyan-400" />
                      Hire Om Kumar
                    </h4>
                    <p className="text-xs text-gray-400 font-space">
                      Direct contact — no middleman fees. Or reach out via WhatsApp / Email below.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-space text-gray-300 uppercase">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Om Kumar Client"
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-space text-gray-300 uppercase">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="client@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-space text-gray-300 uppercase">Project Scope & Details</label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about your poster, logo, or presentation slidedeck goals..."
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-syne font-bold text-base shadow-xl shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Send Project Brief & Lock Rate</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center justify-center gap-6 text-[11px] text-gray-400 font-space pt-2">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> NDA Friendly
                    </span>
                    <span>•</span>
                    <span>Avg Response: 2 Hrs</span>
                  </div>

                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
