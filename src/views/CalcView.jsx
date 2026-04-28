import React from 'react';
import { Ic } from '../components/Icons';

const CalcView = ({ t, navigate, cW, setCW, cH, setCH, cR, setCR, mC, wts }) => (
  <div className="fade-up" style={{paddingTop:40}}>
    <button className="btn btn-s" onClick={()=>navigate('/tools')} style={{marginBottom:22,fontSize:13,padding:'8px 16px',borderRadius:'var(--r-f)'}}><Ic name="back" size={14}/> {t('tools')}</button>
    <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:28}}>
      <div style={{width:44,height:44,borderRadius:'var(--r-md)',background:'#FFFBEB',display:'grid',placeItems:'center'}}><Ic name="zap" size={24} color="#D97706"/></div>
      <h2 style={{fontFamily:'Outfit,sans-serif',fontSize:26,fontWeight:800}}>{t('calcT')}</h2>
    </div>
    <div className="card nm-flat" style={{padding:26,background:'var(--sur-low)'}}>
      {[{label:t('wattage'),val:cW,set:setCW,ph:t('wattPH'),hint:t('wattH')},
        {label:t('hrsDay'),val:cH,set:setCH,ph:t('hrsPH'),hint:null},
        {label:t('elRate'),val:cR,set:setCR,ph:'8',hint:t('rateH')}
      ].map(({label,val,set,ph,hint})=>(
        <div key={label} style={{marginBottom:18}}>
          <label style={{fontWeight:700,fontSize:14,display:'block',marginBottom:6}}>{label}</label>
          <input type="number" value={val} onChange={e=>set(e.target.value)} placeholder={ph}
            style={{width:'100%',padding:'12px 16px',borderRadius:'var(--r-f)',border:'1.5px solid var(--out)',fontSize:15,background:'var(--card)',fontFamily:'inherit',color:'var(--on-sur)'}}/>
          {hint&&<div style={{fontSize:12,color:'var(--on-sur-v)',marginTop:4}}>{hint}</div>}
        </div>
      ))}
      {mC&&<div style={{background:'linear-gradient(135deg,#FFF7ED,#FFF3E0)',borderRadius:'var(--r-xl)',padding:'24px 28px',textAlign:'center',border:'1.5px solid #FDDBA8',boxShadow:'var(--nm-sm)'}}>
        <div style={{fontSize:13,color:'var(--pri)',fontWeight:700,marginBottom:6}}>{t('estMonth')}</div>
        <div style={{fontSize:48,fontWeight:800,color:'var(--pri)',fontFamily:'Outfit,sans-serif',letterSpacing:-1}}>₹{parseInt(mC).toLocaleString()}</div>
        <div style={{fontSize:13,color:'var(--on-sur-v)',marginTop:8}}>{cW}W × {cH}hrs × 30 ÷ 1000 × ₹{cR} = <strong>₹{mC}/{t('month')}</strong></div>
        <div style={{fontSize:13,color:'var(--on-sur-v)',marginTop:4}}>{t('yearly')}: <strong>₹{(parseInt(mC)*12).toLocaleString()}</strong></div>
      </div>}
    </div>
    <div className="card nm-flat" style={{padding:20,marginTop:14}}>
      <div style={{fontWeight:700,fontSize:14,marginBottom:12}}>{t('comWatt')}</div>
      <div style={{display:'flex',flexWrap:'wrap',gap:7}}>
        {wts.map(([n,w])=><button key={n} className="pill" onClick={()=>setCW(w)} style={{fontSize:12.5,padding:'6px 14px'}}>{n}: {w}W</button>)}
      </div>
    </div>
  </div>
);

export default CalcView;
