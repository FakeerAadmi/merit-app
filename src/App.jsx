import React, { useState, useEffect, useRef } from 'react';
import { T } from './data/i18n';
import { TERMO } from './data/terminology';
import { CATS, PRIS, BUD, CITIES, PCP, getCatConf } from './data/constants';
import { Ic } from './components/Icons';
import './index.css';

/* ─── Markdown renderer ────────────────────────── */
const renderMD = (md) => {
  if (!md) return null;
  return md.split('\n').map((line, i) => {
    const t = line.trim();
    if (!t) return <div key={i} style={{ height: 8 }} />;
    if (t.startsWith('### ')) return (
      <h3 key={i} style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', margin: '20px 0 8px', paddingBottom: 6, borderBottom: '1px solid var(--border)' }}>
        {t.slice(4).replace(/\*\*/g, '')}
      </h3>
    );
    if (t.startsWith('## ')) return (
      <h2 key={i} style={{ fontSize: 20, fontWeight: 800, color: 'var(--accent)', margin: '28px 0 10px' }}>
        {t.slice(3).replace(/\*\*/g, '')}
      </h2>
    );
    if (t.startsWith('# ')) return (
      <h1 key={i} style={{ fontSize: 24, fontWeight: 800, margin: '20px 0 10px' }}>
        {t.slice(2).replace(/\*\*/g, '')}
      </h1>
    );
    if (t.startsWith('- ') || t.startsWith('* ')) {
      const c = t.replace(/^[-*]\s*/, '');
      const p = c.split(/\*\*(.*?)\*\*/g);
      return (
        <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 6, paddingLeft: 4, fontSize: 14.5, lineHeight: 1.65, color: 'var(--sub)' }}>
          <span style={{ color: 'var(--accent)', marginTop: 2, flexShrink: 0 }}>◆</span>
          <span>{p.map((x, j) => j % 2 === 1 ? <strong key={j} style={{ color: 'var(--text)' }}>{x}</strong> : x)}</span>
        </div>
      );
    }
    if (t.startsWith('|')) return (
      <div key={i} style={{ fontFamily: "'JetBrains Mono'", fontSize: 12.5, color: 'var(--sub)', padding: '3px 0', borderBottom: t.includes('---') ? '2px solid var(--border)' : '1px solid var(--border)', whiteSpace: 'pre', overflowX: 'auto' }}>{t}</div>
    );
    const p = t.split(/\*\*(.*?)\*\*/g);
    return (
      <p key={i} style={{ fontSize: 14.5, lineHeight: 1.7, color: 'var(--sub)', margin: '3px 0' }}>
        {p.map((x, j) => j % 2 === 1 ? <strong key={j} style={{ color: 'var(--text)' }}>{x}</strong> : x)}
      </p>
    );
  });
};



