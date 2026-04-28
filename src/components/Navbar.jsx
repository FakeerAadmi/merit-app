import React from 'react';
import { useLocation } from 'react-router-dom';
import { Ic } from './Icons';

/* ─── Tab config ─────────────────────────────── */
const TABS = [
  { tab: 'home',   path: '/',       labelKey: 'hmdT',   icon: 'home'    },
  { tab: 'browse', path: '/browse', labelKey: 'allCats',icon: 'search'  },
  { tab: 'lab',    path: '/lab',    labelKey: 'lab',    icon: 'pc'      },
  { tab: 'saved',  path: '/saved',  labelKey: 'saved',  icon: 'heart'   },
  { tab: 'settings',path: '/settings',labelKey:'settings',icon:'settings'},
];

/* ─── Active state helper ────────────────────── */
function useNavActive() {
  const { pathname } = useLocation();
  return (tab) => {
    if (tab === 'home')     return pathname === '/';
    if (tab === 'browse')   return pathname.startsWith('/browse') || pathname === '/configure' || pathname === '/result';
    if (tab === 'lab')      return pathname.startsWith('/lab');
    if (tab === 'saved')    return pathname === '/saved' || pathname === '/compare';
    if (tab === 'settings') return pathname === '/settings';
    return false;
  };
}

