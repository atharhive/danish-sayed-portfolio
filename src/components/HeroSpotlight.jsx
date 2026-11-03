import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, ArrowUpRight, TrendingUp, ShieldCheck, Activity, Terminal } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function HeroSpotlight({ onExploreStory, onOpenVault }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cardRotate, setCardRotate] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Mouse move handler for interactive aurora spotlight and 3D card tilt
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    // 3D tilt calculation (-10 to +10 deg)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotX = -((y - centerY) / centerY) * 8;
    const rotY = ((x - centerX) / centerX) * 8;
    setCardRotate({ x: rotX, y: rotY });
  };

  const handleMouseLeave = () => {
    setCardRotate({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center items-center py-12 sm:py-20 px-4 sm:px-6 overflow-hidden"
    >
      {/* 1. Dynamic Cursor Spotlight (21st.dev / Aceternity style) */}
      <div 
        className="pointer-events-none absolute -inset-px transition-opacity duration-500 opacity-60"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.12), transparent 80%)`
        }}
      />
      
      {/* Secondary Ambient Aurora Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-sky-500/10 blur-[130px] rounded-full pointer-events-none" />

      {/* 2. Top Pill Tag: Trader Status */}
      <div className="relative z-10 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-emerald-500/25 text-emerald-400 text-xs font-mono uppercase tracking-widest backdrop-blur-xl mb-6 shadow-lg shadow-emerald-500/5 animate-pulse-subtle">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>Intraday Liquidity &amp; Price Action</span>
      </div>

      {/* 3. Main Hero Typography */}
      <div className="relative z-10 max-w-4xl text-center space-y-6">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] font-sans">
          The market doesn’t care about predictions. <br />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent underline decoration-emerald-500/30 underline-offset-8">
            It rewards execution.
          </span>
        </h1>

        <p className="text-sm sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto font-sans font-normal">
          I am <strong className="text-white font-semibold">Danish Sayed</strong> (<span className="text-emerald-400 font-mono">@syed.x21</span>), a full-time intraday trader. I trade institutional liquidity sweeps, order block mitigations, and asymmetric risk models with zero emotional interference.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
          <button
            onClick={onExploreStory}
            className="px-6 py-3 rounded-xl bg-white text-black font-bold font-mono text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all flex items-center gap-2 shadow-xl shadow-white/10 active:scale-95"
          >
            <span>Read My Story</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
          
          <button
            onClick={onOpenVault}
            className="px-6 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white font-mono text-xs uppercase tracking-wider border border-white/10 hover:border-emerald-500/40 transition-all flex items-center gap-2 backdrop-blur-md"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Open Risk Vault</span>
          </button>

          <a
            href="https://www.instagram.com/syed.x21"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 rounded-xl bg-pink-500/10 hover:bg-pink-500/15 text-pink-400 font-mono text-xs uppercase tracking-wider border border-pink-500/20 transition-all flex items-center gap-2"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>20k on Instagram</span>
          </a>
        </div>
      </div>

      {/* 4. Interactive 3D Floating Hero Card with Real PFP & Telemetry */}
      <div 
        className="relative z-10 mt-12 sm:mt-16 w-full max-w-3xl perspective-[1200px]"
      >
        <div 
          style={{
            transform: `rotateX(${cardRotate.x}deg) rotateY(${cardRotate.y}deg)`,
            transition: 'transform 0.15s ease-out'
          }}
          className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/15 shadow-2xl glow-emerald relative overflow-hidden backdrop-blur-2xl"
        >
          {/* Top Trader Profile Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img 
                  src="/danish-pfp.jpg" 
                  alt="Danish Sayed" 
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-emerald-400/60 shadow-lg shadow-emerald-500/30"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-black flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-black animate-ping" />
                </div>
              </div>
              
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white font-mono">Danish Sayed</h3>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-semibold">
                    Verified Operator
                  </span>
                </div>
                <p className="text-xs text-zinc-400 font-mono mt-0.5">@syed.x21 • Day Trader &amp; Risk Strategist</p>
                <p className="text-[11px] text-zinc-500 mt-1 flex items-center gap-1.5 font-sans">
                  <span>📍 Active Sessions: London Open &amp; New York Open</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="text-right">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">Disciplined Focus</span>
                <span className="text-xs font-mono font-bold text-emerald-400">Pure Price Action</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics Inside the 3D Card */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 text-center">
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
              <span className="text-xl sm:text-2xl font-bold font-mono text-white block">20K+</span>
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Followers</span>
            </div>
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
              <span className="text-xl sm:text-2xl font-bold font-mono text-emerald-400 block">1 : 3.2</span>
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Avg R:R</span>
            </div>
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
              <span className="text-xl sm:text-2xl font-bold font-mono text-sky-400 block">1.0%</span>
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Max Risk</span>
            </div>
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
              <span className="text-xl sm:text-2xl font-bold font-mono text-amber-400 block">4+ Yrs</span>
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Screen Time</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
