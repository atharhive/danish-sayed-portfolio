import React, { useState } from 'react';
import { Clock, ArrowUpRight, CheckCircle2, ChevronRight, Flame, Brain, ShieldAlert } from 'lucide-react';
import { TIMELINE_STORY } from '../data';

export default function MyStoryTimeline() {
  const [activeYear, setActiveYear] = useState(TIMELINE_STORY[0].year);

  return (
    <div className="w-full">
      {/* Editorial Section Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4">
          <Clock className="w-3.5 h-3.5" />
          The Unfiltered Progression
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
          Let’s Go Back In Time.
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-sans">
          No rented supercars. No fake MetaTrader screenshots. Just four years of psychological warfare, burnt accounts, and thousands of hours staring at raw candlesticks.
        </p>
      </div>

      {/* Year Pill Selector (for rapid mobile hopping) */}
      <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
        {TIMELINE_STORY.map((item) => (
          <button
            key={item.year}
            onClick={() => setActiveYear(item.year)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all whitespace-nowrap ${
              activeYear === item.year
                ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20'
                : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5'
            }`}
          >
            {item.year}
          </button>
        ))}
      </div>

      {/* Vertical Timeline Stream */}
      <div className="relative border-l border-zinc-800 ml-4 sm:ml-12 pl-6 sm:pl-10 space-y-12">
        {TIMELINE_STORY.map((item, index) => {
          const isSelected = activeYear === item.year;
          return (
            <div
              key={item.year}
              className={`relative transition-all duration-300 ${
                isSelected ? 'opacity-100 scale-[1.01]' : 'opacity-70 hover:opacity-100'
              }`}
            >
              {/* Timeline Pin Indicator */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                  isSelected
                    ? 'border-emerald-400 bg-emerald-500 text-black shadow-lg shadow-emerald-500/40'
                    : 'border-zinc-700 bg-zinc-900 text-zinc-500'
                }`}
              >
                <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-black' : 'bg-zinc-600'}`} />
              </div>

              {/* Story Milestone Card */}
              <div
                onClick={() => setActiveYear(item.year)}
                className={`cursor-pointer glass-panel p-6 sm:p-8 rounded-2xl border transition-all ${
                  isSelected
                    ? 'border-emerald-500/30 bg-zinc-900/80 shadow-2xl glow-emerald'
                    : 'border-white/5 hover:border-white/10'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xl sm:text-2xl font-mono font-extrabold text-white">
                      {item.year}
                    </span>
                    <span className="text-xs sm:text-sm font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                      {item.phase}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-base sm:text-xl font-bold text-zinc-100 mb-3 font-sans">
                  "{item.headline}"
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans text-justify">
                  {item.body}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Philosophy Manifesto Quote Box */}
      <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-emerald-500/20 text-center relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
          <Brain className="w-64 h-64 text-emerald-400" />
        </div>
        <p className="text-lg sm:text-2xl font-serif italic text-zinc-200 max-w-2xl mx-auto leading-relaxed">
          "The chart is simply an unfiltered mirror of your own impulses. Master your breath, master your risk, and the math takes care of itself."
        </p>
        <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest mt-4 block">
          — Danish Sayed (@syed.x21)
        </span>
      </div>
    </div>
  );
}
