import React, { useState } from 'react';
import { Calculator, ShieldCheck, DollarSign, Target, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RiskCalculator() {
  const [balance, setBalance] = useState(100000);
  const [riskPercent, setRiskPercent] = useState(1.0);
  const [stopPips, setStopPips] = useState(18);
  const [pipValue, setPipValue] = useState(10); // Standard lot ($10/pip for EUR/USD or $10/pt for indices/gold)

  const dollarsAtRisk = (balance * (riskPercent / 100));
  const lotSize = (dollarsAtRisk / (stopPips * pipValue)).toFixed(2);
  const targetReward = (dollarsAtRisk * 3.2).toFixed(2);
  const dailyDrawdownCap = (balance * 0.02).toFixed(2);

  const handleCalculate = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#10b981', '#38bdf8', '#fbbf24']
    });
  };

  return (
    <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 glow-emerald">
      <div className="flex items-center justify-between pb-5 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-white font-mono">Asymmetric Position Size Engine</h3>
            <p className="text-xs text-zinc-400">Strict mathematical risk parameters before pressing buy or sell.</p>
          </div>
        </div>
        <span className="hidden sm:inline-block text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          Rule: Max 1% Risk
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
        {/* Input Parameters */}
        <div className="space-y-4">
          <div>
            <label className="text-xs font-mono text-zinc-300 block mb-1.5 flex justify-between">
              <span>Account Equity ($):</span>
              <span className="text-emerald-400 font-bold">${balance.toLocaleString()}</span>
            </label>
            <div className="grid grid-cols-4 gap-2 mb-2">
              {[10000, 25000, 50000, 100000].map((val) => (
                <button
                  key={val}
                  onClick={() => setBalance(val)}
                  className={`py-1.5 text-xs font-mono rounded-lg border transition-all ${
                    balance === val
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                      : 'bg-white/5 text-zinc-400 border-white/5 hover:bg-white/10'
                  }`}
                >
                  ${val / 1000}k
                </button>
              ))}
            </div>
            <input
              type="number"
              value={balance}
              onChange={(e) => setBalance(Math.max(1000, Number(e.target.value)))}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm font-mono text-white focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-mono text-zinc-300 block mb-1.5 flex justify-between">
                <span>Risk per Trade:</span>
                <span className="text-emerald-400 font-bold">{riskPercent}%</span>
              </label>
              <select
                value={riskPercent}
                onChange={(e) => setRiskPercent(Number(e.target.value))}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm font-mono text-white focus:outline-none focus:border-emerald-500"
              >
                <option value={0.5}>0.5% (Conservative)</option>
                <option value={1.0}>1.0% (Standard Model)</option>
                <option value={1.5}>1.5% (High Conviction)</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-mono text-zinc-300 block mb-1.5 flex justify-between">
                <span>Stop Loss (Pips/Pts):</span>
                <span className="text-emerald-400 font-bold">{stopPips}</span>
              </label>
              <input
                type="number"
                value={stopPips}
                onChange={(e) => setStopPips(Math.max(1, Number(e.target.value)))}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm font-mono text-white focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black font-bold font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20 active:scale-[0.98]"
          >
            <Sparkles className="w-4 h-4" />
            Validate Risk Parameters
          </button>
        </div>

        {/* Output Metrics Grid */}
        <div className="grid grid-cols-2 gap-3.5 bg-black/40 p-4 sm:p-5 rounded-2xl border border-white/5">
          <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/5">
            <span className="text-[11px] font-mono text-zinc-400 block mb-1">Max Capital at Risk</span>
            <span className="text-xl sm:text-2xl font-bold font-mono text-red-400">
              ${dollarsAtRisk.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
            <span className="text-[10px] text-zinc-500 block mt-1">Exact 1R loss limit</span>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/5">
            <span className="text-[11px] font-mono text-zinc-400 block mb-1">Recommended Lots</span>
            <span className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">
              {lotSize} <span className="text-xs text-zinc-400 font-normal">Lots</span>
            </span>
            <span className="text-[10px] text-zinc-500 block mt-1">Normalized position size</span>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/5">
            <span className="text-[11px] font-mono text-zinc-400 block mb-1">Target 1:3.2R Profit</span>
            <span className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">
              +${Number(targetReward).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
            <span className="text-[10px] text-zinc-500 block mt-1">Asymmetric payout</span>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/5">
            <span className="text-[11px] font-mono text-zinc-400 block mb-1">Daily Hard Stop (2R)</span>
            <span className="text-xl sm:text-2xl font-bold font-mono text-amber-400">
              ${Number(dailyDrawdownCap).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
            <span className="text-[10px] text-zinc-500 block mt-1">Circuit breaker disconnect</span>
          </div>

          <div className="col-span-2 mt-1 p-2.5 rounded-lg bg-emerald-500/5 border border-emerald-500/20 flex items-center gap-2 text-xs text-zinc-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Mathematical expectancy remains positive even with a 40% win rate.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
