import React, { useState } from 'react';
import { Shield, Send, ArrowUpRight, CheckCircle, MessageSquare, Lock, Terminal } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { NON_NEGOTIABLE_RULES } from '../data';
import confetti from 'canvas-confetti';

export default function PlaybookAndConnect() {
  const [selectedRule, setSelectedRule] = useState(0);
  const [inquiryType, setInquiryType] = useState('Mentorship');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', contact: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#10b981', '#38bdf8', '#a855f7']
    });
  };

  return (
    <div className="w-full space-y-16">
      {/* 1. The 6 Non-Negotiable Rules */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Lock className="w-3.5 h-3.5" />
            Systematic Discipline
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            The 6 Non-Negotiable Rules
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Rules written in red ink from hundreds of past mistakes. Breaking any rule results in immediate desk removal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {NON_NEGOTIABLE_RULES.map((rule, idx) => {
            const isCurrent = selectedRule === idx;
            return (
              <div
                key={rule.number}
                onClick={() => setSelectedRule(idx)}
                className={`cursor-pointer glass-panel p-5 rounded-2xl border transition-all ${
                  isCurrent
                    ? 'border-emerald-500/40 bg-zinc-900/90 shadow-xl'
                    : 'border-white/5 hover:border-white/10 hover:bg-white/[0.02]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-white/5 text-emerald-400 border border-white/5">
                    RULE #{rule.number}
                  </span>
                  <Shield className={`w-4 h-4 ${isCurrent ? 'text-emerald-400' : 'text-zinc-600'}`} />
                </div>
                <h4 className="font-bold text-sm text-zinc-100 mb-2 font-mono">{rule.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">{rule.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Direct Connect & Inquiry Form */}
      <div id="connect-section" className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4">
              <MessageSquare className="w-3.5 h-3.5" />
              Direct Communication Channel
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Let’s Connect.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 font-sans">
              Whether you are a serious trader looking to sharpen execution psychology, an institution discussing allocation, or a fellow builder, reach out directly.
            </p>

            <div className="space-y-3">
              <a
                href="https://www.instagram.com/syed.x21"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 text-zinc-200 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-pink-500/10 text-pink-400 border border-pink-500/20">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold block">Instagram Community</span>
                    <span className="text-xs text-zinc-400 font-mono">@syed.x21 (20k+ Traders)</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-all" />
              </a>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 text-zinc-300">
                <span className="text-xs font-mono text-zinc-400 block mb-1">Timezone & Active Sessions:</span>
                <span className="text-xs font-semibold text-emerald-400 font-mono">
                  London Open (07:30 UTC) &amp; New York Open (13:30 UTC)
                </span>
              </div>
            </div>
          </div>

          {/* Form / Success Card */}
          <div className="bg-black/40 p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl">
            {formSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white font-mono">Message Dispatched</h3>
                <p className="text-xs text-zinc-400 max-w-sm mx-auto">
                  Thank you, <strong className="text-emerald-400">{formData.name || 'friend'}</strong>. Your inquiry regarding {inquiryType} has been received. I review messages between trade sessions.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-4 py-2 text-xs font-mono rounded-lg bg-white/10 hover:bg-white/15 text-white transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Topic Selector Pills */}
                <div>
                  <label className="text-xs font-mono text-zinc-400 block mb-2">Subject / Purpose:</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Mentorship', 'Prop Allocation', 'Podcast / Media', 'General Inquiry'].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setInquiryType(type)}
                        className={`py-2 px-3 text-xs font-mono rounded-lg border transition-all text-center ${
                          inquiryType === type
                            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-semibold'
                            : 'bg-white/5 text-zinc-400 border-white/5 hover:bg-white/10'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-zinc-400 block mb-1">Your Name:</label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-zinc-900/80 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-sans text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-zinc-400 block mb-1">Telegram Handle or Email:</label>
                  <input
                    type="text"
                    required
                    placeholder="@handle or email@domain.com"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="w-full bg-zinc-900/80 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-sans text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-zinc-400 block mb-1">Message:</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell me about your trading experience or collaboration idea..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-zinc-900/80 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-sans text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black font-bold font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20 active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  Dispatch Direct Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
