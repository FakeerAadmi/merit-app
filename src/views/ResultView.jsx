import React from 'react';
import { Ic } from '../components/Icons';
import ProductModal from '../components/ProductModal';
import ScamBox from '../components/ScamBox';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { getCatColor } from '../utils/catColors';
import { TERMO } from '../data/terminology';

const ResultView = ({ t, lang, cat, co, sub, budget, hh, city, pR, result, activeTile, setActiveTile, togS, saved, setView, setCatQ, showT, setShowT, rR, error }) => {
  const c = getCatColor;
  const termos = TERMO[cat] || TERMO.default || [];
  return (
    <div ref={rR} className="fade-up" style={{paddingTop:28}}>
      <div style={{display:'flex',gap:8,marginBottom:20}}>
        <button className="btn btn-s" onClick={()=>setView('configure')} style={{fontSize:13,padding:'8px 16px',borderRadius:'var(--r-f)'}}><Ic name="back" size={14}/> {t('adjust')}</button>
        <button className="btn btn-s" onClick={()=>{setView('home');setCatQ('');}} style={{fontSize:13,padding:'8px 16px',borderRadius:'var(--r-f)'}}>{t('newSearch')}</button>
      </div>

      {/* Context chip */}
      <div style={{background:c(cat).bg,border:`1.5px solid ${c(cat).chip}`,borderRadius:'var(--r-xl)',padding:'14px 20px',marginBottom:22,display:'flex',alignItems:'center',gap:12,flexWrap:'wrap'}}>
        <div style={{width:36,height:36,borderRadius:'var(--r-md)',background:c(cat).chip,display:'grid',placeItems:'center'}}>
          <Ic name={co?.icon} size={20} color={c(cat).ic}/>
        </div>
        <div style={{flex:1}}>
          <span style={{fontWeight:800,fontSize:15}}>{t(co?.tk)}</span>
          {sub&&<span style={{color:'var(--on-sur-v)',fontSize:14}}> · {sub}</span>}
          <div style={{fontSize:12,color:'var(--on-sur-v)',marginTop:2}}>{city&&`${city} · `}{budget&&`${budget} · `}{hh} {t('members')}</div>
        </div>
        <div style={{fontSize:11,fontWeight:700,color:c(cat).ic,background:'rgba(255,255,255,.6)',padding:'3px 10px',borderRadius:'var(--r-f)'}}>{t('step')} 3 {t('of')} 3</div>
      </div>

      {/* Product tile modal */}
      <ProductModal activeTile={activeTile} setActiveTile={setActiveTile} togS={togS} saved={saved} pR={pR}/>

      {/* Results grid */}
      {pR&&pR.recs?(
        <div style={{pointerEvents:activeTile?'none':'auto'}}>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(276px,1fr))',gap:16,marginBottom:22}}>
            {pR.recs.map((r,i)=>{
              const cl=c(cat);
              return(
                <div key={i} className="card"
                  onClick={()=>setActiveTile(r)}
                  style={{padding:22,display:'flex',flexDirection:'column',position:'relative',cursor:'pointer',animation:`fadeUp .5s var(--ease) ${i*.07}s both`,overflow:'hidden'}}>
                  {/* Tonal top stripe */}
                  <div style={{position:'absolute',top:0,left:0,right:0,height:4,background:cl.ic,opacity:.6,borderRadius:'var(--r-lg) var(--r-lg) 0 0'}}/>
                  <div style={{fontSize:11,fontWeight:800,color:cl.ic,marginBottom:8,marginTop:4}}>{r.badge}</div>
                  <div style={{fontWeight:800,fontSize:15,marginBottom:4,paddingRight:28,lineHeight:1.3,fontFamily:'Outfit,sans-serif'}}>{r.name}</div>
                  <div style={{fontSize:22,fontWeight:800,marginBottom:10,color:'var(--pri)'}}> ₹{parseInt(r.price.toString().replace(/\D/g,'')||'0').toLocaleString()}</div>
                  <div style={{fontSize:13,color:'var(--on-sur-v)',marginBottom:12,flex:1,lineHeight:1.5}}>{r.summary||r.why}</div>
                  <div style={{background:cl.bg,padding:'10px 14px',borderRadius:'var(--r-md)',fontSize:12,marginBottom:10,border:`1px solid ${cl.chip}`}}>
                    {(Array.isArray(r.specs)?r.specs:Object.entries(r.specs||{}).map(([k,v])=>`${k}: ${v}`)).slice(0,3).map((s,j)=><div key={j} style={{color:'var(--on-sur-v)',marginBottom:3,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',fontSize:11.5}}>◆ {s}</div>)}
                  </div>
                  <div style={{fontSize:12,color:'#DC2626',lineHeight:1.4}}><strong>Watch out:</strong> {Array.isArray(r.cons)?r.cons[0]:r.cons}</div>
                  <button onClick={e=>{e.stopPropagation();togS(r);}} style={{position:'absolute',top:16,right:14,background:'rgba(255,255,255,.7)',border:'none',cursor:'pointer',padding:6,borderRadius:'var(--r-sm)'}}>
                    <Ic name="heart" size={16} color={saved.find(x=>x.name===r.name)?'var(--pri)':'var(--on-sur-v)'}/>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Expert verdict */}
          <div className="card nm-flat" style={{padding:28,marginBottom:16,background:'var(--sur-low)'}}>
            <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:14}}>
              <div style={{width:36,height:36,borderRadius:'var(--r-md)',background:'var(--accentBg)',display:'grid',placeItems:'center'}}><span style={{fontSize:18}}>🎯</span></div>
              <h3 style={{fontSize:17,fontWeight:800,fontFamily:'Outfit,sans-serif'}}>Expert Verdict</h3>
            </div>
            <p style={{fontSize:14,lineHeight:1.7,color:'var(--on-sur-v)',marginBottom:20}}>{pR.comparison}</p>
            {pR.insider&&<div style={{background:'var(--accentBg)',borderRadius:'var(--r-md)',padding:'13px 16px',marginBottom:20,fontSize:13.5,lineHeight:1.6,border:'1px solid rgba(185,98,0,.2)'}}>
              <strong>💡 Insider: </strong><span style={{color:'var(--on-sur-v)'}}>{pR.insider}</span>
            </div>}
            <h3 style={{fontSize:15,fontWeight:800,marginBottom:10,fontFamily:'Outfit,sans-serif'}}>Buying Advice</h3>
            <div style={{display:'flex',flexDirection:'column',gap:8}}>
              {pR.advice.map((a,i)=><div key={i} style={{display:'flex',gap:10,fontSize:13.5,color:'var(--on-sur-v)',lineHeight:1.5}}>
                <span style={{width:22,height:22,borderRadius:'var(--r-xs)',background:'var(--accentBg)',display:'grid',placeItems:'center',flexShrink:0,fontSize:11,fontWeight:800,color:'var(--pri)'}}>{i+1}</span>
                <span>{a}</span>
              </div>)}
            </div>
          </div>
        </div>
      ):<div className="card nm-flat" style={{padding:'28px 26px',lineHeight:1.75}}><MarkdownRenderer content={result}/></div>}

      {/* Terminology */}
      {termos.length>0&&<div style={{marginTop:22}}>
        <button onClick={()=>setShowT(!showT)} style={{width:'100%',padding:'16px 22px',cursor:'pointer',display:'flex',alignItems:'center',gap:12,background:showT?'var(--accentBg)':'var(--sur-low)',borderRadius:'var(--r-xl)',border:`1.5px solid ${showT?'var(--pri)':'var(--out)'}`,fontFamily:'inherit',transition:'all .2s'}}>
          <Ic name="book" size={20} color="var(--pri)"/>
          <div style={{flex:1,textAlign:'left'}}>
            <div style={{fontWeight:700,fontSize:15,color:'var(--pri)'}}>{t('termoT')}</div>
            <div style={{fontSize:12.5,color:'var(--on-sur-v)'}}>{t('termoSub')}</div>
          </div>
          <div style={{transform:showT?'rotate(90deg)':'rotate(0)',transition:'transform .2s'}}><Ic name="arrow" size={17} color="var(--pri)"/></div>
        </button>
        {showT&&<div style={{marginTop:10,animation:'fadeUp .3s var(--ease)'}}>
          {termos.map((tm,i)=><div key={i} className="termo-card">
            <div style={{fontWeight:700,fontSize:14.5,color:'var(--on-sur)',marginBottom:5}}>{lang==='mr'?(tm.tm||tm.t):tm.t}</div>
            <div style={{fontSize:13.5,lineHeight:1.65,color:'var(--on-sur-v)'}}>{lang==='mr'?tm.mr:tm.en}</div>
          </div>)}
        </div>}
      </div>}

      <ScamBox id={cat} lang={lang} t={t}/>
      <p style={{textAlign:'center',color:'var(--on-sur-v)',fontSize:12,padding:'24px 0',opacity:.6}}>{t('aiDisc')}</p>
    </div>
  );
};

export default ResultView;
