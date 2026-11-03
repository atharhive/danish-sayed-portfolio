import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, ShieldAlert, Target, Activity, Maximize2, RefreshCw } from 'lucide-react';
import { TRADE_CASE_STUDIES } from '../data';

export default function InteractiveChart() {
  const [selectedTrade, setSelectedTrade] = useState(TRADE_CASE_STUDIES[0]);
  const [activeStep, setActiveStep] = useState(100); // 0 to 100 timeline scrubber
  const [isLivePulsing, setIsLivePulsing] = useState(true);
  const canvasRef = useRef(null);

  // Candlestick simulated data based on selected trade
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    // Draw background grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.lineWidth = 1;
    const gridSpacing = 40;
    for (let x = 0; x < width; x += gridSpacing) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += gridSpacing) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Generate 32 clean candlesticks
    const candlesCount = 32;
    const candleWidth = 10;
    const spacing = (width - 80) / candlesCount;

    // Base values
    let price = 200;
    const basePrices = [
      180, 185, 178, 192, 190, 182, 175, 170, 168, 174,
      170, 165, 158, 150, 155, 162, 170, 182, 195, 210,
      218, 225, 230, 222, 235, 245, 255, 260, 258, 268, 275, 280
    ];

    const maxVisible = Math.floor((activeStep / 100) * candlesCount);

    // Draw entry, stop loss, and target zones
    const entryY = 165;
    const stopLossY = 135;
    const targetY = 270;

    // Green Profit Zone shading
    ctx.fillStyle = 'rgba(16, 185, 129, 0.06)';
    ctx.fillRect(40, entryY, width - 80, targetY - entryY);

    // Red Risk Zone shading
    ctx.fillStyle = 'rgba(239, 68, 68, 0.06)';
    ctx.fillRect(40, stopLossY, width - 80, entryY - stopLossY);

    // Target Line (Green)
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([5, 4]);
    ctx.beginPath();
    ctx.moveTo(40, targetY);
    ctx.lineTo(width - 40, targetY);
    ctx.stroke();

    // Entry Line (Cyan / Blue)
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(40, entryY);
    ctx.lineTo(width - 40, entryY);
    ctx.stroke();

    // Stop Loss Line (Red)
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(40, stopLossY);
    ctx.lineTo(width - 40, stopLossY);
    ctx.stroke();
    ctx.setLineDash([]); // Reset dash

    // Draw Candlesticks
    for (let i = 0; i < Math.min(candlesCount, maxVisible + 1); i++) {
      const x = 50 + i * spacing;
      const prevClose = i === 0 ? 180 : basePrices[i - 1];
      const curClose = basePrices[i];
      const isGreen = curClose >= prevClose;

      const high = Math.max(prevClose, curClose) + 8;
      const low = Math.min(prevClose, curClose) - 8;

      // Color
      const color = isGreen ? '#10b981' : '#ef4444';
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.lineWidth = 1.5;

      // Wick
      ctx.beginPath();
      ctx.moveTo(x, high);
      ctx.lineTo(x, low);
      ctx.stroke();

      // Body
      const bodyTop = Math.max(prevClose, curClose);
      const bodyBottom = Math.min(prevClose, curClose);
      const bodyHeight = Math.max(3, bodyTop - bodyBottom);
      ctx.fillRect(x - candleWidth / 2, bodyBottom, candleWidth, bodyHeight);
    }

    // Draw Price Labels on the right
    ctx.font = '10px JetBrains Mono';
    ctx.fillStyle = '#10b981';
    ctx.fillText(`TP: ${selectedTrade.target} (${selectedTrade.rr})`, width - 150, targetY - 6);

    ctx.fillStyle = '#38bdf8';
    ctx.fillText(`ENTRY: ${selectedTrade.entry}`, width - 150, entryY - 6);

    ctx.fillStyle = '#ef4444';
    ctx.fillText(`STOP: ${selectedTrade.stop} (-1.0R)`, width - 150, stopLossY - 6);

  }, [selectedTrade, activeStep]);

  return (
    <div className="w-full glass-panel rounded-2xl p-4 sm:p-6 border border-white/10 glow-emerald">
      {/* Top Header bar of the Terminal */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Activity className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-base sm:text-lg text-white font-mono">{selectedTrade.pair}</h3>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                {selectedTrade.type}
              </span>
            </div>
            <p className="text-xs text-zinc-400 font-mono mt-0.5">{selectedTrade.session}</p>
          </div>
        </div>

        {/* Trade Switcher Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-black/40 rounded-xl border border-white/5">
          {TRADE_CASE_STUDIES.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setSelectedTrade(t);
                setActiveStep(100);
              }}
              className={`px-3 py-1.5 text-xs font-mono font-medium rounded-lg transition-all ${
                selectedTrade.id === t.id
                  ? 'bg-zinc-800 text-emerald-400 shadow-sm border border-emerald-500/30'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'
              }`}
            >
              {t.pair}
            </button>
          ))}
        </div>
      </div>

      {/* Main Candlestick Canvas Container */}
      <div className="relative mt-4 w-full h-[280px] sm:h-[340px] bg-[#0c0d11] rounded-xl overflow-hidden border border-white/5">
        <canvas
          ref={canvasRef}
          width={800}
          height={340}
          className="w-full h-full block"
        />

        {/* Floating Metrics Badge in Canvas */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <div className="glass-pill px-2.5 py-1 rounded-md text-[11px] font-mono text-zinc-300">
            Outcome: <strong className="text-emerald-400 font-bold">{selectedTrade.result}</strong>
          </div>
          <div className="glass-pill px-2.5 py-1 rounded-md text-[11px] font-mono text-zinc-300">
            R:R Ratio: <strong className="text-emerald-400 font-bold">{selectedTrade.rr}</strong>
          </div>
        </div>

        {/* Live Pulse Dot */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 glass-pill px-2.5 py-1 rounded-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>INSTITUTIONAL EXECUTION</span>
        </div>
      </div>

      {/* Scrubber & Replay Bar */}
      <div className="mt-4 pt-3 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1">
            <RefreshCw className="w-3.5 h-3.5 text-emerald-400" />
            Execution Timeline:
          </span>
          <input
            type="range"
            min="10"
            max="100"
            value={activeStep}
            onChange={(e) => setActiveStep(Number(e.target.value))}
            className="w-full sm:w-48 h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
          <span className="text-xs font-mono text-emerald-400 font-semibold">{activeStep}%</span>
        </div>

        <div className="flex flex-wrap gap-1.5 w-full sm:w-auto justify-end">
          {selectedTrade.tags.map((tag, idx) => (
            <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/5">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Trade Logic Explanation Box */}
      <div className="mt-3.5 p-3.5 rounded-xl bg-black/30 border border-white/5 text-xs text-zinc-300 leading-relaxed font-sans">
        <strong className="text-emerald-400 font-mono block mb-1">Execution Architecture:</strong>
        {selectedTrade.rationale}
      </div>
    </div>
  );
}
