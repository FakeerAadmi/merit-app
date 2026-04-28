import React from 'react';
import { Ic } from '../components/Icons';
import ErrorBanner from '../components/ErrorBanner';
import Loader from '../components/Loader';
import { PCP } from '../data/constants';

const LabConfigView = ({ t, lang, labMode, pcP, setPcP, pcB, setPcB, pcU, setPcU, labN, setLabN, loading, error, getLabR, setView }) => (
  <div className="fade-up dark" style={{margin:'0 -24px',padding:'32px 24px 60px',minHeight:'80vh',background:'var(--darkBg)'}}>
    <button className="btn btn-s" onClick={()=>setView('lab')} style={{marginBottom:24,fontSize:13,padding:'8px 16px',borderRadius:'var(--r-f)'}}><Ic name="back" size={14}/> {t('lab')}</button>
    <h2 style={{fontFamily:'Outfit,sans-serif',fontSize:28,fontWeight:800,color:'#F0EBE3',marginBottom:28}}>{labMode==='pc'?t('pcB'):labMode==='setup'?t('gsB'):t('htB')}</h2>

    {labMode==='pc'&&<div className="card" style={{padding:24,marginBottom:14,background:'var(--darkCard)',border:'1px solid var(--darkBorder)'}}>
      <label style={{fontWeight:700,fontSize:14,color:'#F0EBE3',display:'block',marginBottom:4}}>{t('partsC')}</label>
      <p style={{fontSize:12.5,color:'var(--darkSub)',marginBottom:16}}>{t('partsCd')}</p>
      <div style={{display:'flex',flexDirection:'column',gap:10}}>
        {PCP.map(p=>(
          <div key={p.id}>
            <label style={{fontSize:11.5,color:'var(--darkSub)',fontWeight:700,marginBottom:4,display:'block',textTransform:'uppercase',letterSpacing:.6}}>{lang==='mr'?p.nm:p.n}</label>
            <input value={pcP[p.id]||''} onChange={e=>setPcP({...pcP,[p.id]:e.target.value})} placeholder={p.ph}
              style={{width:'100%',padding:'10px 14px',borderRadius:'var(--r-md)',border:'1.5px solid var(--darkBorder)',fontSize:13,background:'rgba(0,0,0,.2)',color:'#F0EBE3',fontFamily:'inherit'}}/>
          </div>
        ))}
      </div>
    </div>}

    {[{label:t('totBudget'),opts:['Under ₹50K','₹50K–80K','₹80K–1.2L','₹1.2L–2L','₹2L+','No limit'],val:pcB,set:setPcB},
      {label:t('priUse'),opts:labMode==='pc'?['Gaming (1080p)','Gaming (1440p)','Gaming (4K)','Video Editing','3D Rendering','Streaming','Programming','General']:labMode==='setup'?['Competitive FPS','RPG/Story','Sim Racing','Streaming + Gaming','Casual + Work']:['Movies','Sports','Music','Gaming','All-rounder'],val:pcU,set:setPcU}
    ].map(sec=>(
      <div key={sec.label} className="card" style={{padding:22,marginBottom:14,background:'var(--darkCard)',border:'1px solid var(--darkBorder)'}}>
        <label style={{fontWeight:700,fontSize:14,color:'#F0EBE3',display:'block',marginBottom:12}}>{sec.label}</label>
        <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
          {sec.opts.map(b=><button key={b} className={`pill ${sec.val===b?'active':''}`} onClick={()=>sec.set(sec.val===b?'':b)}>{b}</button>)}
        </div>
      </div>
    ))}

    <div className="card" style={{padding:22,marginBottom:22,background:'var(--darkCard)',border:'1px solid var(--darkBorder)'}}>
      <label style={{fontWeight:700,fontSize:14,color:'#F0EBE3',display:'block',marginBottom:8}}>{labMode==='theater'?t('roomDet'):t('addNotes')}</label>
      <textarea value={labN} onChange={e=>setLabN(e.target.value)} rows={2}
        style={{width:'100%',padding:'11px 14px',borderRadius:'var(--r-md)',border:'1.5px solid var(--darkBorder)',fontSize:14,resize:'vertical',background:'rgba(0,0,0,.2)',color:'#F0EBE3',fontFamily:'inherit'}}/>
    </div>
    <ErrorBanner error={error}/>
    <button className="btn btn-p" disabled={loading} onClick={getLabR} style={{fontSize:15,padding:'14px 32px'}}>{loading?t('deepDive'):t('runDeep')}</button>
    {loading&&<Loader msg={t('runAnal')} t={t}/>}
  </div>
);

export default LabConfigView;
