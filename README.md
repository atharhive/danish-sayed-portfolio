# Danish Sayed — Trader Portfolio & Story

> Systematic day trader portfolio, interactive execution terminal, and authentic story for Danish Sayed (@syed.x21).

```bash
git clone https://github.com/atharhive/danish-sayed-portfolio && cd danish-sayed-portfolio && npm install && npm run dev
```

<p align="center">
  <a href="https://nominated-particle-tvs-estates.trycloudflare.com"><img src="https://img.shields.io/badge/live-deployment-0284c7?style=for-the-badge&logo=cloudflare&logoColor=white" alt="Live Demo"></a>
  <a href="https://www.instagram.com/syed.x21"><img src="https://img.shields.io/badge/instagram-@syed.x21-e1306c?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram"></a>
  <a href="https://github.com/atharhive/danish-sayed-portfolio/releases"><img src="https://img.shields.io/badge/release-v1.0.0-06b6d4?style=for-the-badge&logo=github&logoColor=white" alt="Release"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-2ed573?style=for-the-badge" alt="MIT License"></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Framework-React%2019-61dafb?style=flat-square&logo=react&logoColor=black" alt="React 19">
  <img src="https://img.shields.io/badge/Styling-Tailwind%20CSS%20v4-06b6d4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Bundler-Vite%206-646cff?style=flat-square&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Design-Fintech%20Obsidian-10b981?style=flat-square" alt="Design">
  <img src="https://img.shields.io/badge/SLA-24h%20Response-8b5cf6?style=flat-square" alt="SLA">
</p>

---

## ⚡ Overview

**Danish Sayed** (`@syed.x21`) is an independent intraday trader and market strategist with an engaged community of over 20,000 traders. This web portfolio is an authentic, institutional-grade showcase combining live market simulations, an interactive trade terminal, a deeply candid personal journey (inspired by Rishi Thakor's *"My Story"*), and a functional risk calculator.

## ✨ Core Highlights & Architecture

- 📈 **Live Institutional Ticker:** Real-time scrolling asset quotes (Gold XAU/USD, Nasdaq US100, Bitcoin, EUR/USD, DXY).
- 🖥️ **Interactive Candlestick Execution Terminal:** Custom Canvas-rendered multi-case study viewer (`XAU/USD`, `US100`, `EUR/USD`) with interactive timeline scrubbing, Take Profit (`TP`), Entry, and Stop Loss (`SL`) metrics.
- 📖 **"Let's Go Back In Time" (My Story):** Authentic, chronological 4-year progression from blowing accounts and emotional revenge trading to conquering psychology, achieving prop consistency, and operating systematically.
- 🧮 **Asymmetric Position Size Engine:** Interactive calculator calculating exact lot sizing, $ at risk, and target 1:3.2R payoffs based on account equity and stop loss pips.
- 🛡️ **The 6 Non-Negotiable Rules:** Interactive rulebook enforcing hard circuit breakers and risk-first discipline.
- 📱 **Mobile-First & Ultra-Lightweight:** 100% responsive on 390px mobile screens up to 4K ultra-wide displays. Zero bloated heavy charting libraries.

## 🚀 Quickstart

```bash
# 1. Clone repository
git clone https://github.com/atharhive/danish-sayed-portfolio.git
cd danish-sayed-portfolio

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Open `http://localhost:8090` in your browser.

## 🏗️ Production Build

```bash
npm run build
```
Production assets are generated in `dist/` ready for edge deployment.

## ⚖️ License
Distributed under the [MIT License](LICENSE).
