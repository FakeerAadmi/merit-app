import React from 'react';
import { Ic } from './Icons';
import { getScamTips } from '../utils/scamTips';

const ScamBox = ({ id, lang, t }) => {
  const tips = getScamTips(id, lang);
  return (
    <div style={{borderRadius:'var(--r-xl)',padding:'22px 26px',background:'linear-gradient(135deg,#F0FDF4,#ECFDF5)',border:'1.5px solid #BBF7D0',marginTop:22}}>
      <div style={{display:'flex',gap:10,alignItems:'center',marginBottom:14}}>
        <div style={{width:36,height:36,borderRadius:'var(--r-md)',background:'#DCFCE7',display:'grid',placeItems:'center'}}>
          <Ic name="shield" size={20} color="#16A34A"/>
        </div>
        <span style={{fontSize:16,fontWeight:700,fontFamily:'Outfit,sans-serif'}}>{t('scamT')}</span>
      </div>
      {tips.map((tip,i)=>(
        <div key={i} style={{display:'flex',gap:10,marginBottom:7,fontSize:13.5,lineHeight:1.55,color:'var(--on-sur-v)'}}>
          <span style={{color:'#16A34A',flexShrink:0,fontSize:12,marginTop:2}}>✓</span><span>{tip}</span>
        </div>
      ))}
    </div>
  );
};

export default ScamBox;