/* ─── Main App ──────────────────────────────────── */
export default function App() {
  const [lang, setLang] = useState('en');
  const t = (k) => T[lang]?.[k] || T.en[k] || k;

  const [view, setView] = useState('home');
  const [city, setCity] = useState('');
  const [cityQ, setCityQ] = useState('');
  const [showCD, setShowCD] = useState(false);
  const [cat, setCat] = useState(null);
  const [sub, setSub] = useState('');
  const [pris, setPris] = useState([]);
  const [budget, setBudget] = useState('');
  const [hh, setHh] = useState('3-4');
  const [notes, setNotes] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [apiSaved, setApiSaved] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [catQ, setCatQ] = useState('');
  const [saved, setSaved] = useState([]);
  const [activeTile, setActiveTile] = useState(null);
  const [compSel, setCompSel] = useState([]);
  const [labMode, setLabMode] = useState('pc');
  const [pcP, setPcP] = useState({});
  const [pcB, setPcB] = useState('');
  const [pcU, setPcU] = useState('');
  const [labN, setLabN] = useState('');
  const [qS, setQS] = useState(0);
  const [qA, setQA] = useState([]);
  const [cW, setCW] = useState('');
  const [cH, setCH] = useState('');
  const [cR, setCR] = useState('8');
  const [dP, setDP] = useState('');
  const [dPr, setDPr] = useState('');
  const [showT, setShowT] = useState(false);
  const rR = useRef(null);

  useEffect(() => {
    const k = localStorage.getItem('m_key'); if (k) { setApiKey(k); setApiSaved(true); }
    const c = localStorage.getItem('m_city'); if (c) { setCity(c); setCityQ(c); }
    const l = localStorage.getItem('m_lang'); if (l) setLang(l);
    const s = localStorage.getItem('m_saved'); if (s) setSaved(JSON.parse(s));
  }, []);

  const saveK = () => { if (apiKey.trim()) { localStorage.setItem('m_key', apiKey.trim()); setApiSaved(true); } };
  const selC = (c) => { setCity(c); setCityQ(c); setShowCD(false); localStorage.setItem('m_city', c); };
  const setL = (l) => { setLang(l); localStorage.setItem('m_lang', l); };
  const togC = (r) => setCompSel(p => p.includes(r) ? p.filter(x => x !== r) : p.length < 4 ? [...p, r] : p);
  const togS = (r) => {
    setSaved(p => {
      const isS = p.find(x => x.name === r.name);
      const n = isS ? p.filter(x => x.name !== r.name) : [...p, r];
      localStorage.setItem('m_saved', JSON.stringify(n));
      return n;
    });
  };
  const togP = (id) => setPris(p => p.includes(id) ? p.filter(x => x !== id) : p.length < 5 ? [...p, id] : p);

  const co = CATS.find(c => c.id === cat);
  const conf = co ? getCatConf(cat, sub) : {};
  const bds = conf.bud || [];
  const showHH = conf.hasHH;

  const fCi = CITIES.filter(c => c.toLowerCase().includes(cityQ.toLowerCase())).slice(0, 6);
  const fCa = CATS.filter(c =>
    (T[lang]?.[c.tk] || '').toLowerCase().includes(catQ.toLowerCase()) ||
    c.sub.some(s => s.toLowerCase().includes(catQ.toLowerCase()))
  );
  const langI = lang === 'mr'
    ? '\n\nIMPORTANT: Respond ENTIRELY in Marathi (मराठी). Use Devanagari script. Keep product names, brand names, model numbers in English. All explanations in Marathi. Use simple Marathi a 60-year-old parent can understand.'
    : '';

  /* ─── AI call ──────────────────────────────── */
  const callAI = async (prompt) => {
    if (!apiKey) { setError(lang === 'mr' ? 'कृपया सेटिंग्जमध्ये Gemini API की सेट करा.' : 'Set your Gemini API key in settings.'); return; }
    setLoading(true); setError(''); setResult('');
    try {
      const isJson = prompt.includes('valid JSON');
      const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt + langI }] }],
          generationConfig: { temperature: 0.7, maxOutputTokens: 6000, ...(isJson && { responseMimeType: 'application/json' }) }
        })
      });
      if (!r.ok) { const e = await r.json().catch(() => ({})); throw new Error(e?.error?.message || `Error ${r.status}`); }
      const d = await r.json();
      const tx = d?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!tx) throw new Error('Empty response');
      setResult(tx);
    } catch (e) { setError(e.message); } finally { setLoading(false); }
  };

  /* ─── Get recommendations ──────────────────── */
  const getRec = () => {
    const pl = pris.map((p, i) => `${i + 1}. ${t(PRIS.find(o => o.id === p)?.l)}`).join(', ');
    const pr = `You are merit. — India's most trusted, unbiased home tech advisor.

Request: Best ${sub || ''} ${t(co?.tk)} recommendation
City: ${city || 'India'} ${showHH ? `| Household: ${hh} members` : ''}
Budget: ${budget || 'Flexible'} | Priorities: ${pl || 'None'} | Notes: ${notes || 'None'}

Provide exactly 6 unbiased product recommendations (2 exact match, 2 best all-rounders, 2 alternatives/wildcards).
Respond ONLY with valid JSON — no markdown, no code fences:
{
  "recs": [
    {
      "name": "Brand Model Number",
      "price": "45000",
      "badge": "🏆 Best Value",
      "summary": "2-sentence overview of why this product stands out in 2025 India market",
      "specs": ["Spec 1: value", "Spec 2: value", "Spec 3: value", "Spec 4: value", "Spec 5: value"],
      "pros": ["Clear strength 1", "Clear strength 2", "Clear strength 3"],
      "cons": ["Real limitation 1", "Real limitation 2"],
      "target": "Best suited for households/users who...",
      "buy": "Amazon / Flipkart / Brand Store",
      "brand_domain": "samsung.com"
    }
  ],
  "advice": ["Practical buying tip 1", "Practical buying tip 2", "Practical buying tip 3"],
  "comparison": "2-3 sentence expert verdict comparing the top options.",
  "insider": "One insider fact dealers won't proactively tell you about this product category."
}`;
    callAI(pr).then(() => { setView('result'); setTimeout(() => rR.current?.scrollIntoView({ behavior: 'smooth' }), 100); });
  };

  const getLabR = () => {
    const ps = Object.entries(pcP).filter(([, v]) => v).map(([k, v]) => `${PCP.find(p => p.id === k)?.n}: ${v}`).join('\n');
    const pr = labMode === 'pc'
      ? `PC Build advisor. Budget: ${pcB || 'Flexible'}, Use: ${pcU || 'General'}\nParts:\n${ps || 'None'}\nNotes: ${labN || 'None'}\n\nProvide: Build Analysis, Recommended Build (₹ prices), Compatibility Check, Performance Estimates, Upgrade Path, Where to Buy, Pro Tips`
      : labMode === 'setup'
        ? `Gaming setup advisor. Budget: ${pcB || 'Flexible'}, Use: ${pcU || 'General'}\nNotes: ${labN || 'None'}\n\nRecommend complete setup with ₹ prices.`
        : `Home theater advisor. Budget: ${pcB || 'Flexible'}, Room: ${labN || 'Not specified'}\n\nRecommend TV/audio/streaming with ₹ prices.`;
    callAI(`You are merit. Lab — advanced advisor. Do DEEP research.\n\n${pr}`).then(() => { setView('labResult'); setTimeout(() => rR.current?.scrollIntoView({ behavior: 'smooth' }), 100); });
  };

  const runQ = () => { callAI(`You are merit. Quiz results:\n1. Problem: ${qA[0] || '?'}\n2. For: ${qA[1] || '?'}\n3. Priority: ${qA[2] || '?'}\n4. Budget: ${qA[3] || '?'}\nCity: ${city || '?'}\n\nRespond:\n## You Need: [Category]\n## Top 3 Picks (model, ₹, why, con)\n## Why Not [Alternative]\n## Next Steps`).then(() => setView('quizResult')); };
  const chkD = () => { callAI(`Deal check: ${dP} at ₹${dPr}, City: ${city || '?'}\n\n## Verdict: [GREAT/FAIR/OVERPRICED/RED FLAG]\n## Price Analysis\n## Red Flags\n## Counter-Offer Script\n## Better Alternatives`).then(() => setView('dealResult')); };

  const mC = cW && cH ? ((parseFloat(cW) * parseFloat(cH) * 30) / 1000 * parseFloat(cR || 8)).toFixed(0) : null;
  const termos = TERMO[cat] || TERMO.default || [];

  /* ─── Nav active state (bug fix) ───────────── */
  const isLa = ['lab', 'labConfig', 'labResult'].includes(view);
  const isTo = ['tools', 'quiz', 'quizResult', 'calc', 'dealCheck', 'dealResult'].includes(view);

  const navActive = (v) => {
    if (v === 'home')   return view === 'home';
    if (v === 'browse') return ['browse', 'configure', 'result'].includes(view);
    if (v === 'lab')    return isLa;
    return false;
  };

  /* ─── Scam tips ────────────────────────────── */
  const scamEN = { ac: ['Check BEE star rating label physically.', 'Inverter ACs save 30-50% electricity.', 'Copper coils outlast aluminium.', "Don't pay extra for included installation.", '1-ton covers ~120 sq ft.'], fridge: ['300L+ overkill for 4 people.', 'Inverter compressors worth it — run 24/7.', 'Check usable, not gross capacity.'], phone: ['Sensor size > megapixels.', 'Check OS update years.', 'Processor > RAM amount.', 'Online 10-20% below MRP.'] };
  const scamMR = { ac: ['BEE स्टार रेटिंग प्रत्यक्ष तपासा.', 'इन्व्हर्टर AC ३०-५०% वीज वाचवतो.', 'कॉपर कॉइल ॲल्युमिनियमपेक्षा चांगले.', 'समाविष्ट इन्स्टॉलेशनसाठी अतिरिक्त पैसे नको.', '१-टन ~१२० चौ.फू. कव्हर करतो.'], fridge: ['४ जणांसाठी ३००L+ अनावश्यक.', 'इन्व्हर्टर कंप्रेसर योग्य — २४/७ चालतात.', 'वापरण्यायोग्य क्षमता तपासा.'], phone: ['सेन्सर आकार > मेगापिक्सेल.', 'OS अपडेट वर्षे तपासा.', 'प्रोसेसर > RAM.', 'ऑनलाइन MRP पेक्षा १०-२०% कमी.'] };
  const defEN = ['Compare on 3+ platforms.', 'Check brand site for MRP.', 'Brand warranties beat third-party.', 'Read reviews 2-3 months post-launch.', 'Ask for demo. Refusal = red flag.'];
  const defMR = ['३+ प्लॅटफॉर्मवर तुलना करा.', 'MRP साठी ब्रँड साइट तपासा.', 'ब्रँड वॉरंटी तृतीय-पक्षापेक्षा चांगली.', 'लॉन्चनंतर २-३ महिन्यांचे रिव्ह्यू वाचा.', 'डेमो मागा. नकार = धोक्याचे चिन्ह.'];
  const scam = (id) => lang === 'mr' ? (scamMR[id] || defMR) : (scamEN[id] || defEN);

  /* ─── Quiz questions ───────────────────────── */
  const quizQs = [
    { q: t('q1'), o: [t('q1a'), t('q1b'), t('q1c'), t('q1d'), t('q1e'), t('q1f')] },
    { q: t('q2'), o: [t('q2a'), t('q2b'), t('q2c'), t('q2d'), t('q2e')] },
    { q: t('q3'), o: [t('q3a'), t('q3b'), t('q3c'), t('q3d'), t('q3e'), t('q3f')] },
    { q: t('q4'), o: [t('q4a'), t('q4b'), t('q4c'), t('q4d')] }
  ];

  /* ─── Watt presets ─────────────────────────── */
  const wts = [[t('wCeil'), '75'], [t('wTv'), '80'], [t('wFr'), '150'], [t('wAc1'), '1000'], [t('wAc15'), '1500'], [t('wGey'), '2000'], [t('wWash'), '500'], [t('wMic'), '1200']];

  /* ─── Trending (reactive to lang) ────────────── */
  const TRENDING = [
    { cat:'ac',     icon:'ac',     tag:t('trend_ac_tag'), label:t('trend_ac_label'), desc:t('trend_ac_desc') },
    { cat:'phone',  icon:'phone',  tag:t('trend_ph_tag'), label:t('trend_ph_label'), desc:t('trend_ph_desc') },
    { cat:'laptop', icon:'laptop', tag:t('trend_la_tag'), label:t('trend_la_label'), desc:t('trend_la_desc') },
    { cat:'fridge', icon:'fridge', tag:t('trend_fr_tag'), label:t('trend_fr_label'), desc:t('trend_fr_desc') },
    { cat:'tv',     icon:'tv',     tag:t('trend_tv_tag'), label:t('trend_tv_label'), desc:t('trend_tv_desc') },
    { cat:'washer', icon:'washer', tag:t('trend_wa_tag'), label:t('trend_wa_label'), desc:t('trend_wa_desc') },
  ];

  /* ─── Parse JSON result ────────────────────── */
  let pR = null;
  let jsonError = null;
  try { 
    if (result) { 
      const start = result.indexOf('{');
      const end = result.lastIndexOf('}');
      if (start !== -1 && end !== -1 && end > start) {
        let jsonStr = result.slice(start, end + 1);
        try {
          pR = JSON.parse(jsonStr);
        } catch (err1) {
          try {
            // Fallback: aggressive sanitize (trailing commas & control chars)
            let sanitized = jsonStr.replace(/,\s*([\]}])/g, '$1');
            sanitized = sanitized.replace(/[\x00-\x1F\x7F-\x9F]/g, ' ');
            pR = JSON.parse(sanitized);
          } catch (err2) {
            jsonError = "JSON Error: " + err2.message;
            console.error("JSON parse failed", err2, "Raw string:", jsonStr);
          }
        }
      }
    } 
  } catch (e) { console.error(e); }

  /* ─── Sub-components ───────────────────────── */
  const CI = ({ compact }) => (
    <div style={{ position: 'relative' }}>
      <input value={cityQ}
        onChange={e => { setCityQ(e.target.value); setShowCD(true); }}
        onFocus={() => setShowCD(true)}
        placeholder={t('yourCity')}
        style={{ width: '100%', padding: compact ? '10px 14px' : '12px 16px', borderRadius: 12, border: '1.5px solid var(--border)', fontSize: 15, background: 'var(--bg)', fontFamily: 'inherit', boxShadow: 'var(--nm-in-sm)', color: 'var(--text)' }} />
      {showCD && cityQ && fCi.length > 0 && (
        <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'var(--bg)', borderRadius: 14, boxShadow: 'var(--nm-lg)', zIndex: 50, marginTop: 6, overflow: 'hidden' }}>
          {fCi.map(c => (
            <div key={c} onClick={() => selC(c)}
              style={{ padding: '11px 16px', cursor: 'pointer', fontSize: 14, borderBottom: '1px solid rgba(0,0,0,0.04)', transition: 'background .15s' }}
              onMouseEnter={e => e.target.style.background = 'var(--accentBg)'}
              onMouseLeave={e => e.target.style.background = 'transparent'}
            >{c}</div>
          ))}
        </div>
      )}
    </div>
  );

  const Ld = ({ msg }) => (
    <div className="card nm-flat" style={{ padding: 36, textAlign: 'center', marginTop: 20 }}>
      <div className="loader" style={{ display: 'flex', gap: 7, justifyContent: 'center', marginBottom: 14 }}><span /><span /><span /></div>
      <p style={{ color: 'var(--sub)', fontSize: 15, fontWeight: 600 }}>{msg}</p>
      <p style={{ color: 'var(--sub)', fontSize: 13, marginTop: 4, opacity: .55 }}>{t('takes')}</p>
    </div>
  );

  const EB = () => error ? (
    <div style={{ background: 'rgba(220,38,38,0.08)', borderRadius: 12, padding: '12px 18px', marginTop: 12, border: '1px solid rgba(220,38,38,0.2)', color: '#b91c1c', fontSize: 14, boxShadow: 'var(--nm-sm)' }}>
      {error}
    </div>
  ) : null;

  const ScamBox = ({ id }) => (
    <div style={{ borderRadius: 20, padding: '24px 28px', boxShadow: 'var(--nm-sm)', background: 'var(--bg)', marginTop: 24, borderLeft: '4px solid #34c759' }}>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 16 }}>
        <Ic name="shield" size={22} color="#34c759" />
        <span style={{ fontSize: 17, fontWeight: 800 }}>{t('scamT')}</span>
      </div>
      {scam(id).map((tip, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 8, fontSize: 14, lineHeight: 1.6, color: 'var(--sub)' }}>
          <Ic name="check" size={15} color="#34c759" />
          <span>{tip}</span>
        </div>
      ))}
    </div>
  );

  /* ═══════════════════════════════════════════════ */
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>

      {/* ─── NAV ─────────────────────────────── */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '13px 28px', borderBottom: '1px solid rgba(0,0,0,0.06)', background: 'rgba(236,230,220,0.82)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>

        {/* Logo */}
        <div onClick={() => { setView('home'); setCatQ(''); setError(''); }} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 34, height: 34, borderRadius: 10, background: 'linear-gradient(135deg, #d97706, #92400e)', display: 'grid', placeItems: 'center', boxShadow: '3px 3px 8px rgba(180,83,9,.3), -2px -2px 6px rgba(255,246,220,.8)' }}>
            <span style={{ color: '#fff', fontSize: 17, fontWeight: 800, letterSpacing: -0.5 }}>m</span>
          </div>
          <span style={{ fontSize: 22, fontWeight: 800, color: 'var(--text)', letterSpacing: -0.8 }}>merit.</span>
        </div>

        {/* Nav tabs */}
        <div style={{ display: 'flex', gap: 3, background: 'var(--bg)', borderRadius: 12, padding: 4, boxShadow: 'var(--nm-in-sm)' }}>
          {[['home', t('hmdT')], ['browse', t('allCats')], ['lab', t('lab')]].map(([v, l]) => (
            <button key={v} onClick={() => { setView(v); setError(''); }}
              style={{ padding: '7px 16px', borderRadius: 9, border: 'none', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', background: navActive(v) ? 'var(--bg)' : 'transparent', color: navActive(v) ? 'var(--accent)' : 'var(--sub)', boxShadow: navActive(v) ? 'var(--nm-sm)' : 'none', transition: 'all .2s' }}>
              {l}
            </button>
          ))}
        </div>

        {/* Right controls */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <button onClick={() => setView('saved')} style={{ padding: '6px 12px', borderRadius: 10, border: 'none', background: 'var(--bg)', cursor: 'pointer', fontSize: 13, fontWeight: 700, fontFamily: 'inherit', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: 5, boxShadow: 'var(--nm-sm)' }}>
            <Ic name="heart" size={14} color={saved.length > 0 ? 'var(--accent)' : 'var(--sub)'} /> {saved.length}
          </button>
          <button onClick={() => setL(lang === 'en' ? 'mr' : 'en')} style={{ padding: '6px 12px', borderRadius: 10, border: 'none', background: lang === 'mr' ? 'var(--accentBg)' : 'var(--bg)', cursor: 'pointer', fontSize: 13, fontWeight: 700, fontFamily: 'inherit', color: lang === 'mr' ? 'var(--accent)' : 'var(--sub)', display: 'flex', alignItems: 'center', gap: 4, boxShadow: 'var(--nm-sm)' }}>
            <Ic name="lang" size={13} />{lang === 'mr' ? 'मरा' : 'EN'}
          </button>
          <button onClick={() => setView('settings')} style={{ padding: '6px 12px', borderRadius: 10, border: 'none', background: 'var(--bg)', cursor: 'pointer', fontSize: 13, fontWeight: 600, fontFamily: 'inherit', color: 'var(--sub)', boxShadow: 'var(--nm-sm)' }}>
            {city || t('cityLabel')}
          </button>
          <button onClick={() => setView('settings')} style={{ width: 34, height: 34, borderRadius: 10, border: 'none', background: 'var(--bg)', cursor: 'pointer', display: 'grid', placeItems: 'center', color: 'var(--sub)', boxShadow: 'var(--nm-sm)' }}>
            <Ic name="settings" size={16} />
          </button>
        </div>
      </nav>

      {/* ─── PAGE CONTENT ────────────────────── */}
      <div style={{ maxWidth: 940, margin: '0 auto', padding: '0 24px 80px' }}>

        {/* ══ SAVED ══════════════════════════════ */}
        {view === 'saved' && (
          <div className="fade-up" style={{ paddingTop: 40 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Ic name="heart" size={24} color="var(--accent)" />
                <h2 style={{ fontSize: 28, fontWeight: 800 }}>Saved Items</h2>
              </div>
              {compSel.length > 1 && <button className="btn btn-p" onClick={() => setView('compare')} style={{ padding: '8px 16px', fontSize: 13 }}>Compare {compSel.length} Items</button>}
            </div>
            {saved.length === 0
              ? <div className="card" style={{ padding: 48, textAlign: 'center' }}>
                  <Ic name="heart" size={36} color="var(--sub)" />
                  <h3 style={{ fontSize: 17, fontWeight: 700, margin: '16px 0 8px' }}>No saved items yet</h3>
                  <p style={{ fontSize: 14, color: 'var(--sub)' }}>Click the ♥ on any product to save it here for comparison.</p>
                </div>
              : <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 16 }}>
                  {saved.map((r, i) => (
                    <div key={i} className="card" onClick={() => togC(r)} style={{ padding: 22, display: 'flex', flexDirection: 'column', position: 'relative', cursor: 'pointer', outline: compSel.includes(r) ? '2.5px solid var(--accent)' : 'none', outlineOffset: 2 }}>
                      <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--accent)', marginBottom: 8 }}>{r.badge}</div>
                      <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4, paddingRight: 28 }}>{r.name}</div>
                      <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 12 }}>₹{parseInt(r.price.toString().replace(/\D/g, '') || '0').toLocaleString()}</div>
                      <div style={{ background: 'var(--accentBg)', padding: '10px 14px', borderRadius: 10, fontSize: 12, marginBottom: 12 }}>
                        {(Array.isArray(r.specs) ? r.specs : Object.entries(r.specs || {}).map(([k, v]) => `${k}: ${v}`)).slice(0, 3).map((s, j) => <div key={j} style={{ color: 'var(--sub)', marginBottom: 4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>◆ {s}</div>)}
                      </div>
                      <button onClick={e => { e.stopPropagation(); togS(r); }} style={{ position: 'absolute', top: 16, right: 16, background: 'transparent', border: 'none', cursor: 'pointer', padding: 4 }}>
                        <Ic name="heart" size={18} color="var(--accent)" />
                      </button>
                    </div>
                  ))}
                </div>}
          </div>
        )}

        {/* ══ COMPARE ════════════════════════════ */}
        {view === 'compare' && (
          <div className="fade-up" style={{ paddingTop: 40 }}>
            <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
              <button className="btn btn-s" onClick={() => setView('saved')} style={{ fontSize: 13, padding: '8px 16px' }}><Ic name="back" size={14} /> Back to Saved</button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
              <Ic name="compare" size={24} color="var(--accent)" />
              <h2 style={{ fontSize: 28, fontWeight: 800 }}>Compare Products</h2>
            </div>
            {compSel.length < 2
              ? <div className="card" style={{ padding: 48, textAlign: 'center' }}>
                  <p style={{ fontSize: 14, color: 'var(--sub)' }}>Go to Saved and select at least 2 products.</p>
                  <button className="btn btn-p" onClick={() => setView('saved')} style={{ marginTop: 20 }}>Go to Saved</button>
                </div>
              : <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', minWidth: 600, borderCollapse: 'collapse', background: 'var(--bg)', borderRadius: 18, overflow: 'hidden', boxShadow: 'var(--nm-md)' }}>
                    <thead>
                      <tr>
                        <th style={{ padding: '16px', borderBottom: '2px solid var(--border)', background: 'var(--accentBg)', textAlign: 'left', width: 120, fontSize: 13, color: 'var(--accent)', fontWeight: 800 }}>Feature</th>
                        {compSel.map((r, i) => <th key={i} style={{ padding: '16px', borderBottom: '2px solid var(--border)', background: 'var(--accentBg)', textAlign: 'left', minWidth: 200, fontSize: 13, color: 'var(--text)', fontWeight: 800 }}>{r.name}</th>)}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Price', r => `₹${parseInt(r.price.toString().replace(/\D/g,'') || '0').toLocaleString()}`],
                        ['Badge', r => r.badge],
                        ['Specs', r => (Array.isArray(r.specs)?r.specs:Object.entries(r.specs||{}).map(([k,v])=>`${k}: ${v}`)).map((s,j)=><div key={j}>◆ {s}</div>)],
                        ['Summary', r => r.summary || r.why],
                        ['Pros', r => (r.pros||[]).map((p,j)=><div key={j} style={{color:'#34c759'}}>✓ {p}</div>)],
                        ['Cons', r => (Array.isArray(r.cons)?r.cons:[r.cons]).map((c,j)=><div key={j} style={{color:'#dc2626'}}>✗ {c}</div>)],
                      ].map(([label, fn]) => (
                        <tr key={label}>
                          <td style={{ padding: '14px 16px', borderBottom: '1px solid rgba(0,0,0,0.04)', fontWeight: 700, color: 'var(--sub)', fontSize: 12, textTransform: 'uppercase', letterSpacing: 0.5 }}>{label}</td>
                          {compSel.map((r, i) => <td key={i} style={{ padding: '14px 16px', borderBottom: '1px solid rgba(0,0,0,0.04)', fontSize: 14, lineHeight: 1.6 }}>{fn(r)}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>}
          </div>
        )}

        {/* ══ SETTINGS ════════════════════════════ */}
        {view === 'settings' && (
          <div className="fade-up" style={{ paddingTop: 40 }}>
            <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 24 }}>{t('settings')}</h2>
            <div className="card nm-flat" style={{ padding: 26, marginBottom: 16 }}>
              <label style={{ fontWeight: 800, fontSize: 15, display: 'block', marginBottom: 4 }}>{t('gemKey')}</label>
              <p style={{ fontSize: 13, color: 'var(--sub)', marginBottom: 12 }}>{t('gemKeyD')}</p>
              <div style={{ display: 'flex', gap: 8 }}>
                <input type="password" value={apiKey} onChange={e => { setApiKey(e.target.value); setApiSaved(false); }} placeholder="AIza..."
                  style={{ flex: 1, padding: '11px 14px', borderRadius: 12, border: '1.5px solid var(--border)', fontSize: 14, fontFamily: "'JetBrains Mono'", background: 'var(--bg)', color: 'var(--text)', boxShadow: 'var(--nm-in-sm)' }} />
                <button className="btn btn-p" onClick={saveK} style={{ padding: '11px 22px' }}>{apiSaved ? t('saved') : t('save')}</button>
              </div>
            </div>
            <div className="card nm-flat" style={{ padding: 26, marginBottom: 16 }}>
              <label style={{ fontWeight: 800, fontSize: 15, display: 'block', marginBottom: 4 }}>{t('cityLabel')}</label>
              <p style={{ fontSize: 13, color: 'var(--sub)', marginBottom: 12 }}>{t('cityD')}</p>
              <CI />
            </div>
            <div className="card nm-flat" style={{ padding: 26, marginBottom: 24 }}>
              <label style={{ fontWeight: 800, fontSize: 15, display: 'block', marginBottom: 4 }}>{t('language')}</label>
              <p style={{ fontSize: 13, color: 'var(--sub)', marginBottom: 12 }}>{t('langD')}</p>
              <div style={{ display: 'flex', gap: 8 }}>
                {[['en', 'English'], ['mr', 'मराठी']].map(([k, l]) => (
                  <button key={k} className={`pill ${lang === k ? 'active' : ''}`} onClick={() => setL(k)} style={{ padding: '10px 22px', fontSize: 15 }}>{l}</button>
                ))}
              </div>
            </div>
            <button className="btn btn-s" onClick={() => setView('home')}><Ic name="back" size={16} /> {t('back')}</button>
          </div>
        )}

        {/* ══ HOME ════════════════════════════════ */}
        {view === 'home' && (
          <div className="fade-up">

            {/* Hero */}
            <div style={{ position: 'relative', borderRadius: 28, overflow: 'hidden', margin: '32px 0 40px', padding: '80px 48px 88px', boxShadow: 'var(--nm-lg)', background: 'var(--bg)' }}>
              <div className="hero-blob blob-a" />
              <div className="hero-blob blob-b" />
              <div className="hero-blob blob-c" />

              <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                {/* Badge */}
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 18px', borderRadius: 100, background: 'var(--accentBg)', boxShadow: 'var(--nm-sm)', marginBottom: 28 }}>
                  <span style={{ color: 'var(--accent)', fontSize: 12 }}>✦</span>
                  <span style={{ fontSize: 11, fontWeight: 800, color: 'var(--accent)', letterSpacing: 2, textTransform: 'uppercase' }}>{t('heroTag')}</span>
                </div>

                {/* Headline */}
                <h1 className="hero-t" style={{ fontSize: 52, fontWeight: 800, lineHeight: 1.05, marginBottom: 22, letterSpacing: -1.5, color: 'var(--text)' }}>
                  {t('heroT1')}<br />
                  <span style={{ color: 'var(--accent)' }}>{t('heroT2')}<em style={{ fontStyle: 'italic' }}>{t('heroT2em')}</em></span>{t('heroT2dot')}
                </h1>

                {/* Subtext */}
                <p style={{ fontSize: 17, color: 'var(--sub)', maxWidth: 460, margin: '0 auto 40px', lineHeight: 1.65 }}>{t('heroSub')}</p>

                {/* CTAs */}
                <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button className="btn btn-p" onClick={() => { setView('quiz'); setQS(0); setQA([]); }} style={{ fontSize: 16, padding: '16px 38px', borderRadius: 100 }}>
                    {t('helpDecide')} →
                  </button>
                  <button className="btn btn-s" onClick={() => setView('browse')} style={{ fontSize: 15, padding: '16px 28px', borderRadius: 100 }}>
                    {t('browseAllCta')}
                  </button>
                </div>
              </div>
            </div>

            {/* API key banner */}
            {!apiSaved && (
              <div className="card nm-flat" style={{ padding: '18px 24px', marginBottom: 36, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', borderLeft: '4px solid var(--accent)' }}>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <div style={{ fontWeight: 800, fontSize: 14 }}>{t('oneTime')}</div>
                  <div style={{ fontSize: 13, color: 'var(--sub)' }}>{t('oneTimeD')}</div>
                </div>
                <button className="btn btn-p" onClick={() => setView('settings')} style={{ padding: '9px 20px', fontSize: 13 }}>{t('setUp')}</button>
              </div>
            )}

            {/* Trending section */}
            <div style={{ marginBottom: 44 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <span style={{ fontSize: 24 }}>🔥</span>
                <h2 style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.5 }}>{t('trendTitle')}</h2>
              </div>
              <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14 }}>
                {TRENDING.map((item, i) => (
                  <div key={item.cat} className="card"
                    onClick={() => { setCat(item.cat); setView('configure'); setSub(''); setPris([]); setBudget(''); setNotes(''); setResult(''); setError(''); setShowT(false); }}
                    style={{ padding: '22px 20px', cursor: 'pointer', animation: `fadeUp .5s ease ${i * 0.06}s both`, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                      <div style={{ color: 'var(--accent)' }}><Ic name={item.icon} size={26} /></div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--accent)', background: 'var(--accentBg)', padding: '3px 10px', borderRadius: 100 }}>{item.tag}</div>
                    </div>
                    <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 6 }}>{item.label}</div>
                    <div style={{ fontSize: 13, color: 'var(--sub)', lineHeight: 1.5 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick tools strip */}
            <div style={{ marginBottom: 44 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.5, marginBottom: 16 }}>{t('quickTools')}</h2>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                {[
                  { i: 'quiz', l: t('helpDecide'), a: () => { setView('quiz'); setQS(0); setQA([]); } },
                  { i: 'calc', l: t('elecCost'),   a: () => setView('calc') },
                  { i: 'deal', l: t('goodDeal'),   a: () => { setView('dealCheck'); setDP(''); setDPr(''); } },
                ].map(a => (
                  <button key={a.l} onClick={a.a} className="card nm-flat"
                    style={{ padding: '13px 20px', display: 'flex', alignItems: 'center', gap: 9, cursor: 'pointer', flexShrink: 0, fontSize: 14, fontWeight: 700, fontFamily: 'inherit', color: 'var(--text)', border: 'none', borderRadius: 14 }}>
                    <Ic name={a.i} size={18} color="var(--accent)" />{a.l}
                  </button>
                ))}
              </div>
            </div>

            {/* Trust badges */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 32, paddingTop: 16, flexWrap: 'wrap' }}>
              {[['shield', t('noBias')], ['zap', t('aiPow')], ['check', t('indSpec')], ['book', '18 Categories']].map(([ic, l]) => (
                <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, color: 'var(--sub)', fontWeight: 600 }}>
                  <Ic name={ic} size={14} color="var(--accent)" />{l}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ══ BROWSE ══════════════════════════════ */}
        {view === 'browse' && (
          <div className="fade-up" style={{ paddingTop: 32 }}>
            <div style={{ position: 'relative', marginBottom: 32 }}>
              <div style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: 'var(--sub)' }}><Ic name="search" size={18} /></div>
              <input value={catQ} onChange={e => setCatQ(e.target.value)} placeholder={t('searchPH')}
                style={{ width: '100%', padding: '15px 15px 15px 46px', borderRadius: 16, border: '1.5px solid rgba(0,0,0,0.06)', fontSize: 16, background: 'var(--bg)', boxShadow: 'var(--nm-in)', color: 'var(--text)' }} />
            </div>
            <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14 }}>
              {fCa.map((c, i) => (
                <div key={c.id} className="card"
                  onClick={() => { setCat(c.id); setView('configure'); setSub(''); setPris([]); setBudget(''); setNotes(''); setResult(''); setError(''); setShowT(false); }}
                  style={{ padding: '24px 20px', cursor: 'pointer', animation: `fadeUp .45s ease ${i * 0.02}s both`, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ color: 'var(--accent)', marginBottom: 12 }}><Ic name={c.icon} size={28} /></div>
                  <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 6 }}>{t(c.tk)}</div>
                  <div style={{ fontSize: 12.5, color: 'var(--sub)', lineHeight: 1.5 }}>{c.sub.slice(0, 3).join(' · ')}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 32, padding: '52px 0 0', flexWrap: 'wrap' }}>
              {[['shield', t('noBias')], ['zap', t('aiPow')], ['check', t('indSpec')]].map(([ic, l]) => (
                <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--sub)', fontWeight: 600 }}>
                  <Ic name={ic} size={14} color="var(--accent)" />{l}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ══ CONFIGURE ════════════════════════════ */}
        {view === 'configure' && co && (
          <div className="fade-up" style={{ paddingTop: 28 }}>
            <button className="btn btn-s" onClick={() => { setView('browse'); setCatQ(''); }} style={{ marginBottom: 22, padding: '8px 16px', fontSize: 13 }}>
              <Ic name="back" size={14} /> {t('allCats')}
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 30 }}>
              <div style={{ width: 52, height: 52, borderRadius: 16, background: 'var(--accentBg)', display: 'grid', placeItems: 'center', color: 'var(--accent)', boxShadow: 'var(--nm-sm)' }}>
                <Ic name={co.icon} size={28} />
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--accent)', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 4 }}>{t('step')} 2 {t('of')} 3</div>
                <h2 style={{ fontSize: 26, fontWeight: 800 }}>{t(co.tk)}</h2>
                <p style={{ fontSize: 14, color: 'var(--sub)' }}>{t('configPrefs')}</p>
              </div>
            </div>

            {/* Type */}
            <div className="card nm-flat" style={{ padding: 24, marginBottom: 14 }}>
              <label style={{ fontWeight: 800, fontSize: 14, marginBottom: 4, display: 'block' }}>{t('typeL')}</label>
              <p style={{ fontSize: 12.5, color: 'var(--sub)', marginBottom: 12 }}>{t('typeD')}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {co.sub.map(s => <button key={s} className={`pill ${sub === s ? 'active' : ''}`} onClick={() => setSub(sub === s ? '' : s)}>{s}</button>)}
              </div>
            </div>

            {/* Priorities */}
            <div className="card nm-flat" style={{ padding: 24, marginBottom: 14 }}>
              <label style={{ fontWeight: 800, fontSize: 14, marginBottom: 4, display: 'block' }}>{t('whatMat')} <span style={{ color: 'var(--accent)' }}>*</span></label>
              <p style={{ fontSize: 12.5, color: 'var(--sub)', marginBottom: 12 }}>{t('priD')}</p>
              <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                {PRIS.map(o => {
                  if (!conf.pris?.includes(o.id)) return null;
                  const idx = pris.indexOf(o.id);
                  return (
                    <div key={o.id} className={`pill ${idx !== -1 ? 'active' : ''}`}
                      onClick={() => togP(o.id)}
                      style={{ padding: '11px 14px', display: 'flex', alignItems: 'center', gap: 10, borderRadius: 12 }}>
                      {idx !== -1 && <span style={{ width: 22, height: 22, borderRadius: 7, background: 'var(--accent)', color: '#fff', fontSize: 12, fontWeight: 800, display: 'grid', placeItems: 'center', flexShrink: 0 }}>{idx + 1}</span>}
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 14 }}>{t(o.l)}</div>
                        <div style={{ fontSize: 12, color: 'var(--sub)' }}>{t(o.d)}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Budget */}
            <div className="card nm-flat" style={{ padding: 24, marginBottom: 14 }}>
              <label style={{ fontWeight: 800, fontSize: 14, marginBottom: 12, display: 'block' }}>{t('budgetL')}</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {bds.map(b => <button key={b} className={`pill ${budget === b ? 'active' : ''}`} onClick={() => setBudget(budget === b ? '' : b)}>{b}</button>)}
              </div>
            </div>

            {/* Household */}
            {showHH && (
              <div className="card nm-flat" style={{ padding: 24, marginBottom: 14 }}>
                <label style={{ fontWeight: 800, fontSize: 14, marginBottom: 12, display: 'block' }}>{t('householdL')}</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {['1-2', '3-4', '5-6', '7+'].map(s => <button key={s} className={`pill ${hh === s ? 'active' : ''}`} onClick={() => setHh(s)}>{s} {t('members')}</button>)}
                </div>
              </div>
            )}

            {/* Notes */}
            <div className="card nm-flat" style={{ padding: 24, marginBottom: 22 }}>
              <label style={{ fontWeight: 800, fontSize: 14, marginBottom: 4, display: 'block' }}>{t('anyElse')}</label>
              <p style={{ fontSize: 12.5, color: 'var(--sub)', marginBottom: 10 }}>{t('anyElseD')}</p>
              <textarea value={notes} onChange={e => setNotes(e.target.value)} rows={2} placeholder={t('optDet')}
                style={{ width: '100%', padding: '11px 14px', borderRadius: 12, border: '1.5px solid var(--border)', fontSize: 14, resize: 'vertical', background: 'var(--bg)', fontFamily: 'inherit', boxShadow: 'var(--nm-in-sm)', color: 'var(--text)' }} />
            </div>

            <EB />
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <button className="btn btn-p" disabled={pris.length === 0 || loading} onClick={getRec}>
                {loading ? t('analyzing') : t('getRec')}
              </button>
              {pris.length === 0 && <span style={{ fontSize: 13, color: 'var(--sub)' }}>{t('selPri')}</span>}
            </div>
            {loading && <Ld msg={`${t('finding')} ${city || 'you'}...`} />}
            <ScamBox id={cat} />
          </div>
        )}

        {/* ══ RESULT ══════════════════════════════ */}
        {view === 'result' && (
          <div ref={rR} className="fade-up" style={{ paddingTop: 28 }}>
            <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
              <button className="btn btn-s" onClick={() => setView('configure')} style={{ fontSize: 13, padding: '8px 16px' }}><Ic name="back" size={14} /> {t('adjust')}</button>
              <button className="btn btn-s" onClick={() => { setView('home'); setCatQ(''); }} style={{ fontSize: 13, padding: '8px 16px' }}>{t('newSearch')}</button>
            </div>

            <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--accent)', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 12 }}>{t('step')} 3 {t('of')} 3</div>
            <div className="card nm-flat" style={{ padding: '14px 20px', marginBottom: 22, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
              <Ic name={co?.icon} size={22} color="var(--accent)" />
              <div style={{ flex: 1 }}>
                <span style={{ fontWeight: 800, fontSize: 15 }}>{t(co?.tk)}</span>
                {sub && <span style={{ color: 'var(--sub)', fontSize: 14 }}> · {sub}</span>}
                <div style={{ fontSize: 12, color: 'var(--sub)', marginTop: 2 }}>{city && `${city} · `}{budget && `${budget} · `}{hh} {t('members')}</div>
              </div>
            </div>

            {/* ── Product tile modal ─────────────────────────────────── */}
            {activeTile && (
              <div
                onClick={() => setActiveTile(null)}
                style={{
                  position: 'fixed', inset: 0, zIndex: 999,
                  /* Dark warm overlay — eliminates ghost card shadows completely */
                  background: 'rgba(12, 7, 2, 0.72)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: 20,
                }}
              >
                <div
                  className="card"
                  onClick={e => e.stopPropagation()}
                  style={{
                    width: '100%', maxWidth: 700,
                    overflow: 'hidden', /* NO scroll — all content fits */
                    animation: 'fadeUp .25s cubic-bezier(.22,1,.36,1)',
                    position: 'relative',
                    display: 'flex', flexDirection: 'column',
                  }}
                >
                  {/* ── Header row ───────────────────────────────────── */}
                  <div style={{ padding: '20px 24px 16px', borderBottom: '1px solid rgba(0,0,0,0.07)', display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                    {activeTile.brand_domain && (
                      <img
                        src={`https://logo.clearbit.com/${activeTile.brand_domain}`}
                        alt="brand"
                        style={{ width: 44, height: 44, borderRadius: 10, objectFit: 'contain', background: '#fff', padding: 5, boxShadow: 'var(--nm-sm)', flexShrink: 0 }}
                        onError={e => { e.target.style.display = 'none'; }}
                      />
                    )}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5, flexWrap: 'wrap' }}>
                        <span style={{ fontSize: 11, fontWeight: 800, color: 'var(--accent)', background: 'var(--accentBg)', padding: '3px 10px', borderRadius: 100 }}>
                          {activeTile.badge}
                        </span>
                        {activeTile.buy && (
                          <span style={{ fontSize: 11.5, color: 'var(--sub)', fontWeight: 500 }}>🛒 {activeTile.buy}</span>
                        )}
                      </div>
                      <h2 style={{ fontSize: 19, fontWeight: 800, lineHeight: 1.2, marginBottom: 4 }}>{activeTile.name}</h2>
                      <div style={{ fontSize: 28, fontWeight: 800, lineHeight: 1, background: 'linear-gradient(135deg,#d97706,#b45309)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        ₹{parseInt(activeTile.price.toString().replace(/\D/g, '') || '0').toLocaleString()}
                      </div>
                    </div>
                    <button
                      onClick={() => setActiveTile(null)}
                      style={{ background: 'var(--bg)', border: 'none', borderRadius: 10, width: 34, height: 34, display: 'grid', placeItems: 'center', cursor: 'pointer', boxShadow: 'var(--nm-sm)', flexShrink: 0, marginTop: 2 }}
                    >
                      <Ic name="close" size={15} />
                    </button>
                  </div>

                  {/* ── Two-column body ──────────────────────────────── */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>

                    {/* Left: summary + target + pros + cons */}
                    <div style={{ padding: '16px 18px 16px 24px', borderRight: '1px solid rgba(0,0,0,0.07)' }}>
                      {/* Summary */}
                      <p style={{ fontSize: 12.5, color: 'var(--sub)', lineHeight: 1.6, marginBottom: 10 }}>
                        {activeTile.summary || activeTile.why}
                      </p>

                      {/* Target */}
                      {activeTile.target && (
                        <div style={{ fontSize: 12, color: 'var(--sub)', marginBottom: 12, padding: '7px 11px', background: 'var(--accentBg)', borderRadius: 8, lineHeight: 1.5 }}>
                          <strong style={{ color: 'var(--accent)' }}>🎯 </strong>{activeTile.target}
                        </div>
                      )}

                      {/* Divider label */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                        {/* Pros */}
                        <div>
                          <div style={{ fontSize: 11, fontWeight: 800, color: '#16a34a', letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 7 }}>Pros</div>
                          {(activeTile.pros || []).slice(0, 3).map((p, i) => (
                            <div key={i} style={{ display: 'flex', gap: 6, fontSize: 12, color: 'var(--sub)', marginBottom: 6, lineHeight: 1.4 }}>
                              <span style={{ color: '#16a34a', flexShrink: 0, marginTop: 1 }}>✓</span>
                              <span>{p}</span>
                            </div>
                          ))}
                        </div>

                        {/* Cons */}
                        <div>
                          <div style={{ fontSize: 11, fontWeight: 800, color: '#dc2626', letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 7 }}>Cons</div>
                          {(Array.isArray(activeTile.cons) ? activeTile.cons : [activeTile.cons]).slice(0, 3).map((c, i) => (
                            <div key={i} style={{ display: 'flex', gap: 6, fontSize: 12, color: 'var(--sub)', marginBottom: 6, lineHeight: 1.4 }}>
                              <span style={{ color: '#dc2626', flexShrink: 0, marginTop: 1 }}>✗</span>
                              <span>{c}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: specs + insider tip */}
                    <div style={{ padding: '16px 24px 16px 18px' }}>
                      <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--sub)', letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 10 }}>Specifications</div>
                      <div>
                        {(Array.isArray(activeTile.specs)
                          ? activeTile.specs
                          : Object.entries(activeTile.specs || {}).map(([k, v]) => `${k}: ${v}`)
                        ).slice(0, 5).map((s, i) => {
                          const colonIdx = s.indexOf(':');
                          const label = colonIdx > -1 ? s.slice(0, colonIdx).trim() : `Spec ${i + 1}`;
                          const value = colonIdx > -1 ? s.slice(colonIdx + 1).trim() : s;
                          return (
                            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '7px 0', borderBottom: i < 4 ? '1px solid rgba(0,0,0,0.05)' : 'none', gap: 8 }}>
                              <span style={{ fontSize: 11.5, color: 'var(--sub)', fontWeight: 600, flexShrink: 0 }}>{label}</span>
                              <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--text)', textAlign: 'right' }}>{value}</span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Insider tip (from pR.insider if available) */}
                      {pR?.insider && (
                        <div style={{ marginTop: 14, padding: '9px 12px', background: 'var(--accentBg)', borderRadius: 8, fontSize: 11.5, color: 'var(--sub)', lineHeight: 1.55, borderLeft: '3px solid var(--accent)' }}>
                          <strong style={{ color: 'var(--accent)' }}>💡 Insider: </strong>{pR.insider}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* ── Action bar ───────────────────────────────────── */}
                  <div style={{ padding: '14px 24px', borderTop: '1px solid rgba(0,0,0,0.07)', display: 'flex', gap: 8, alignItems: 'center' }}>
                    <button
                      className="btn btn-p"
                      onClick={() => window.open(`https://www.google.com/search?q=${encodeURIComponent(activeTile.name + ' buy india price')}`, '_blank')}
                      style={{ flex: 1, justifyContent: 'center', padding: '12px', fontSize: 13 }}
                    >
                      Search Prices
                    </button>
                    <button
                      className="btn btn-s"
                      onClick={() => window.open(`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(activeTile.name)}`, '_blank')}
                      style={{ padding: '12px 16px', fontSize: 13 }}
                    >
                      <Ic name="camera" size={15} /> Photos
                    </button>
                    <button
                      className="btn btn-s"
                      onClick={() => togS(activeTile)}
                      style={{
                        width: 44, height: 44, padding: 0, display: 'grid', placeItems: 'center',
                        background: saved.find(x => x.name === activeTile.name) ? 'var(--accentBg)' : 'var(--bg)',
                      }}
                    >
                      <Ic name="heart" size={18} color={saved.find(x => x.name === activeTile.name) ? 'var(--accent)' : 'var(--sub)'} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Cards grid — pointer-events off when modal is open prevents ghost hover artifacts */}
            {pR && pR.recs ? (
              <div style={{ pointerEvents: activeTile ? 'none' : 'auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(272px,1fr))', gap: 16, marginBottom: 24 }}>
                  {pR.recs.map((r, i) => (
                    <div key={i} className="card"
                      onClick={() => setActiveTile(r)}
                      style={{ padding: 22, display: 'flex', flexDirection: 'column', position: 'relative', cursor: 'pointer', animation: `fadeUp .5s ease ${i * 0.07}s both` }}>
                      <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--accent)', marginBottom: 8 }}>{r.badge}</div>
                      <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 5, paddingRight: 28, lineHeight: 1.3 }}>{r.name}</div>
                      <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 10, background: 'linear-gradient(135deg,#d97706,#b45309)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        ₹{parseInt(r.price.toString().replace(/\D/g, '') || '0').toLocaleString()}
                      </div>
                      <div style={{ fontSize: 13, color: 'var(--sub)', marginBottom: 12, flex: 1, lineHeight: 1.5 }}>{r.summary || r.why}</div>
                      <div style={{ background: 'var(--accentBg)', padding: '10px 14px', borderRadius: 10, fontSize: 12, marginBottom: 10 }}>
                        {(Array.isArray(r.specs) ? r.specs : Object.entries(r.specs || {}).map(([k, v]) => `${k}: ${v}`)).slice(0, 3).map((s, j) => (
                          <div key={j} style={{ color: 'var(--sub)', marginBottom: 3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>◆ {s}</div>
                        ))}
                      </div>
                      <div style={{ fontSize: 12, color: '#dc2626', lineHeight: 1.4 }}>
                        <strong>Watch out:</strong> {Array.isArray(r.cons) ? r.cons[0] : r.cons}
                      </div>
                      <button onClick={e => { e.stopPropagation(); togS(r); }}
                        style={{ position: 'absolute', top: 16, right: 16, background: 'transparent', border: 'none', cursor: 'pointer', padding: 4 }}>
                        <Ic name="heart" size={18} color={saved.find(x => x.name === r.name) ? 'var(--accent)' : 'var(--sub)'} />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Expert verdict + advice */}
                <div className="card nm-flat" style={{ padding: 28, marginBottom: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                    <span style={{ fontSize: 18 }}>🎯</span>
                    <h3 style={{ fontSize: 17, fontWeight: 800 }}>Expert Verdict</h3>
                  </div>
                  <p style={{ fontSize: 14.5, lineHeight: 1.7, color: 'var(--sub)', marginBottom: 20 }}>{pR.comparison}</p>

                  {pR.insider && (
                    <div style={{ background: 'var(--accentBg)', borderRadius: 12, padding: '14px 18px', marginBottom: 20, fontSize: 14, lineHeight: 1.6 }}>
                      <strong>💡 Insider tip:</strong> <span style={{ color: 'var(--sub)' }}>{pR.insider}</span>
                    </div>
                  )}

                  <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 10 }}>Buying Advice</h3>
                  <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
                    {pR.advice.map((a, i) => (
                      <li key={i} style={{ display: 'flex', gap: 9, fontSize: 14, color: 'var(--sub)', marginBottom: 8, lineHeight: 1.5 }}>
                        <Ic name="check" size={15} color="var(--accent)" /><span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="card nm-flat" style={{ padding: '28px 26px', lineHeight: 1.7 }}>
                {jsonError && <div style={{background: 'rgba(220,38,38,0.08)', color: '#b91c1c', padding: '12px 16px', borderRadius: 12, marginBottom: 20, fontSize: 13, fontWeight: 600}}>{jsonError}</div>}
                {renderMD(result)}
              </div>
            )}

            {/* Terminology */}
            {termos.length > 0 && (
              <div style={{ marginTop: 24 }}>
                <button onClick={() => setShowT(!showT)} className="card nm-flat"
                  style={{ width: '100%', padding: '18px 24px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12, background: showT ? 'var(--accentBg)' : 'var(--bg)', border: 'none', borderLeft: '4px solid var(--accent)', borderRadius: 16 }}>
                  <Ic name="book" size={22} color="var(--accent)" />
                  <div style={{ flex: 1, textAlign: 'left' }}>
                    <div style={{ fontWeight: 800, fontSize: 16, color: 'var(--accent)' }}>{t('termoT')}</div>
                    <div style={{ fontSize: 13, color: 'var(--sub)' }}>{t('termoSub')}</div>
                  </div>
                  <div style={{ transform: showT ? 'rotate(90deg)' : 'rotate(0)', transition: 'transform .2s' }}>
                    <Ic name="arrow" size={18} color="var(--accent)" />
                  </div>
                </button>
                {showT && (
                  <div style={{ marginTop: 12, animation: 'fadeUp .3s ease' }}>
                    {termos.map((tm, i) => (
                      <div key={i} className="termo-card">
                        <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--text)', marginBottom: 5 }}>{lang === 'mr' ? (tm.tm || tm.t) : tm.t}</div>
                        <div style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--sub)' }}>{lang === 'mr' ? tm.mr : tm.en}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
            <ScamBox id={cat} />
            <p style={{ textAlign: 'center', color: 'var(--sub)', fontSize: 12, padding: '24px 0', opacity: .7 }}>{t('aiDisc')}</p>
          </div>
        )}

        {/* ══ LAB HOME ══════════════════════════════ */}
        {view === 'lab' && (
          <div className="fade-up dark" style={{ paddingTop: 40, margin: '0 -24px', padding: '40px 24px 60px', minHeight: '80vh' }}>
            <p style={{ fontSize: 11, fontWeight: 800, color: 'var(--accent)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10 }}>{t('labTag')}</p>
            <h1 style={{ fontSize: 36, fontWeight: 800, color: '#f0ebe3', marginBottom: 10, letterSpacing: -1 }}>{t('labT')}</h1>
            <p style={{ fontSize: 16, color: 'var(--darkSub)', marginBottom: 36 }}>{t('labSub')}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14, marginBottom: 32 }}>
              {[{ id: 'pc', ic: 'pc', n: t('pcB'), d: t('pcBD') }, { id: 'setup', ic: 'setup', n: t('gsB'), d: t('gsBD') }, { id: 'theater', ic: 'theater', n: t('htB'), d: t('htBD') }].map(m => (
                <div key={m.id} className="card"
                  onClick={() => { setLabMode(m.id); setView('labConfig'); setPcP({}); setPcB(''); setPcU(''); setLabN(''); setResult(''); setError(''); }}
                  style={{ padding: 24, cursor: 'pointer' }}>
                  <div style={{ color: 'var(--accent)', marginBottom: 14 }}><Ic name={m.ic} size={28} /></div>
                  <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 6, color: '#f0ebe3' }}>{m.n}</div>
                  <div style={{ fontSize: 13, color: 'var(--darkSub)', lineHeight: 1.5, marginBottom: 14 }}>{m.d}</div>
                  <div style={{ color: 'var(--accent)', fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 4 }}>{t('configure')} <Ic name="arrow" size={13} /></div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ══ LAB CONFIG ════════════════════════════ */}
        {view === 'labConfig' && (
          <div className="fade-up dark" style={{ margin: '0 -24px', padding: '30px 24px 60px', minHeight: '80vh' }}>
            <button className="btn btn-s" onClick={() => setView('lab')} style={{ marginBottom: 22, fontSize: 13, padding: '8px 16px' }}><Ic name="back" size={14} /> {t('lab')}</button>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: '#f0ebe3', marginBottom: 26 }}>
              {labMode === 'pc' ? t('pcB') : labMode === 'setup' ? t('gsB') : t('htB')}
            </h2>
            {labMode === 'pc' && (
              <div className="card" style={{ padding: 24, marginBottom: 14 }}>
                <label style={{ fontWeight: 800, fontSize: 14, color: '#f0ebe3', display: 'block', marginBottom: 4 }}>{t('partsC')}</label>
                <p style={{ fontSize: 12, color: 'var(--darkSub)', marginBottom: 14 }}>{t('partsCd')}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {PCP.map(p => (
                    <div key={p.id}>
                      <label style={{ fontSize: 12, color: 'var(--darkSub)', fontWeight: 700, marginBottom: 3, display: 'block', textTransform: 'uppercase', letterSpacing: 0.5 }}>{lang === 'mr' ? p.nm : p.n}</label>
                      <input value={pcP[p.id] || ''} onChange={e => setPcP({ ...pcP, [p.id]: e.target.value })} placeholder={p.ph}
                        style={{ width: '100%', padding: '9px 13px', borderRadius: 10, border: 'none', fontSize: 13, background: 'var(--darkBg)', color: '#f0ebe3', fontFamily: 'inherit' }} />
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="card" style={{ padding: 24, marginBottom: 14 }}>
              <label style={{ fontWeight: 800, fontSize: 14, color: '#f0ebe3', display: 'block', marginBottom: 12 }}>{t('totBudget')}</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['Under ₹50K', '₹50K–80K', '₹80K–1.2L', '₹1.2L–2L', '₹2L+', 'No limit'].map(b => (
                  <button key={b} className={`pill ${pcB === b ? 'active' : ''}`} onClick={() => setPcB(pcB === b ? '' : b)}>{b}</button>
                ))}
              </div>
            </div>
            <div className="card" style={{ padding: 24, marginBottom: 14 }}>
              <label style={{ fontWeight: 800, fontSize: 14, color: '#f0ebe3', display: 'block', marginBottom: 12 }}>{t('priUse')}</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {(labMode === 'pc' ? ['Gaming (1080p)', 'Gaming (1440p)', 'Gaming (4K)', 'Video Editing', '3D Rendering', 'Streaming', 'Programming', 'General']
                  : labMode === 'setup' ? ['Competitive FPS', 'RPG/Story', 'Sim Racing', 'Streaming + Gaming', 'Casual + Work']
                    : ['Movies', 'Sports', 'Music', 'Gaming', 'All-rounder']
                ).map(u => <button key={u} className={`pill ${pcU === u ? 'active' : ''}`} onClick={() => setPcU(pcU === u ? '' : u)}>{u}</button>)}
              </div>
            </div>
            <div className="card" style={{ padding: 24, marginBottom: 22 }}>
              <label style={{ fontWeight: 800, fontSize: 14, color: '#f0ebe3', display: 'block', marginBottom: 8 }}>{labMode === 'theater' ? t('roomDet') : t('addNotes')}</label>
              <textarea value={labN} onChange={e => setLabN(e.target.value)} rows={2}
                style={{ width: '100%', padding: '11px 14px', borderRadius: 12, border: 'none', fontSize: 14, resize: 'vertical', background: 'var(--darkBg)', color: '#f0ebe3', fontFamily: 'inherit' }} />
            </div>
            <EB />
            <button className="btn btn-p" disabled={loading} onClick={getLabR}>{loading ? t('deepDive') : t('runDeep')}</button>
            {loading && <Ld msg={t('runAnal')} />}
          </div>
        )}

        {/* ══ LAB RESULT ════════════════════════════ */}
        {view === 'labResult' && (
          <div ref={rR} className="fade-up dark" style={{ margin: '0 -24px', padding: '30px 24px 60px', minHeight: '80vh' }}>
            <div style={{ display: 'flex', gap: 8, marginBottom: 22 }}>
              <button className="btn btn-s" onClick={() => setView('labConfig')} style={{ fontSize: 13, padding: '8px 16px' }}><Ic name="back" size={14} /> {t('adjust')}</button>
              <button className="btn btn-s" onClick={() => setView('lab')} style={{ fontSize: 13, padding: '8px 16px' }}>{t('labHome')}</button>
            </div>
            <div className="card" style={{ padding: '30px 26px', lineHeight: 1.75 }}>
              <div style={{ color: '#f0ebe3' }}>{renderMD(result)}</div>
            </div>
            <p style={{ textAlign: 'center', color: 'var(--darkSub)', fontSize: 12, padding: '24px 0', opacity: .65 }}>{t('labDisc')}</p>
          </div>
        )}

        {/* ══ TOOLS ══════════════════════════════════ */}
        {view === 'tools' && (
          <div className="fade-up" style={{ paddingTop: 40 }}>
            <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>{t('toolsT')}</h2>
            <p style={{ fontSize: 16, color: 'var(--sub)', marginBottom: 28 }}>{t('toolsSub')}</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {[
                { i: 'quiz',    n: t('hmdT'),  d: t('hmdD'),   a: () => { setView('quiz'); setQS(0); setQA([]); setResult(''); setError(''); } },
                { i: 'calc',    n: t('elCalc'), d: t('elCalcD'),a: () => { setView('calc'); setCW(''); setCH(''); } },
                { i: 'deal',    n: t('dealC'),  d: t('dealCD'), a: () => { setView('dealCheck'); setDP(''); setDPr(''); setResult(''); setError(''); } },
                { i: 'compare', n: t('compP'),  d: t('compPD'), a: () => { setView('compare'); setCompSel([]); } },
              ].map(x => (
                <div key={x.n} className="card" onClick={x.a} style={{ padding: 24, cursor: 'pointer' }}>
                  <div style={{ color: 'var(--accent)', marginBottom: 12 }}><Ic name={x.i} size={26} /></div>
                  <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 5 }}>{x.n}</div>
                  <div style={{ fontSize: 13.5, color: 'var(--sub)', lineHeight: 1.5 }}>{x.d}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ══ QUIZ ════════════════════════════════════ */}
        {view === 'quiz' && (
          <div className="fade-up" style={{ paddingTop: 40 }}>
            <button className="btn btn-s" onClick={() => setView('home')} style={{ marginBottom: 22, fontSize: 13, padding: '8px 16px' }}><Ic name="back" size={14} /> {t('back')}</button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <Ic name="quiz" size={24} color="var(--accent)" />
              <h2 style={{ fontSize: 26, fontWeight: 800 }}>{t('hmdT')}</h2>
            </div>
            <p style={{ color: 'var(--sub)', fontSize: 14, marginBottom: 24 }}>{t('question')} {qS + 1} {t('of')} {quizQs.length}</p>
            <div style={{ height: 4, background: 'var(--bg)', borderRadius: 2, marginBottom: 28, boxShadow: 'var(--nm-in-sm)' }}>
              <div style={{ height: '100%', background: 'linear-gradient(90deg,#f59e0b,#d97706)', borderRadius: 2, width: `${((qS + 1) / quizQs.length) * 100}%`, transition: 'width .35s ease', boxShadow: '0 2px 8px rgba(217,119,6,.4)' }} />
            </div>
            <div className="card nm-flat" style={{ padding: 30 }}>
              <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 22 }}>{quizQs[qS].q}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                {quizQs[qS].o.map(o => (
                  <button key={o} className={`pill ${qA[qS] === o ? 'active' : ''}`}
                    onClick={() => { const a = [...qA]; a[qS] = o; setQA(a); if (qS < quizQs.length - 1) setTimeout(() => setQS(qS + 1), 220); }}
                    style={{ padding: '14px 18px', textAlign: 'left', fontSize: 15, borderRadius: 12 }}>{o}</button>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 20 }}>
              {qS > 0 && <button className="btn btn-s" onClick={() => setQS(qS - 1)}>{t('prev')}</button>}
              {qS === quizQs.length - 1 && qA[qS] && <button className="btn btn-p" disabled={loading} onClick={runQ}>{loading ? t('thinking') : t('getRec2')}</button>}
            </div>
            <EB />
            {loading && <Ld msg={t('figuring')} />}
          </div>
        )}

        {/* Quiz result */}
        {view === 'quizResult' && (
          <div className="fade-up" style={{ paddingTop: 28 }}>
            <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
              <button className="btn btn-s" onClick={() => { setView('quiz'); setQS(0); }} style={{ fontSize: 13, padding: '8px 16px' }}><Ic name="back" size={14} /> {t('retake')}</button>
              <button className="btn btn-s" onClick={() => setView('home')} style={{ fontSize: 13, padding: '8px 16px' }}>{t('browseAll')}</button>
            </div>
            <div className="card nm-flat" style={{ padding: '30px 26px', lineHeight: 1.75 }}>{renderMD(result)}</div>
          </div>
        )}

        {/* ══ CALC ═══════════════════════════════════ */}
        {view === 'calc' && (
          <div className="fade-up" style={{ paddingTop: 40 }}>
            <button className="btn btn-s" onClick={() => setView('tools')} style={{ marginBottom: 22, fontSize: 13, padding: '8px 16px' }}><Ic name="back" size={14} /> {t('tools')}</button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 26 }}>
              <Ic name="zap" size={26} color="var(--accent)" />
              <h2 style={{ fontSize: 26, fontWeight: 800 }}>{t('calcT')}</h2>
            </div>
            <div className="card nm-flat" style={{ padding: 26 }}>
              {[
                { label: t('wattage'), val: cW, set: setCW, ph: t('wattPH'), hint: t('wattH'), type: 'number' },
                { label: t('hrsDay'), val: cH, set: setCH, ph: t('hrsPH'), hint: null, type: 'number' },
                { label: t('elRate'), val: cR, set: setCR, ph: '8', hint: t('rateH'), type: 'number' },
              ].map(({ label, val, set, ph, hint, type }) => (
                <div key={label} style={{ marginBottom: 18 }}>
                  <label style={{ fontWeight: 700, fontSize: 14, display: 'block', marginBottom: 6 }}>{label}</label>
                  <input type={type} value={val} onChange={e => set(e.target.value)} placeholder={ph}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: 12, border: '1.5px solid rgba(0,0,0,0.06)', fontSize: 15, background: 'var(--bg)', fontFamily: 'inherit', boxShadow: 'var(--nm-in-sm)', color: 'var(--text)' }} />
                  {hint && <div style={{ fontSize: 12, color: 'var(--sub)', marginTop: 4 }}>{hint}</div>}
                </div>
              ))}
              {mC && (
                <div style={{ background: 'linear-gradient(135deg,rgba(245,158,11,.12),rgba(180,83,9,.10))', borderRadius: 16, padding: '24px 28px', textAlign: 'center', boxShadow: 'var(--nm-sm)', marginTop: 4 }}>
                  <div style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 700, marginBottom: 6 }}>{t('estMonth')}</div>
                  <div style={{ fontSize: 44, fontWeight: 800, background: 'linear-gradient(135deg,#d97706,#b45309)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>₹{parseInt(mC).toLocaleString()}</div>
                  <div style={{ fontSize: 13, color: 'var(--sub)', marginTop: 8 }}>{cW}W × {cH}hrs × 30 ÷ 1000 × ₹{cR} = <strong>₹{mC}/{t('month')}</strong></div>
                  <div style={{ fontSize: 13, color: 'var(--sub)', marginTop: 4 }}>{t('yearly')}: <strong>₹{(parseInt(mC) * 12).toLocaleString()}</strong></div>
                </div>
              )}
            </div>
            <div className="card nm-flat" style={{ padding: 22, marginTop: 14 }}>
              <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 12 }}>{t('comWatt')}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {wts.map(([n, w]) => <button key={n} className="pill" onClick={() => setCW(w)} style={{ fontSize: 12.5, padding: '6px 12px' }}>{n}: {w}W</button>)}
              </div>
            </div>
          </div>
        )}

        {/* ══ DEAL CHECK ══════════════════════════════ */}
        {view === 'dealCheck' && (
          <div className="fade-up" style={{ paddingTop: 40 }}>
            <button className="btn btn-s" onClick={() => setView('tools')} style={{ marginBottom: 22, fontSize: 13, padding: '8px 16px' }}><Ic name="back" size={14} /> {t('tools')}</button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 26 }}>
              <Ic name="deal" size={26} color="var(--accent)" />
              <h2 style={{ fontSize: 26, fontWeight: 800 }}>{t('dealT')}</h2>
            </div>
            <div className="card nm-flat" style={{ padding: 26 }}>
              <p style={{ fontSize: 14, color: 'var(--sub)', marginBottom: 22 }}>{t('dealSub')}</p>
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontWeight: 700, fontSize: 14, display: 'block', marginBottom: 7 }}>{t('prodName')}</label>
                <input value={dP} onChange={e => setDP(e.target.value)} placeholder={t('prodPH')}
                  style={{ width: '100%', padding: '12px 14px', borderRadius: 12, border: '1.5px solid rgba(0,0,0,0.06)', fontSize: 15, background: 'var(--bg)', fontFamily: 'inherit', boxShadow: 'var(--nm-in-sm)', color: 'var(--text)' }} />
              </div>
              <div style={{ marginBottom: 22 }}>
                <label style={{ fontWeight: 700, fontSize: 14, display: 'block', marginBottom: 7 }}>{t('priceQ')}</label>
                <input type="number" value={dPr} onChange={e => setDPr(e.target.value)} placeholder={t('pricePH')}
                  style={{ width: '100%', padding: '12px 14px', borderRadius: 12, border: '1.5px solid rgba(0,0,0,0.06)', fontSize: 15, background: 'var(--bg)', fontFamily: 'inherit', boxShadow: 'var(--nm-in-sm)', color: 'var(--text)' }} />
              </div>
              <EB />
              <button className="btn btn-p" disabled={!dP || !dPr || loading} onClick={chkD}>{loading ? t('checking') : t('verDeal')}</button>
            </div>
            {loading && <Ld msg={t('crossCheck')} />}
          </div>
        )}

        {view === 'dealResult' && (
          <div className="fade-up" style={{ paddingTop: 28 }}>
            <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
              <button className="btn btn-s" onClick={() => setView('dealCheck')} style={{ fontSize: 13, padding: '8px 16px' }}><Ic name="back" size={14} /> {t('checkAn')}</button>
            </div>
            <div className="card nm-flat" style={{ padding: '14px 20px', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
              <Ic name="deal" size={20} color="var(--accent)" />
              <div><strong>{dP}</strong> — <strong>₹{parseInt(dPr).toLocaleString()}</strong></div>
            </div>
            <div className="card nm-flat" style={{ padding: '30px 26px', lineHeight: 1.75 }}>{renderMD(result)}</div>
          </div>
        )}

      </div>
    </div>
  );
}
