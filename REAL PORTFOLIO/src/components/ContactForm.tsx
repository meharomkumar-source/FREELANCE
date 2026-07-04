import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, ShieldCheck, MessageSquare, Loader2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useInView } from '../hooks/useInView';

interface ContactFormProps {
  prefilledMessage?: string;
}

const RECIPIENT_EMAIL = 'meharomkumar@gmail.com';

export const ContactForm: React.FC<ContactFormProps> = ({ prefilledMessage = '' }) => {
  const [sectionRef, sectionInView] = useInView({ threshold: 0.1 });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(prefilledMessage);
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (prefilledMessage) {
      setMessage(prefilledMessage);
    }
  }, [prefilledMessage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name || !email) {
      setErrorMsg('Please enter your name and email address.');
      return;
    }

    setIsSending(true);

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message || 'No project details provided.');
      formData.append('_subject', `New Portfolio Inquiry from ${name}`);
      formData.append('_captcha', 'false');
      formData.append('_template', 'table');

      const response = await fetch(`https://formsubmit.co/${RECIPIENT_EMAIL}`, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#2563eb', '#64748b', '#c9a96e', '#0f1b32'],
        });
        setSubmitted(true);
      } else {
        setErrorMsg('Something went wrong sending your message. Please try again or email me directly.');
      }
    } catch (err) {
      setErrorMsg('Network error — please try again or email me directly at ' + RECIPIENT_EMAIL);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="py-24 relative overflow-hidden bg-[#0a0f1e]">
      
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-br from-blue-800/10 via-slate-700/10 to-amber-800/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-space uppercase tracking-widest mb-4">
            <MessageSquare className="w-3.5 h-3.5" /> Let's Work Together
          </div>
          <h2 className="text-3xl sm:text-5xl font-syne font-black text-white tracking-tight mb-4">
            Have a Project in Mind? <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-amber-400 bg-clip-text text-transparent">Let's Talk</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Send me your project brief and I will get back to you within 2 hours with conceptual ideas and availability.
          </p>
          <p className="text-gray-500 text-xs sm:text-sm mt-2 font-space">
            Messages are delivered directly to <span className="text-amber-400">{RECIPIENT_EMAIL}</span>
          </p>
        </div>

        {/* Contact Form Card */}
        <div id="contact-form" className={`max-w-3xl mx-auto glass-card rounded-3xl border border-white/20 p-6 sm:p-12 shadow-2xl transition-all duration-1000 delay-200 ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          {submitted ? (
            <div className="py-12 text-center space-y-6 animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-gradient-to-tr from-blue-500 to-amber-500 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-blue-600/40">
                <CheckCircle2 className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-3xl font-syne font-bold text-white">
                Message Received, {name}!
              </h3>
              <p className="text-gray-300 text-base max-w-md mx-auto leading-relaxed">
                Thank you for reaching out. Your message has been sent directly to my inbox and I will get back to you within 2 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setName('');
                  setEmail('');
                  setMessage('');
                }}
                className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white text-white hover:text-black font-semibold text-xs transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-space text-gray-300 uppercase">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-white text-sm focus:outline-none focus:border-blue-400 transition-colors placeholder:text-gray-600"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-space text-gray-300 uppercase">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-white text-sm focus:outline-none focus:border-blue-400 transition-colors placeholder:text-gray-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-space text-gray-300 uppercase">Project Scope & Details</label>
                <textarea
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your poster, logo, or presentation project..."
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-white text-sm focus:outline-none focus:border-blue-400 transition-colors resize-none placeholder:text-gray-600"
                />
              </div>

              {errorMsg && (
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-amber-600 hover:from-blue-500 hover:to-amber-500 text-white font-syne font-bold text-base shadow-xl shadow-blue-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSending ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Project Brief</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-6 text-[11px] text-gray-400 font-space pt-2">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> NDA Friendly
                </span>
                <span>•</span>
                <span>Avg Response: 2 Hrs</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
