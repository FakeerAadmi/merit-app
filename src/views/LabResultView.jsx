import React from 'react';
import { Ic } from '../components/Icons';
import MarkdownRenderer from '../components/MarkdownRenderer';

const LabResultView = ({ t, result, setView, rR }) => (
  <div ref={rR} className="fade-up dark" style={{margin:'0 -24px',padding:'32px 24px 60px',minHeight:'80vh',background:'var(--darkBg)'}}>
    <div style={{display:'flex',gap:8,marginBottom:24}}>
      <button className="btn btn-s" onClick={()=>setView('labConfig')} style={{fontSize:13,padding:'8px 16px',borderRadius:'var(--r-f)'}}><Ic name="back" size={14}/> {t('adjust')}</button>
      <button className="btn btn-s" onClick={()=>setView('lab')} style={{fontSize:13,padding:'8px 16px',borderRadius:'var(--r-f)'}}>{t('labHome')}</button>
    </div>
    <div className="card" style={{padding:'30px 28px',lineHeight:1.8,background:'var(--darkCard)',border:'1px solid var(--darkBorder)'}}>
      <div style={{color:'#F0EBE3'}}><MarkdownRenderer content={result}/></div>
    </div>
    <p style={{textAlign:'center',color:'var(--darkSub)',fontSize:12,padding:'24px 0',opacity:.6}}>{t('labDisc')}</p>
  </div>
);

export default LabResultView;
