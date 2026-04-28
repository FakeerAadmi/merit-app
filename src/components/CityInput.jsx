import React from 'react';
import { CITIES } from '../data/constants';

const CityInput = ({ cityQ, setCityQ, showCD, setShowCD, selC, fCi, t, compact }) => (
  <div style={{position:'relative'}}>
    <input value={cityQ} onChange={e=>{setCityQ(e.target.value);setShowCD(true);}} onFocus={()=>setShowCD(true)}
      placeholder={t('yourCity')} style={{width:'100%',padding:compact?'10px 14px':'12px 16px',borderRadius:'var(--r-f)',border:'1.5px solid var(--out)',fontSize:14.5,background:'var(--card)',fontFamily:'inherit',color:'var(--on-sur)'}}/>
    {showCD&&cityQ&&fCi.length>0&&(
      <div style={{position:'absolute',top:'calc(100% + 6px)',left:0,right:0,background:'var(--card)',borderRadius:'var(--r-lg)',boxShadow:'var(--nm-lg)',zIndex:50,overflow:'hidden',border:'1px solid var(--out-v)'}}>
        {fCi.map(cc=>(
          <div key={cc} onClick={()=>selC(cc)} style={{padding:'11px 16px',cursor:'pointer',fontSize:14,borderBottom:'1px solid var(--out-v)',transition:'background .15s'}}
            onMouseEnter={e=>e.target.style.background='var(--sur-low)'} onMouseLeave={e=>e.target.style.background='transparent'}>{cc}</div>
        ))}
      </div>
    )}
  </div>
);

export default CityInput;
