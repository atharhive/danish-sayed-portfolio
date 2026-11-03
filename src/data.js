export const TICKER_DATA = [
  { symbol: "XAU/USD", name: "Gold Spot", price: "2,741.80", change: "+0.92%", isUp: true },
  { symbol: "EUR/USD", name: "Euro / Dollar", price: "1.0834", change: "-0.15%", isUp: false },
  { symbol: "BTC/USD", name: "Bitcoin", price: "71,680.00", change: "+2.74%", isUp: true },
  { symbol: "US100", name: "Nasdaq Futures", price: "20,442.50", change: "+0.61%", isUp: true },
  { symbol: "GBP/USD", name: "British Pound", price: "1.2985", change: "+0.22%", isUp: true },
  { symbol: "DXY", name: "US Dollar Index", price: "103.95", change: "-0.24%", isUp: false },
  { symbol: "ETH/USD", name: "Ethereum", price: "2,640.20", change: "+1.88%", isUp: true }
];

export const TIMELINE_STORY = [
  {
    year: "2021",
    phase: "The Liquidation & The Wake-Up Call",
    headline: "Blowing accounts, chasing green candles & buying guru signals",
    tags: ["Overconfidence", "The Illusion", "First Blowup"],
    body: "Like everyone who enters the market, I started believing chart patterns were a cheat code to wealth. I loaded my charts with five indicators—RSI, MACD, Bollinger Bands, EMA ribbons—and bought callouts from signal groups. Within four months, my first account was wiped out. It was a humiliating punch to the gut, but it revealed the brutal truth: the market is not an ATM; it is a zero-sum transfer of wealth from the undisciplined to the patient."
  },
  {
    year: "2022",
    phase: "The Screen-Time Quarantine",
    headline: "14-hour days staring at naked candlesticks & auction dynamics",
    tags: ["Stripping Indicators", "Order Flow", "Chart Hours"],
    body: "I deleted every single indicator from TradingView. No oscillators, no moving averages, no noise. Just price, volume, and time. I spent 12 to 14 hours every day replaying thousands of historical bars, studying how market makers engineer liquidity before news releases, where retail stops pool, and how displacement occurs. I logged over 1,500 trade screenshots in Notion, categorizing every loss."
  },
  {
    year: "2023",
    phase: "The Psychological Crucible",
    headline: "Conquering revenge trading, FOMO & the dopamine loop",
    tags: ["Mental Edge", "Risk Discipline", "Systemization"],
    body: "My analysis was sharp, but my psychology was undisciplined. I would make 5R over three days, get overconfident, size up 3x, and give it all back in 45 minutes on a revenge trade. The breakthrough came when I treated trading strictly as risk engineering. I instituted a hard rule: maximum 1% risk per trade, maximum two losses per day. If I took two consecutive losses, I physically shut my laptop and left the desk. Consistency finally followed."
  },
  {
    year: "2024–2025",
    phase: "Consistency, Capital & Community",
    headline: "Scaling prop capital & documenting unfiltered execution",
    tags: ["Funded Accounts", "Transparency", "20K Community"],
    body: "I scaled through institutional prop firm evaluations and compounded personal capital with boring, robotic consistency. I started sharing raw intraday markups and mindset breakdowns on Instagram (@syed.x21). No rented supercars, no fake screenshots, no selling get-rich-quick fantasies—just honest execution, risk control, and daily routine. Over 20,000 disciplined traders resonated with the transparent journey."
  },
  {
    year: "2026 — Present",
    phase: "Systematic Longevity & Mentorship",
    headline: "Operating as an asymmetric capital allocator",
    tags: ["Asymmetric Risk", "Longevity", "The Horizon"],
    body: "Today, trading is about freedom and mathematical execution. I look for 1–2 high-probability liquidity sweeps a day, lock in asymmetric profits (targeting 1:3R minimum), and spend the rest of the day living life. The goal is never to beat the market every second—it is to survive indefinitely and exploit high-conviction probabilities."
  }
];

export const TRADE_CASE_STUDIES = [
  {
    id: "gold-sweep",
    pair: "XAU/USD",
    session: "London Open (08:15 UTC)",
    type: "Short Liquidity Sweep",
    result: "+4.2R ($8,400 on $2,000 risk)",
    rr: "1 : 4.2",
    entry: "2,748.50",
    stop: "2,752.20",
    target: "2,732.90",
    rationale: "Asian session high was deliberately breached during London pre-market to engineer retail breakout buying into an institutional Order Block. Once 15m displacement candle confirmed bearish Fair Value Gap (FVG), short limit triggered with stop pinned above liquidity wick.",
    tags: ["Institutional Order Block", "Liquidity Purge", "High R:R"]
  },
  {
    id: "nasdaq-fvg",
    pair: "US100 (NQ)",
    session: "New York Open (14:45 UTC)",
    type: "Long Mitigation Retest",
    result: "+3.1R ($6,200 on $2,000 risk)",
    rr: "1 : 3.1",
    entry: "20,380.00",
    stop: "20,345.00",
    target: "20,488.50",
    rationale: "Early morning sell-side liquidity was swept at the opening bell. Massive 1m bullish displacement created an unfilled 5m imbalance. Entry executed on the 50% discount equilibrium retest with a strict 35-point stop.",
    tags: ["NY Open Reversal", "Discount Equilibrium", "Volume Surge"]
  },
  {
    id: "eurusd-range",
    pair: "EUR/USD",
    session: "London / NY Overlap",
    type: "Long Asian Low Sweep",
    result: "+2.8R ($5,600 on $2,000 risk)",
    rr: "1 : 2.8",
    entry: "1.0818",
    stop: "1.0807",
    target: "1.0849",
    rationale: "Clean sweep of equal lows (EQH/EQL) during London lunch doldrums followed by bullish Market Structure Shift (MSS) with institutional volume confirmation.",
    tags: ["Market Structure Shift", "Equal Lows", "Patience"]
  }
];

export const NON_NEGOTIABLE_RULES = [
  {
    number: "01",
    title: "1% Maximum Risk Per Idea",
    desc: "Capital preservation is the only law. Never risk more than 1% of total portfolio equity on any single trade idea, regardless of how confident you feel."
  },
  {
    number: "02",
    title: "The 2-Loss Daily Circuit Breaker",
    desc: "Two consecutive stop-outs in a single day trigger an immediate terminal shutdown. The market will always be here tomorrow; emotional tilt will not."
  },
  {
    number: "03",
    title: "Pre-Set Stop Loss in Stone",
    desc: "A trade setup without a predetermined, hard mathematical stop-loss order placed at execution is not a trade—it is a speculative bet. Never widen a stop."
  },
  {
    number: "04",
    title: "Minimum 1:2.5 Risk-to-Reward Filter",
    desc: "If the distance to the logical market liquidity pool does not offer at least 2.5x the initial capital risked, pass immediately. Patience is an edge."
  },
  {
    number: "05",
    title: "Red-Folder News Blackout",
    desc: "Zero trade execution within 15 minutes before or after high-impact US macro prints (CPI, NFP, FOMC). Let the spread widen and volatility settle first."
  },
  {
    number: "06",
    title: "Mandatory Daily Screenshot Journal",
    desc: "Every closed trade must have before-and-after chart markups archived with written psychological notes before leaving the desk."
  }
];
