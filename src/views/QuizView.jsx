import React from 'react';
import { Ic } from '../components/Icons';
import ErrorBanner from '../components/ErrorBanner';
import Loader from '../components/Loader';
import MarkdownRenderer from '../components/MarkdownRenderer';

const QuizView = ({ t, isResult, navigate, qS, setQS, qA, setQA, quizQs, loading, error, runQ, result }) => {
  if (isResult) {
    return (
      <div className="fade-up" style={{paddingTop:28}}>
        <div style={{display:'flex',gap:8,marginBottom:20}}>
          <button className="btn btn-s" onClick={()=>{navigate('/quiz');setQS(0);}} style={{fontSize:13,padding:'8px 16px',borderRadius:'var(--r-f)'}}><Ic name="back" size={14}/> {t('retake')}</button>
          <button className="btn btn-s" onClick={()=>navigate('/')} style={{fontSize:13,padding:'8px 16px',borderRadius:'var(--r-f)'}}>{t('browseAll')}</button>
        </div>
        <div className="card nm-flat" style={{padding:'28px 26px',lineHeight:1.75}}><MarkdownRenderer content={result}/></div>
      </div>
    );
  }

  return (
    <div className="fade-up" style={{paddingTop:40}}>
      <button className="btn btn-s" onClick={()=>navigate('/')} style={{marginBottom:22,fontSize:13,padding:'8px 16px',borderRadius:'var(--r-f)'}}><Ic name="back" size={14}/> {t('back')}</button>
      <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10}}>
        <div style={{width:40,height:40,borderRadius:'var(--r-md)',background:'#F5F3FF',display:'grid',placeItems:'center'}}><Ic name="quiz" size={22} color="#7C3AED"/></div>
        <h2 style={{fontFamily:'Outfit,sans-serif',fontSize:26,fontWeight:800}}>{t('hmdT')}</h2>
      </div>
      <p style={{color:'var(--on-sur-v)',fontSize:14,marginBottom:24}}>{t('question')} {qS+1} {t('of')} {quizQs.length}</p>
      <div style={{height:5,background:'var(--sur-top)',borderRadius:'var(--r-f)',marginBottom:28,overflow:'hidden'}}>
        <div style={{height:'100%',background:'linear-gradient(90deg,#F59E0B,var(--pri))',borderRadius:'var(--r-f)',width:`${((qS+1)/quizQs.length)*100}%`,transition:'width .4s var(--ease)',boxShadow:'0 2px 8px rgba(185,98,0,.4)'}}/>
      </div>
      <div className="card nm-flat" style={{padding:28,background:'var(--sur-low)'}}>
        <h3 style={{fontSize:20,fontWeight:800,marginBottom:22,fontFamily:'Outfit,sans-serif'}}>{quizQs[qS].q}</h3>
        <div style={{display:'flex',flexDirection:'column',gap:9}}>
          {quizQs[qS].o.map(o=>(
            <button key={o} className={`pill ${qA[qS]===o?'active':''}`}
              onClick={()=>{const a=[...qA];a[qS]=o;setQA(a);if(qS<quizQs.length-1)setTimeout(()=>setQS(qS+1),200);}}
              style={{padding:'14px 18px',textAlign:'left',fontSize:14.5,borderRadius:'var(--r-lg)'}}>
              {o}
            </button>
          ))}
        </div>
      </div>
      <div style={{display:'flex',gap:8,marginTop:20}}>
        {qS>0&&<button className="btn btn-s" onClick={()=>setQS(qS-1)} style={{borderRadius:'var(--r-f)'}}>{t('prev')}</button>}
        {qS===quizQs.length-1&&qA[qS]&&<button className="btn btn-p" disabled={loading} onClick={runQ} style={{borderRadius:'var(--r-f)'}}>{loading?t('thinking'):t('getRec2')}</button>}
      </div>
      <ErrorBanner error={error}/>
      {loading&&<Loader msg={t('figuring')} t={t}/>}
    </div>
  );
};

export default QuizView;
