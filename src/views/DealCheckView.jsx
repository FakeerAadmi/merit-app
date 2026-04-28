import React from 'react';
import { Ic } from '../components/Icons';
import ErrorBanner from '../components/ErrorBanner';
import Loader from '../components/Loader';
import MarkdownRenderer from '../components/MarkdownRenderer';

const DealCheckView = ({ t, isResult, navigate, dP, setDP, dPr, setDPr, loading, error, chkD, result }) => {
  if (isResult) {
    return (
      <div className="fade-up" style={{paddingTop:28}}>
        <div style={{display:'flex',gap:8,marginBottom:20}}>
          <button className="btn btn-s" onClick={()=>navigate('/deal')} style={{fontSize:13,padding:'8px 16px',borderRadius:'var(--r-f)'}}><Ic name="back" size={14}/> {t('checkAn')}</button>
        </div>
        <div style={{background:'var(--sur-low)',borderRadius:'var(--r-xl)',padding:'14px 20px',marginBottom:16,display:'flex',alignItems:'center',gap:10,border:'1px solid var(--out-v)'}}>
          <Ic name="deal" size={18} color="var(--pri)"/>
          <div><strong>{dP}</strong> — <strong>₹{parseInt(dPr).toLocaleString()}</strong></div>
        </div>
        <div className="card nm-flat" style={{padding:'28px 26px',lineHeight:1.75}}><MarkdownRenderer content={result}/></div>
      </div>
    );
  }

  return (
    <div className="fade-up" style={{paddingTop:40}}>
      <button className="btn btn-s" onClick={()=>navigate('/tools')} style={{marginBottom:22,fontSize:13,padding:'8px 16px',borderRadius:'var(--r-f)'}}><Ic name="back" size={14}/> {t('tools')}</button>
      <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:28}}>
        <div style={{width:44,height:44,borderRadius:'var(--r-md)',background:'#F0FDF4',display:'grid',placeItems:'center'}}><Ic name="deal" size={24} color="#16A34A"/></div>
        <h2 style={{fontFamily:'Outfit,sans-serif',fontSize:26,fontWeight:800}}>{t('dealT')}</h2>
      </div>
      <div className="card nm-flat" style={{padding:26,background:'var(--sur-low)'}}>
        <p style={{fontSize:14,color:'var(--on-sur-v)',marginBottom:22}}>{t('dealSub')}</p>
        {[{label:t('prodName'),val:dP,set:setDP,ph:t('prodPH'),type:'text'},{label:t('priceQ'),val:dPr,set:setDPr,ph:t('pricePH'),type:'number'}].map(({label,val,set,ph,type})=>(
          <div key={label} style={{marginBottom:18}}>
            <label style={{fontWeight:700,fontSize:14,display:'block',marginBottom:6}}>{label}</label>
            <input type={type} value={val} onChange={e=>set(e.target.value)} placeholder={ph}
              style={{width:'100%',padding:'12px 16px',borderRadius:'var(--r-f)',border:'1.5px solid var(--out)',fontSize:15,background:'var(--card)',fontFamily:'inherit',color:'var(--on-sur)'}}/>
          </div>
        ))}
        <ErrorBanner error={error}/>
        <button className="btn btn-p" disabled={!dP||!dPr||loading} onClick={chkD} style={{fontSize:14.5,padding:'13px 30px'}}>{loading?t('checking'):t('verDeal')}</button>
      </div>
      {loading&&<Loader msg={t('crossCheck')} t={t}/>}
    </div>
  );
};

export default DealCheckView;
