import React from 'react';
import { Ic } from '../components/Icons';

const ToolsView = ({ t, navigate, setQS, setQA, setCW, setCH, setDP, setDPr, setResult, setError, setCompSel }) => (
  <div className="fade-up" style={{paddingTop:40}}>
    <h2 style={{fontFamily:'Outfit,sans-serif',fontSize:28,fontWeight:800,marginBottom:8}}>{t('toolsT')}</h2>
    <p style={{fontSize:15.5,color:'var(--on-sur-v)',marginBottom:28}}>{t('toolsSub')}</p>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
      {[
        {i:'quiz',n:t('hmdT'),d:t('hmdD'),bg:'#F5F3FF',ic:'#7C3AED',a:()=>{navigate('/quiz');setQS(0);setQA([]);setResult('');setError('');}},
        {i:'calc',n:t('elCalc'),d:t('elCalcD'),bg:'#FFFBEB',ic:'#D97706',a:()=>{navigate('/calc');setCW('');setCH('');}},
        {i:'deal',n:t('dealC'),d:t('dealCD'),bg:'#F0FDF4',ic:'#16A34A',a:()=>{navigate('/deal');setDP('');setDPr('');setResult('');setError('');}},
        {i:'compare',n:t('compP'),d:t('compPD'),bg:'#EFF6FF',ic:'#2563EB',a:()=>{navigate('/compare');setCompSel([]); }}
      ].map(x=>(
        <div key={x.n} className="cat-card" onClick={x.a} style={{padding:26,cursor:'pointer',background:x.bg}}>
          <div style={{width:48,height:48,borderRadius:'var(--r-lg)',background:'rgba(255,255,255,.7)',display:'grid',placeItems:'center',marginBottom:14}}>
            <Ic name={x.i} size={26} color={x.ic}/>
          </div>
          <div style={{fontWeight:800,fontSize:16,marginBottom:5,fontFamily:'Outfit,sans-serif'}}>{x.n}</div>
          <div style={{fontSize:13.5,color:'var(--on-sur-v)',lineHeight:1.5}}>{x.d}</div>
        </div>
      ))}
    </div>
  </div>
);

export default ToolsView;
