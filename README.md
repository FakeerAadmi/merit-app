# merit. — AI Tech Advisor for India

An unbiased, AI-powered product recommendation engine for the Indian market. Get honest, personalized advice for 22+ categories — from ACs and phones to gaming rigs and kitchen appliances.

**No dealer bias. No sponsored listings. Just honest recommendations.**

## ✨ Features

- 🤖 **AI-Powered Recommendations** — Powered by Google Gemini 2.5 Flash with structured JSON output
- 🏠 **22+ Product Categories** — ACs, fridges, phones, laptops, TVs, audio, smart home, and more
- 🎯 **Priority-Based Ranking** — Tell us what matters most (price, quality, energy efficiency) and get matched recommendations
- 🧪 **The Lab** — Deep-dive PC builder, gaming setup, and home theater advisors
- 🛡️ **Scam Protection** — Category-specific tips to avoid overpaying
- ⚡ **Electricity Calculator** — Estimate monthly running costs for any appliance
- 💰 **Deal Checker** — Paste a dealer's quote to verify if it's fair
- ❓ **Help Me Decide** — 4-question quiz for users who don't know what they need
- 🌐 **Bilingual** — Full English & Marathi (मराठी) support, including AI responses
- 📱 **Mobile-First** — Designed for Indian mobile users
- 🌙 **Dark Mode** — Full dark theme support

## 🚀 Quick Start

```bash
# Clone the repo
git clone https://github.com/FakeerAadmi/merit-app.git
cd merit-app

# Install dependencies
npm install

# Start dev server
npm run dev
```

## 🔑 Setup

1. Get a free Gemini API key from [aistudio.google.com](https://aistudio.google.com)
2. Open the app → Settings → Paste your API key
3. Set your city for location-aware recommendations
4. Start browsing!

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 8 |
| AI Backend | Google Gemini 2.5 Flash |
| Styling | Vanilla CSS with design tokens |
| Fonts | Outfit + Inter + JetBrains Mono |
| Deployment | GitHub Pages (auto-deploy on push) |

## 📁 Project Structure

```
src/
├── App.jsx              # Main application component
├── index.css            # Design system & styles
├── main.jsx             # React entry point
├── components/
│   └── Icons.jsx        # 30+ custom SVG icons
└── data/
    ├── constants.js     # Categories, priorities, budgets, cities
    ├── i18n.js          # English & Marathi translations
    └── terminology.js   # Technical term explainers per category
```

## 🌐 Deployment

Automatically deployed to GitHub Pages on every push to `main` via GitHub Actions.

**Live:** [fakeeraadmi.github.io/merit-app](https://fakeeraadmi.github.io/merit-app/)

## 📄 License

MIT
