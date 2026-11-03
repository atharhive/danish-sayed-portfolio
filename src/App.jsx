import React, { useState } from 'react';
import { 
  TrendingUp, Shield, Activity, Terminal, ArrowUpRight, 
  ChevronRight, Compass, Sparkles, BookOpen, Layers, BarChart2, CheckCircle2,
  Clock, Award, Lock, ExternalLink
} from 'lucide-react';
import { InstagramIcon } from './components/Icons';
import { TICKER_DATA } from './data';
import InteractiveChart from './components/InteractiveChart';
import RiskCalculator from './components/RiskCalculator';
import MyStoryTimeline from './components/MyStoryTimeline';
import PlaybookAndConnect from './components/PlaybookAndConnect';

export default function App() {
  const [activeTab, setActiveTab] = useState('edge'); // 'edge' | 'story' | 'vault' | 'connect'

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col relative selection:bg-emerald-500/20 selection:text-emerald-400">
      
      {/* Background Ambience & Glows */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-0 right-10 w-[500px] h-[350px] bg-sky-500/5 blur-[140px] rounded-full pointer-events-none z-0" />

      {/* 1. Live Market Ticker Header */}
      <div className="relative z-50 w-full bg-black/60 backdrop-blur-md border-b border-white/5 py-1.5 overflow-hidden">
        <div className="animate-ticker flex items-center gap-8 text-xs font-mono">
          {/* Double mapped for seamless loop */}
          {[...TICKER_DATA, ...TICKER_DATA].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 whitespace-nowrap">
              <span className="text-zinc-400 font-semibold">{item.symbol}</span>
              <span className="text-zinc-200">{item.price}</span>
              <span className={`text-[10px] font-bold ${item.isUp ? 'text-emerald-400' : 'text-rose-400'}`}>
                {item.change}
              </span>
              <span className="text-zinc-700">|</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Sticky Glass Navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-[#09090b]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Logo / Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-black font-extrabold text-sm tracking-wider shadow-lg shadow-emerald-500/20">
              DS
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm sm:text-base tracking-tight text-white font-mono">DANISH SAYED</span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  LIVE OPERATOR
                </span>
              </div>
              <span className="text-[11px] text-zinc-400 font-mono block">@syed.x21 • Day Trader</span>
            </div>
          </div>

          {/* Navigation Route Tabs */}
          <nav className="hidden md:flex items-center p-1 rounded-xl bg-white/[0.03] border border-white/5 font-mono text-xs">
            <button
              onClick={() => setActiveTab('edge')}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                activeTab === 'edge'
                  ? 'bg-zinc-800 text-emerald-400 shadow-sm border border-emerald-500/30'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              The Edge
            </button>
            <button
              onClick={() => setActiveTab('story')}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                activeTab === 'story'
                  ? 'bg-zinc-800 text-emerald-400 shadow-sm border border-emerald-500/30'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              My Story
            </button>
            <button
              onClick={() => setActiveTab('vault')}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                activeTab === 'vault'
                  ? 'bg-zinc-800 text-emerald-400 shadow-sm border border-emerald-500/30'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Risk Vault
            </button>
            <button
              onClick={() => setActiveTab('connect')}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                activeTab === 'connect'
                  ? 'bg-zinc-800 text-emerald-400 shadow-sm border border-emerald-500/30'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Connect
            </button>
          </nav>

          {/* Direct Instagram CTA */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/syed.x21"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-pink-500/10 hover:bg-pink-500/15 border border-pink-500/20 text-pink-400 text-xs font-mono font-medium transition-all group"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>@syed.x21</span>
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Mobile Navigation Bar */}
        <div className="md:hidden flex items-center justify-around py-2 px-4 border-t border-white/5 bg-black/60 font-mono text-[11px]">
          <button
            onClick={() => setActiveTab('edge')}
            className={`px-2.5 py-1 rounded-md ${activeTab === 'edge' ? 'text-emerald-400 font-bold bg-white/5' : 'text-zinc-400'}`}
          >
            The Edge
          </button>
          <button
            onClick={() => setActiveTab('story')}
            className={`px-2.5 py-1 rounded-md ${activeTab === 'story' ? 'text-emerald-400 font-bold bg-white/5' : 'text-zinc-400'}`}
          >
            My Story
          </button>
          <button
            onClick={() => setActiveTab('vault')}
            className={`px-2.5 py-1 rounded-md ${activeTab === 'vault' ? 'text-emerald-400 font-bold bg-white/5' : 'text-zinc-400'}`}
          >
            Risk Vault
          </button>
          <button
            onClick={() => setActiveTab('connect')}
            className={`px-2.5 py-1 rounded-md ${activeTab === 'connect' ? 'text-emerald-400 font-bold bg-white/5' : 'text-zinc-400'}`}
          >
            Connect
          </button>
        </div>
      </header>

      {/* 3. Main Content Container */}
      <main className="relative z-10 flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 w-full">
        
        {/* =========================================================================
            TAB 1: THE EDGE (Terminal, Hero, Bento & Live Execution)
           ========================================================================= */}
        {activeTab === 'edge' && (
          <div className="space-y-20">
            {/* Hero Section */}
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Systematic Price Action &amp; Liquidity Execution
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-sans">
                The market doesn't reward predictions. <br />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
                  It rewards execution.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto font-sans">
                I am <strong>Danish Sayed</strong> (<span className="text-emerald-400 font-mono">@syed.x21</span>), a full-time intraday trader. I trade institutional liquidity sweeps, order block mitigations, and asymmetric risk models with zero emotional interference.
              </p>

              {/* Action Jump Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => setActiveTab('story')}
                  className="px-5 py-2.5 rounded-xl bg-white text-black font-bold font-mono text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all flex items-center gap-2 shadow-lg active:scale-95"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  Read My Story
                </button>
                <button
                  onClick={() => setActiveTab('vault')}
                  className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono text-xs uppercase tracking-wider border border-white/10 transition-all flex items-center gap-2"
                >
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  Open Risk Vault
                </button>
              </div>

              {/* Verified Metrics Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6">
                <div className="glass-panel p-4 rounded-xl text-center border border-white/5">
                  <span className="text-2xl sm:text-3xl font-bold font-mono text-white block">20K+</span>
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Instagram Traders</span>
                </div>
                <div className="glass-panel p-4 rounded-xl text-center border border-white/5">
                  <span className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400 block">1 : 3.2</span>
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Avg Win Risk:Reward</span>
                </div>
                <div className="glass-panel p-4 rounded-xl text-center border border-white/5">
                  <span className="text-2xl sm:text-3xl font-bold font-mono text-sky-400 block">1.0%</span>
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Max Risk Per Idea</span>
                </div>
                <div className="glass-panel p-4 rounded-xl text-center border border-white/5">
                  <span className="text-2xl sm:text-3xl font-bold font-mono text-amber-400 block">12,000+</span>
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Live Chart Hours</span>
                </div>
              </div>
            </div>

            {/* Interactive Live Candlestick Terminal */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2">
                <div>
                  <h2 className="text-2xl font-bold text-white font-mono tracking-tight flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-emerald-400" />
                    Interactive Execution Terminal
                  </h2>
                  <p className="text-xs text-zinc-400">Inspect real historical setups, liquidity sweeps, and mathematical target R-multiples.</p>
                </div>
                <span className="text-xs font-mono text-zinc-500">WebGL / Canvas Simulated Feed</span>
              </div>

              <InteractiveChart />
            </div>

            {/* The 4 Pillars of The Edge (Bento Grid) */}
            <div className="space-y-6">
              <div className="text-center max-w-xl mx-auto">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-2">Core Philosophy</span>
                <h2 className="text-3xl font-bold text-white tracking-tight">The 4 Pillars of the Edge</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-mono font-bold text-sm mb-4 border border-emerald-500/20">
                    01
                  </div>
                  <h3 className="text-lg font-bold text-white font-mono mb-2">Liquidity Over Lagging Indicators</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                    Retail traders use moving averages and oscillators that react to what already happened. I track where stop-losses pool: Asian highs/lows, equal highs, and structural imbalances where institutional algorithms inject volume.
                  </p>
                </div>

                <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center font-mono font-bold text-sm mb-4 border border-sky-500/20">
                    02
                  </div>
                  <h3 className="text-lg font-bold text-white font-mono mb-2">Asymmetric Payoff Geometry</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                    You do not need an 80% win rate to achieve life-changing performance. With a 1:3 R:R model, a 40% win rate generates substantial compounding profits while absorbing normal statistical drawdown clusters.
                  </p>
                </div>

                <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-mono font-bold text-sm mb-4 border border-amber-500/20">
                    03
                  </div>
                  <h3 className="text-lg font-bold text-white font-mono mb-2">Strict Mental Circuit Breakers</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                    A trader’s worst enemy is their own dopamine cycle. After two losses in any 24-hour cycle, trading terminates automatically. No revenge trades, no sizing up to 'get it back,' no exceptions.
                  </p>
                </div>

                <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-mono font-bold text-sm mb-4 border border-purple-500/20">
                    04
                  </div>
                  <h3 className="text-lg font-bold text-white font-mono mb-2">Continuous Screenshot Archival</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                    Every trade execution is captured in high resolution at entry, mid-trade, and exit, indexed with psychological state ratings to eliminate subjective biases.
                  </p>
                </div>
              </div>
            </div>

            {/* Daily Execution Rhythm */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/5">
              <h3 className="text-xl font-bold font-mono text-white mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-emerald-400" />
                The Daily Execution Routine
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-xs font-mono text-emerald-400 font-bold block mb-1">05:30 UTC</span>
                  <strong className="text-sm text-white block mb-1 font-mono">Asia Range Mapping</strong>
                  <p className="text-xs text-zinc-400">Map previous day highs/lows, Asian consolidation limits, and mark liquidity targets.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-xs font-mono text-emerald-400 font-bold block mb-1">07:30 UTC</span>
                  <strong className="text-sm text-white block mb-1 font-mono">London Open Execution</strong>
                  <p className="text-xs text-zinc-400">Watch for early London manipulation sweeps on XAU/USD and GBP pairs. Execute primary setups.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-xs font-mono text-emerald-400 font-bold block mb-1">13:00 UTC</span>
                  <strong className="text-sm text-white block mb-1 font-mono">NY Macro Briefing</strong>
                  <p className="text-xs text-zinc-400">Audit high-impact economic calendar, US bond yields, and index futures pre-market order flow.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-xs font-mono text-emerald-400 font-bold block mb-1">16:30 UTC</span>
                  <strong className="text-sm text-white block mb-1 font-mono">Debrief &amp; Terminal Close</strong>
                  <p className="text-xs text-zinc-400">Log all closed trades, archive charts into Notion journal, and close trading screens.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 2: MY STORY (Inspired by Rishi Thakor's Raw Journey)
           ========================================================================= */}
        {activeTab === 'story' && (
          <div className="max-w-4xl mx-auto">
            <MyStoryTimeline />
          </div>
        )}

        {/* =========================================================================
            TAB 3: RISK VAULT (Interactive Position Calculator & Rules)
           ========================================================================= */}
        {activeTab === 'vault' && (
          <div className="space-y-16">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-2">Math Over Hope</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">The Risk Vault</h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-2">
                Use the exact position sizing model that protects capital through every market drawdown.
              </p>
            </div>

            <RiskCalculator />

            <PlaybookAndConnect />
          </div>
        )}

        {/* =========================================================================
            TAB 4: CONNECT (Direct Outreach & Instagram)
           ========================================================================= */}
        {activeTab === 'connect' && (
          <div className="max-w-4xl mx-auto">
            <PlaybookAndConnect />
          </div>
        )}

      </main>

      {/* 4. Footer */}
      <footer className="relative z-10 w-full border-t border-white/5 bg-black/80 py-8 px-4 sm:px-8 font-mono text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-zinc-300 font-bold">DANISH SAYED</span>
            <span>(@syed.x21) • All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-zinc-400">
            <a href="https://www.instagram.com/syed.x21" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              Instagram
            </a>
            <span>•</span>
            <button onClick={() => setActiveTab('story')} className="hover:text-white transition-colors">
              My Story
            </button>
            <span>•</span>
            <button onClick={() => setActiveTab('vault')} className="hover:text-white transition-colors">
              Risk Vault
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-4 text-[10px] text-zinc-600 leading-relaxed text-center sm:text-left">
          <strong>Risk Disclaimer:</strong> Trading foreign exchange, indices, and leveraged instruments carries a high level of risk to your capital and may not be suitable for all investors. Content presented here is for educational and portfolio demonstration purposes only.
        </div>
      </footer>

    </div>
  );
}
