import React from 'react';
import { Ic } from './Icons';

const Navbar = ({ t, lang, setL, view, setView, setCatQ, setError, city, saved, navActive }) => {
  const navStyle = {
    display:'flex',alignItems:'center',justifyContent:'space-between',
    padding:'12px 28px',
    background:'rgba(255,248,244,.85)',
    backdropFilter:'blur(24px)',WebkitBackdropFilter:'blur(24px)',
    position:'sticky',top:0,zIndex:100,
    borderBottom:'1px solid var(--out-v)',
  };

  return (
    <nav style={navStyle}>
      {/* Logo */}
      <div onClick={()=>{setView('home');setCatQ('');setError('');}} style={{cursor:'pointer',display:'flex',alignItems:'center',gap:9}}>
        <div style={{width:32,height:32,borderRadius:'var(--r-sm)',background:'var(--pri)',display:'grid',placeItems:'center',boxShadow:'0 2px 8px rgba(185,98,0,.35)'}}>
          <span style={{color:'#fff',fontSize:16,fontWeight:800,fontFamily:'Outfit,sans-serif',letterSpacing:-0.5}}>m</span>
        </div>
        <span style={{fontFamily:'Outfit,sans-serif',fontSize:21,fontWeight:800,color:'var(--on-sur)',letterSpacing:-0.8}}>merit.</span>
      </div>

      {/* Centered tab pill */}
      <div style={{display:'flex',gap:2,background:'var(--sur-con)',borderRadius:'var(--r-f)',padding:'4px',border:'1px solid var(--out-v)'}}>
        {[['home',t('hmdT')],['browse',t('allCats')],['lab',t('lab')]].map(([v,l])=>(
          <button key={v} onClick={()=>{setView(v);setError('');}}
            style={{padding:'7px 18px',borderRadius:'var(--r-f)',border:'none',fontSize:13,fontWeight:600,cursor:'pointer',fontFamily:'inherit',
              background:navActive(v)?'var(--card)':'transparent',
              color:navActive(v)?'var(--pri)':'var(--on-sur-v)',
              boxShadow:navActive(v)?'var(--nm-sm)':'none',
              transition:'all .2s var(--ease)'}}>
            {l}
          </button>
        ))}
      </div>

      {/* Right controls */}
      <div style={{display:'flex',gap:7,alignItems:'center'}}>
        <button onClick={()=>setView('saved')} style={{padding:'7px 12px',borderRadius:'var(--r-f)',border:'1.5px solid var(--out)',background:'var(--card)',cursor:'pointer',fontSize:13,fontWeight:600,fontFamily:'inherit',color:'var(--on-sur)',display:'flex',alignItems:'center',gap:5}}>
          <Ic name="heart" size={14} color={saved.length>0?'var(--pri)':'var(--on-sur-v)'}/>{saved.length}
        </button>
        <button onClick={()=>setL(lang==='en'?'mr':'en')} style={{padding:'7px 12px',borderRadius:'var(--r-f)',border:'1.5px solid var(--out)',background:lang==='mr'?'var(--pri-c)':'var(--card)',cursor:'pointer',fontSize:13,fontWeight:700,fontFamily:'inherit',color:lang==='mr'?'var(--on-pri-c)':'var(--on-sur-v)',display:'flex',alignItems:'center',gap:4}}>
          <Ic name="lang" size={13}/>{lang==='mr'?'मरा':'EN'}
        </button>
        <button onClick={()=>setView('settings')} style={{padding:'7px 12px',borderRadius:'var(--r-f)',border:'1.5px solid var(--out)',background:'var(--card)',cursor:'pointer',fontSize:13,fontWeight:500,fontFamily:'inherit',color:'var(--on-sur-v)',maxWidth:110,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>
          {city||t('cityLabel')}
        </button>
        <button onClick={()=>setView('settings')} style={{width:36,height:36,borderRadius:'var(--r-sm)',border:'1.5px solid var(--out)',background:'var(--card)',cursor:'pointer',display:'grid',placeItems:'center',color:'var(--on-sur-v)'}}>
          <Ic name="settings" size={16}/>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
