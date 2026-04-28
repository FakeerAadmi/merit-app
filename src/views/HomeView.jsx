import React from 'react';
import { Ic } from '../components/Icons';
import HeroArt from '../components/HeroArt';
import { getCatColor } from '../utils/catColors';

const HomeView = ({ t, setView, setCat, setSub, setPris, setBudget, setNotes, setResult, setError, setShowT, setQS, setQA, apiSaved, TRENDING }) => {
  const c = getCatColor;
  return (
    <div className="fade-up">

      {/* Hero */}
      <div style={{borderRadius:'var(--r-xl)',overflow:'hidden',margin:'28px 0 36px',background:'linear-gradient(135deg,#FFF8F0 0%,#FFF3E0 40%,#FFF8EE 100%)',border:'1.5px solid #FDDBA8',boxShadow:'var(--nm-md)',position:'relative'}}>
        {/* Decorative dot grid */}
        <div style={{position:'absolute',inset:0,backgroundImage:'radial-gradient(circle,rgba(185,98,0,.12) 1.5px,transparent 1.5px)',backgroundSize:'28px 28px',pointerEvents:'none',opacity:.7}}/>
        {/* Large morph blob */}
        <div className="morph-blob" style={{position:'absolute',width:320,height:280,background:'radial-gradient(ellipse,rgba(245,158,11,.18),transparent 70%)',right:-60,top:-40,pointerEvents:'none'}}/>

        <div className="hero-split" style={{display:'grid',gridTemplateColumns:'1fr 340px',gap:0,position:'relative',zIndex:1}}>
          {/* Left text */}
          <div style={{padding:'56px 48px 56px 52px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <div style={{display:'inline-flex',alignItems:'center',gap:7,padding:'5px 14px',borderRadius:'var(--r-f)',background:'rgba(185,98,0,.12)',border:'1px solid rgba(185,98,0,.2)',marginBottom:22,width:'fit-content'}}>
              <span style={{fontSize:13}}>✦</span>
              <span style={{fontSize:11,fontWeight:800,color:'var(--pri)',letterSpacing:1.8,textTransform:'uppercase'}}>{t('heroTag')}</span>
            </div>
            <h1 className="hero-t" style={{fontFamily:'Outfit,sans-serif',fontSize:46,fontWeight:800,lineHeight:1.06,marginBottom:18,letterSpacing:-1.5,color:'var(--on-sur)'}}>
              {t('heroT1')}<br/>
              <span style={{color:'var(--pri)'}}>{t('heroT2')}<em style={{fontStyle:'italic'}}>{t('heroT2em')}</em></span>{t('heroT2dot')}
            </h1>
            <p style={{fontSize:16,color:'var(--on-sur-v)',maxWidth:400,lineHeight:1.65,marginBottom:36}}>{t('heroSub')}</p>
            <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
              <button className="btn btn-p" onClick={()=>{setView('quiz');setQS(0);setQA([]);}} style={{fontSize:15.5,padding:'14px 32px'}}>
                {t('helpDecide')} →
              </button>
              <button className="btn btn-s" onClick={()=>setView('browse')} style={{fontSize:14.5,padding:'14px 24px',borderRadius:'var(--r-f)'}}>
                {t('browseAllCta')}
              </button>
            </div>
          </div>
          {/* Right illustration */}
          <div className="hero-art" style={{padding:'24px 24px 16px 0',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <HeroArt/>
          </div>
        </div>
      </div>

      {/* API key banner */}
      {!apiSaved&&(
        <div style={{background:'var(--card)',borderRadius:'var(--r-xl)',padding:'18px 24px',marginBottom:32,display:'flex',alignItems:'center',gap:16,flexWrap:'wrap',border:'2px dashed var(--pri)',borderStyle:'dashed'}}>
          <div style={{width:40,height:40,borderRadius:'var(--r-md)',background:'var(--pri-c)',display:'grid',placeItems:'center',flexShrink:0}}>
            <span style={{fontSize:20}}>🔑</span>
          </div>
          <div style={{flex:1,minWidth:180}}>
            <div style={{fontWeight:700,fontSize:14}}>{t('oneTime')}</div>
            <div style={{fontSize:13,color:'var(--on-sur-v)'}}>{t('oneTimeD')}</div>
          </div>
          <button className="btn btn-p" onClick={()=>setView('settings')} style={{padding:'9px 20px',fontSize:13}}>{t('setUp')}</button>
        </div>
      )}

      {/* Trending section */}
      <div style={{marginBottom:40}}>
        <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:18}}>
          <span style={{fontSize:22}}>🔥</span>
          <h2 style={{fontFamily:'Outfit,sans-serif',fontSize:22,fontWeight:800,letterSpacing:-.5}}>{t('trendTitle')}</h2>
        </div>
        <div className="grid-3" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:14}}>
          {TRENDING.map((item,i)=>{
            const cl=c(item.cat);
            return(
              <div key={item.cat} className="cat-card"
                onClick={()=>{setCat(item.cat);setView('configure');setSub('');setPris([]);setBudget('');setNotes('');setResult('');setError('');setShowT(false);}}
                style={{padding:'22px 20px',background:cl.bg,animation:`fadeUp .5s var(--ease) ${i*.06}s both`,display:'flex',flexDirection:'column'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:14}}>
                  <div style={{width:44,height:44,borderRadius:'var(--r-md)',background:cl.chip,display:'grid',placeItems:'center'}}>
                    <Ic name={item.icon} size={24} color={cl.ic}/>
                  </div>
                  <span style={{fontSize:11,fontWeight:700,color:cl.ic,background:'rgba(255,255,255,.7)',padding:'3px 10px',borderRadius:'var(--r-f)',backdropFilter:'blur(4px)'}}>{item.tag}</span>
                </div>
                <div style={{fontWeight:800,fontSize:15,marginBottom:5,color:'var(--on-sur)',fontFamily:'Outfit,sans-serif'}}>{item.label}</div>
                <div style={{fontSize:12.5,color:'var(--on-sur-v)',lineHeight:1.5,flex:1}}>{item.desc}</div>
                <div style={{marginTop:14,display:'flex',alignItems:'center',gap:4,fontSize:12,fontWeight:700,color:cl.ic}}>
                  Explore <Ic name="arrow" size={12} color={cl.ic}/>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick tools */}
      <div style={{marginBottom:40}}>
        <h2 style={{fontFamily:'Outfit,sans-serif',fontSize:22,fontWeight:800,letterSpacing:-.5,marginBottom:16}}>{t('quickTools')}</h2>
        <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
          {[
            {icon:'quiz',label:t('helpDecide'),desc:'4 questions',action:()=>{setView('quiz');setQS(0);setQA([]);},bg:'#F5F3FF',ic:'#7C3AED'},
            {icon:'calc',label:t('elecCost'),desc:'Monthly cost',action:()=>setView('calc'),bg:'#FFF7ED',ic:'#D97706'},
            {icon:'deal',label:t('goodDeal'),desc:'Price verify',action:()=>{setView('dealCheck');},bg:'#F0FDF4',ic:'#16A34A'},
          ].map(tool=>(
            <button key={tool.label} onClick={tool.action}
              style={{padding:'16px 20px',display:'flex',alignItems:'center',gap:12,cursor:'pointer',flexShrink:0,background:tool.bg,border:'1.5px solid transparent',borderRadius:'var(--r-xl)',fontFamily:'inherit',transition:'all .25s var(--spring)',boxShadow:'var(--nm-sm)'}}
              onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-3px) scale(1.02)';e.currentTarget.style.boxShadow='var(--nm-md)';}}
              onMouseLeave={e=>{e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='var(--nm-sm)';}}>
              <div style={{width:40,height:40,borderRadius:'var(--r-md)',background:'rgba(255,255,255,.7)',display:'grid',placeItems:'center'}}>
                <Ic name={tool.icon} size={20} color={tool.ic}/>
              </div>
              <div style={{textAlign:'left'}}>
                <div style={{fontWeight:700,fontSize:14,color:'var(--on-sur)'}}>{tool.label}</div>
                <div style={{fontSize:12,color:'var(--on-sur-v)'}}>{tool.desc}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Trust strip */}
      <div style={{display:'flex',justifyContent:'center',gap:32,flexWrap:'wrap',borderTop:'1px solid var(--out-v)',paddingTop:24}}>
        {[['shield',t('noBias'),'#16A34A'],['zap',t('aiPow'),'var(--pri)'],['check',t('indSpec'),'#7C3AED'],['book','18 Categories','#2563EB']].map(([ic,l,clr])=>(
          <div key={l} style={{display:'flex',alignItems:'center',gap:7,fontSize:13,color:'var(--on-sur-v)',fontWeight:600}}>
            <div style={{width:24,height:24,borderRadius:'var(--r-xs)',background:'rgba(0,0,0,.04)',display:'grid',placeItems:'center'}}>
              <Ic name={ic} size={13} color={clr}/>
            </div>{l}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeView;