/* ═══════════════════════════════════════════════
   NAVBAR — renders desktop top bar + mobile bars
═══════════════════════════════════════════════ */
const Navbar = ({ t, lang, setL, city, saved, onLogoClick, onNavClick, onSaved, onSettings }) => {
  const navActive = useNavActive();
  const { pathname } = useLocation();
  const savedCount = saved.length;

  /* ── Desktop top navbar ─────────────────────── */
  const DesktopNav = () => (
    <nav className="nav-desktop">
      {/* Logo */}
      <div onClick={onLogoClick} style={{cursor:'pointer',display:'flex',alignItems:'center',gap:9,flexShrink:0}}>
        <div style={{width:32,height:32,borderRadius:'var(--r-sm)',background:'var(--pri)',display:'grid',placeItems:'center',boxShadow:'0 2px 8px rgba(185,98,0,.35)'}}>
          <span style={{color:'#fff',fontSize:16,fontWeight:800,fontFamily:'Outfit,sans-serif',letterSpacing:-0.5}}>m</span>
        </div>
        <span style={{fontFamily:'Outfit,sans-serif',fontSize:21,fontWeight:800,color:'var(--on-sur)',letterSpacing:-0.8}}>merit.</span>
      </div>

      {/* Centre tab pill */}
      <div style={{display:'flex',gap:2,background:'var(--sur-con)',borderRadius:'var(--r-f)',padding:'4px',border:'1px solid var(--out-v)'}}>
        {[['home', '/', t('hmdT')], ['browse', '/browse', t('allCats')], ['lab', '/lab', t('lab')]].map(([tab, path, label]) => (
          <button key={tab} onClick={() => onNavClick(path)}
            style={{
              padding:'7px 18px', borderRadius:'var(--r-f)', border:'none',
              fontSize:13, fontWeight:600, cursor:'pointer', fontFamily:'inherit',
              background: navActive(tab) ? 'var(--card)' : 'transparent',
              color:      navActive(tab) ? 'var(--pri)'  : 'var(--on-sur-v)',
              boxShadow:  navActive(tab) ? 'var(--nm-sm)': 'none',
              transition: 'all .2s var(--ease)',
            }}>
            {label}
          </button>
        ))}
      </div>

      {/* Right controls */}
      <div style={{display:'flex',gap:7,alignItems:'center',flexShrink:0}}>
        <button onClick={onSaved}
          style={{padding:'7px 12px',borderRadius:'var(--r-f)',border:'1.5px solid var(--out)',background: savedCount>0?'var(--pri-c)':'var(--card)',cursor:'pointer',fontSize:13,fontWeight:600,fontFamily:'inherit',color:savedCount>0?'var(--on-pri-c)':'var(--on-sur)',display:'flex',alignItems:'center',gap:5,transition:'all .2s'}}>
          <Ic name="heart" size={14} color={savedCount>0?'var(--on-pri-c)':'var(--on-sur-v)'}/>{savedCount}
        </button>
        <button onClick={() => setL(lang==='en'?'mr':'en')}
          style={{padding:'7px 12px',borderRadius:'var(--r-f)',border:'1.5px solid var(--out)',background:lang==='mr'?'var(--pri-c)':'var(--card)',cursor:'pointer',fontSize:13,fontWeight:700,fontFamily:'inherit',color:lang==='mr'?'var(--on-pri-c)':'var(--on-sur-v)',display:'flex',alignItems:'center',gap:4}}>
          <Ic name="lang" size={13}/>{lang==='mr'?'मरा':'EN'}
        </button>
        <button onClick={onSettings}
          style={{padding:'7px 12px',borderRadius:'var(--r-f)',border:'1.5px solid var(--out)',background:'var(--card)',cursor:'pointer',fontSize:13,fontWeight:500,fontFamily:'inherit',color:'var(--on-sur-v)',maxWidth:110,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>
          {city||t('cityLabel')}
        </button>
        <button onClick={onSettings}
          style={{width:36,height:36,borderRadius:'var(--r-sm)',border:'1.5px solid var(--out)',background:'var(--card)',cursor:'pointer',display:'grid',placeItems:'center',color:'var(--on-sur-v)'}}>
          <Ic name="settings" size={16}/>
        </button>
      </div>
    </nav>
  );

  /* ── Mobile top bar (just logo + lang toggle) ─ */
  const MobileTopBar = () => (
    <div className="nav-mobile-top">
      <div onClick={onLogoClick} style={{cursor:'pointer',display:'flex',alignItems:'center',gap:8}}>
        <div style={{width:28,height:28,borderRadius:'var(--r-sm)',background:'var(--pri)',display:'grid',placeItems:'center',boxShadow:'0 2px 6px rgba(185,98,0,.3)'}}>
          <span style={{color:'#fff',fontSize:14,fontWeight:800,fontFamily:'Outfit,sans-serif',letterSpacing:-0.5}}>m</span>
        </div>
        <span style={{fontFamily:'Outfit,sans-serif',fontSize:19,fontWeight:800,color:'var(--on-sur)',letterSpacing:-0.7}}>merit.</span>
      </div>
      <div style={{display:'flex',gap:6,alignItems:'center'}}>
        <button onClick={() => setL(lang==='en'?'mr':'en')}
          style={{padding:'6px 11px',borderRadius:'var(--r-f)',border:'1.5px solid var(--out)',background:lang==='mr'?'var(--pri-c)':'var(--card)',cursor:'pointer',fontSize:12.5,fontWeight:700,fontFamily:'inherit',color:lang==='mr'?'var(--on-pri-c)':'var(--on-sur-v)',display:'flex',alignItems:'center',gap:3}}>
          <Ic name="lang" size={12}/>{lang==='mr'?'मरा':'EN'}
        </button>
      </div>
    </div>
  );

  /* ── Mobile bottom nav bar ──────────────────── */
  const MobileBottomNav = () => (
    <nav className="nav-mobile" role="navigation" aria-label="Main navigation">
      {TABS.map(({ tab, path, labelKey, icon }) => {
        const isActive = navActive(tab);
        const isSaved  = tab === 'saved';
        return (
          <button
            key={tab}
            className={`nav-mobile-item ${isActive ? 'active' : ''}`}
            onClick={() => {
              if (tab === 'saved')    { onSaved();    return; }
              if (tab === 'settings') { onSettings(); return; }
              onNavClick(path);
            }}
            aria-label={t(labelKey)}
            aria-current={isActive ? 'page' : undefined}
          >
            <div className="nav-icon-wrap" style={{position:'relative'}}>
              <Ic
                name={icon}
                size={20}
                color={isActive ? 'var(--pri)' : 'var(--on-sur-v)'}
              />
              {isSaved && savedCount > 0 && (
                <span className="nav-badge">{savedCount}</span>
              )}
            </div>
            <span style={{fontSize:10,fontWeight:isActive?700:600,letterSpacing:.2}}>
              {t(labelKey)}
            </span>
          </button>
        );
      })}
    </nav>
  );

  return (
    <>
      <DesktopNav />
      <MobileTopBar />
      <MobileBottomNav />
    </>
  );
};

export default Navbar;
