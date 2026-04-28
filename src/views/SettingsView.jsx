import React from 'react';
import { Ic } from '../components/Icons';
import CityInput from '../components/CityInput';

const SettingsView = ({ t, lang, setL, apiKey, setApiKey, apiSaved, saveK, setView, adultMode, setAdultMode, setShowAgeGate, cityQ, setCityQ, showCD, setShowCD, selC, fCi }) => (
  <div className="fade-up" style={{paddingTop:40}}>
    <h2 style={{fontFamily:'Outfit,sans-serif',fontSize:28,fontWeight:800,marginBottom:26}}>{t('settings')}</h2>
    {[
      {label:t('gemKey'),sub:t('gemKeyD'),content:(
        <div style={{display:'flex',gap:8}}>
          <input type="password" value={apiKey} onChange={e=>setApiKey(e.target.value)} placeholder="AIza..."
            style={{flex:1,padding:'11px 14px',borderRadius:'var(--r-f)',border:'1.5px solid var(--out)',fontSize:13.5,fontFamily:"'JetBrains Mono'",background:'var(--sur-low)',color:'var(--on-sur)'}}/>
          <button className="btn btn-p" onClick={saveK} style={{padding:'11px 22px'}}>{apiSaved?t('saved'):t('save')}</button>
        </div>
      )},
      {label:t('cityLabel'),sub:t('cityD'),content:<CityInput cityQ={cityQ} setCityQ={setCityQ} showCD={showCD} setShowCD={setShowCD} selC={selC} fCi={fCi} t={t}/>},
      {label:t('language'),sub:t('langD'),content:(
        <div style={{display:'flex',gap:8}}>
          {[['en','English'],['mr','मराठी']].map(([k,l])=><button key={k} className={`pill ${lang===k?'active':''}`} onClick={()=>setL(k)} style={{padding:'10px 22px',fontSize:14.5}}>{l}</button>)}
        </div>
      )},
      {label:'18+ Intimate Wellness',sub:'Unlock the adult wellness category.',content:(
        <button className={`pill ${adultMode?'active':''}`} onClick={()=>{
          if(adultMode){setAdultMode(false);localStorage.setItem('m_adult','false');}
          else setShowAgeGate(true);
        }} style={{padding:'10px 22px',fontSize:14.5,background:adultMode?'rgba(220,38,38,0.15)':'var(--sur-low)',color:adultMode?'#DC2626':'var(--on-sur)',border:adultMode?'1px solid rgba(220,38,38,0.3)':'1px solid var(--out)'}}>
          {adultMode?'Enabled (18+)':'Disabled'}
        </button>
      )}
    ].map(sec=>(
      <div key={sec.label} className="card nm-flat" style={{padding:24,marginBottom:14}}>
        <label style={{fontWeight:700,fontSize:15,display:'block',marginBottom:4}}>{sec.label}</label>
        <p style={{fontSize:13,color:'var(--on-sur-v)',marginBottom:14}}>{sec.sub}</p>
        {sec.content}
      </div>
    ))}
    <button className="btn btn-s" onClick={()=>setView('home')} style={{marginTop:8}}><Ic name="back" size={16}/> {t('back')}</button>
  </div>
);

export default SettingsView;
