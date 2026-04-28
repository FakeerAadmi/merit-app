import React from 'react';
import { Ic } from '../components/Icons';

const LabView = ({ t, navigate, setLabMode, setPcP, setPcB, setPcU, setLabN, setResult, setError }) => (
  <div className="fade-up dark" style={{paddingTop:44,margin:'0 -24px',padding:'44px 24px 60px',minHeight:'80vh',background:'var(--darkBg)'}}>
    <div style={{display:'inline-flex',alignItems:'center',gap:7,padding:'5px 14px',borderRadius:'var(--r-f)',background:'rgba(185,98,0,.15)',border:'1px solid rgba(185,98,0,.3)',marginBottom:20}}>
      <span style={{fontSize:10.5,fontWeight:800,color:'var(--pri)',letterSpacing:2,textTransform:'uppercase'}}>{t('labTag')}</span>
    </div>
    <h1 style={{fontFamily:'Outfit,sans-serif',fontSize:36,fontWeight:800,color:'#F0EBE3',marginBottom:10,letterSpacing:-1}}>{t('labT')}</h1>
    <p style={{fontSize:16,color:'var(--darkSub)',marginBottom:36,maxWidth:560}}>{t('labSub')}</p>
    <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}}>
      {[{id:'pc',n:t('pcB'),d:t('pcBD'),emoji:'🖥️'},{id:'setup',n:t('gsB'),d:t('gsBD'),emoji:'🎮'},{id:'theater',n:t('htB'),d:t('htBD'),emoji:'🎬'}].map(m=>(
        <div key={m.id} className="card" onClick={()=>{setLabMode(m.id);navigate('/lab/config');setPcP({});setPcB('');setPcU('');setLabN('');setResult('');setError('');}}
          style={{padding:26,cursor:'pointer',background:'var(--darkCard)',border:'1px solid var(--darkBorder)'}}>
          <div style={{fontSize:36,marginBottom:16}}>{m.emoji}</div>
          <div style={{fontWeight:800,fontSize:17,marginBottom:6,color:'#F0EBE3',fontFamily:'Outfit,sans-serif'}}>{m.n}</div>
          <div style={{fontSize:13,color:'var(--darkSub)',lineHeight:1.5,marginBottom:16}}>{m.d}</div>
          <div style={{color:'var(--pri)',fontSize:13,fontWeight:700,display:'flex',alignItems:'center',gap:4}}>{t('configure')} <Ic name="arrow" size={13} color="var(--pri)"/></div>
        </div>
      ))}
    </div>
  </div>
);

export default LabView;
