import React from 'react';
import { Ic } from '../components/Icons';
import ErrorBanner from '../components/ErrorBanner';
import Loader from '../components/Loader';
import ScamBox from '../components/ScamBox';
import { getCatColor } from '../utils/catColors';
import { PRIS } from '../data/constants';

const ConfigureView = ({ t, lang, cat, co, conf, sub, setSub, pris, togP, budget, setBudget, bds, hh, setHh, showHH, notes, setNotes, error, loading, getRec, setView, setCatQ, setShowT, city }) => {
  const c = getCatColor;
  return (
    <div className="fade-up" style={{paddingTop:28}}>
      <button className="btn btn-s" onClick={()=>{setView('browse');setCatQ('');}} style={{marginBottom:22,padding:'8px 16px',fontSize:13,borderRadius:'var(--r-f)'}}>
        <Ic name="back" size={14}/> {t('allCats')}
      </button>

      {/* Category header */}
      <div style={{background:c(cat).bg,borderRadius:'var(--r-xl)',padding:'24px 28px',marginBottom:22,display:'flex',alignItems:'center',gap:16,border:`1.5px solid ${c(cat).chip}`}}>
        <div style={{width:56,height:56,borderRadius:'var(--r-lg)',background:c(cat).chip,display:'grid',placeItems:'center'}}>
          <Ic name={co.icon} size={30} color={c(cat).ic}/>
        </div>
        <div>
          <div style={{fontSize:11,fontWeight:800,color:c(cat).ic,letterSpacing:1.8,textTransform:'uppercase',marginBottom:4}}>{t('step')} 2 {t('of')} 3</div>
          <h2 style={{fontFamily:'Outfit,sans-serif',fontSize:24,fontWeight:800,color:'var(--on-sur)'}}>{t(co.tk)}</h2>
          <p style={{fontSize:13.5,color:'var(--on-sur-v)'}}>{t('configPrefs')}</p>
        </div>
      </div>

      {/* Type */}
      <div className="card nm-flat" style={{padding:22,marginBottom:14}}>
        <label style={{fontWeight:700,fontSize:14,marginBottom:4,display:'block'}}>{t('typeL')}</label>
        <p style={{fontSize:12.5,color:'var(--on-sur-v)',marginBottom:12}}>{t('typeD')}</p>
        <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
          {co.sub.map(s=><button key={s} className={`pill ${sub===s?'active':''}`} onClick={()=>setSub(sub===s?'':s)}>{s}</button>)}
        </div>
      </div>

      {/* Priorities */}
      <div className="card nm-flat" style={{padding:22,marginBottom:14}}>
        <label style={{fontWeight:700,fontSize:14,marginBottom:4,display:'block'}}>{t('whatMat')} <span style={{color:'var(--pri)'}}>*</span></label>
        <p style={{fontSize:12.5,color:'var(--on-sur-v)',marginBottom:12}}>{t('priD')}</p>
        <div className="grid-2" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
          {PRIS.map(o=>{
            if(!conf.pris?.includes(o.id))return null;
            const idx=pris.indexOf(o.id);
            return(
              <div key={o.id} className={`pill ${idx!==-1?'active':''}`}
                onClick={()=>togP(o.id)}
                style={{padding:'11px 14px',display:'flex',alignItems:'center',gap:10,borderRadius:'var(--r-lg)',textAlign:'left'}}>
                {idx!==-1&&<span style={{width:22,height:22,borderRadius:'var(--r-xs)',background:'var(--pri)',color:'#fff',fontSize:12,fontWeight:800,display:'grid',placeItems:'center',flexShrink:0}}>{idx+1}</span>}
                <div>
                  <div style={{fontWeight:700,fontSize:13.5}}>{t(o.l)}</div>
                  <div style={{fontSize:11.5,color:'var(--on-sur-v)',opacity:.8}}>{t(o.d)}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Budget */}
      <div className="card nm-flat" style={{padding:22,marginBottom:14}}>
        <label style={{fontWeight:700,fontSize:14,marginBottom:12,display:'block'}}>{t('budgetL')}</label>
        <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
          {bds.map(b=><button key={b} className={`pill ${budget===b?'active':''}`} onClick={()=>setBudget(budget===b?'':b)}>{b}</button>)}
        </div>
      </div>

      {/* Household */}
      {showHH&&<div className="card nm-flat" style={{padding:22,marginBottom:14}}>
        <label style={{fontWeight:700,fontSize:14,marginBottom:12,display:'block'}}>{t('householdL')}</label>
        <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
          {['1-2','3-4','5-6','7+'].map(s=><button key={s} className={`pill ${hh===s?'active':''}`} onClick={()=>setHh(s)}>{s} {t('members')}</button>)}
        </div>
      </div>}

      {/* Notes */}
      <div className="card nm-flat" style={{padding:22,marginBottom:22}}>
        <label style={{fontWeight:700,fontSize:14,marginBottom:4,display:'block'}}>{t('anyElse')}</label>
        <p style={{fontSize:12.5,color:'var(--on-sur-v)',marginBottom:10}}>{t('anyElseD')}</p>
        <textarea value={notes} onChange={e=>setNotes(e.target.value)} rows={2} placeholder={t('optDet')}
          style={{width:'100%',padding:'11px 14px',borderRadius:'var(--r-md)',border:'1.5px solid var(--out)',fontSize:14,resize:'vertical',background:'var(--sur-low)',fontFamily:'inherit',color:'var(--on-sur)'}}/>
      </div>

      <ErrorBanner error={error}/>
      <div style={{display:'flex',gap:12,alignItems:'center'}}>
        <button className="btn btn-p" disabled={pris.length===0||loading} onClick={getRec} style={{fontSize:15,padding:'14px 32px'}}>
          {loading?t('analyzing'):t('getRec')}
        </button>
        {pris.length===0&&<span style={{fontSize:13,color:'var(--on-sur-v)'}}>{t('selPri')}</span>}
      </div>
      {loading&&<Loader msg={`${t('finding')} ${city||'you'}...`} t={t}/>}
      <ScamBox id={cat} lang={lang} t={t}/>
    </div>
  );
};

export default ConfigureView;
