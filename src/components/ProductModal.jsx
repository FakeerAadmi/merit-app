import React from 'react';
import { Ic } from './Icons';

const ProductModal = ({ activeTile, setActiveTile, togS, saved, pR }) => {
  if (!activeTile) return null;
  return (
    <div onClick={()=>setActiveTile(null)} style={{position:'fixed',inset:0,zIndex:999,background:'rgba(12,7,2,.72)',backdropFilter:'blur(16px)',WebkitBackdropFilter:'blur(16px)',display:'flex',alignItems:'center',justifyContent:'center',padding:20}}>
      <div className="glass-card" onClick={e=>e.stopPropagation()}
        style={{width:'100%',maxWidth:700,overflow:'hidden',animation:'fadeUp .26s cubic-bezier(.22,1,.36,1)',position:'relative',display:'flex',flexDirection:'column'}}>
        {/* Header */}
        <div style={{padding:'20px 24px 16px',borderBottom:'1px solid rgba(255,255,255,.32)',display:'flex',alignItems:'flex-start',gap:14}}>
          {activeTile.brand_domain&&<img src={`https://logo.clearbit.com/${activeTile.brand_domain}`} alt="brand" style={{width:44,height:44,borderRadius:'var(--r-md)',objectFit:'contain',background:'rgba(255,255,255,.9)',padding:5,boxShadow:'var(--nm-sm)',flexShrink:0}} onError={e=>{e.target.style.display='none';}}/>}
          <div style={{flex:1,minWidth:0}}>
            <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:5,flexWrap:'wrap'}}>
              <span style={{fontSize:11,fontWeight:800,color:'var(--pri)',background:'rgba(185,98,0,.12)',padding:'3px 10px',borderRadius:'var(--r-f)',border:'1px solid rgba(185,98,0,.2)'}}>{activeTile.badge}</span>
              {activeTile.buy&&<span style={{fontSize:11.5,color:'var(--on-sur-v)'}}>🛒 {activeTile.buy}</span>}
              {activeTile.rating&&<span style={{fontSize:11.5,color:'var(--on-sur-v)'}}>⭐ {activeTile.rating}</span>}
            </div>
            <h2 style={{fontSize:18,fontWeight:800,lineHeight:1.2,marginBottom:4,fontFamily:'Outfit,sans-serif'}}>{activeTile.name}</h2>
            <div style={{fontSize:28,fontWeight:800,lineHeight:1,color:'var(--pri)'}}> ₹{parseInt(activeTile.price.toString().replace(/\D/g,'')||'0').toLocaleString()}</div>
          </div>
          <button onClick={()=>setActiveTile(null)} style={{background:'rgba(255,255,255,.4)',border:'1px solid rgba(255,255,255,.5)',borderRadius:'var(--r-sm)',width:34,height:34,display:'grid',placeItems:'center',cursor:'pointer',flexShrink:0,marginTop:2}}>
            <Ic name="close" size={15}/>
          </button>
        </div>
        {/* Body */}
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr'}}>
          <div style={{padding:'16px 18px 16px 24px',borderRight:'1px solid rgba(255,255,255,.28)'}}>
            <p style={{fontSize:12.5,color:'var(--on-sur-v)',lineHeight:1.6,marginBottom:10}}>{activeTile.summary||activeTile.why}</p>
            {activeTile.target&&<div style={{fontSize:12,color:'var(--on-sur-v)',marginBottom:12,padding:'7px 11px',background:'rgba(185,98,0,.08)',borderRadius:'var(--r-sm)',lineHeight:1.5,border:'1px solid rgba(185,98,0,.15)'}}>
              <strong style={{color:'var(--pri)'}}>🎯 </strong>{activeTile.target}
            </div>}
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
              <div>
                <div style={{fontSize:10.5,fontWeight:800,color:'#16A34A',letterSpacing:.6,textTransform:'uppercase',marginBottom:7}}>Pros</div>
                {(activeTile.pros||[]).slice(0,3).map((p,i)=><div key={i} style={{display:'flex',gap:6,fontSize:12,color:'var(--on-sur-v)',marginBottom:6,lineHeight:1.4}}><span style={{color:'#16A34A',flexShrink:0}}>✓</span><span>{p}</span></div>)}
              </div>
              <div>
                <div style={{fontSize:10.5,fontWeight:800,color:'#DC2626',letterSpacing:.6,textTransform:'uppercase',marginBottom:7}}>Cons</div>
                {(Array.isArray(activeTile.cons)?activeTile.cons:[activeTile.cons]).slice(0,3).map((cc,i)=><div key={i} style={{display:'flex',gap:6,fontSize:12,color:'var(--on-sur-v)',marginBottom:6,lineHeight:1.4}}><span style={{color:'#DC2626',flexShrink:0}}>✗</span><span>{cc}</span></div>)}
              </div>
            </div>
          </div>
          <div style={{padding:'16px 24px 16px 18px'}}>
            <div style={{fontSize:10.5,fontWeight:800,color:'var(--on-sur-v)',letterSpacing:.6,textTransform:'uppercase',marginBottom:10}}>Specifications</div>
            {(Array.isArray(activeTile.specs)?activeTile.specs:Object.entries(activeTile.specs||{}).map(([k,v])=>`${k}: ${v}`)).slice(0,5).map((s,i)=>{
              const ci=s.indexOf(':');
              const lbl=ci>-1?s.slice(0,ci).trim():`Spec ${i+1}`;
              const val=ci>-1?s.slice(ci+1).trim():s;
              return<div key={i} className="glass-row" style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',padding:'7px 0',gap:8}}>
                <span style={{fontSize:11.5,color:'var(--on-sur-v)',fontWeight:600,flexShrink:0}}>{lbl}</span>
                <span style={{fontSize:12,fontWeight:700,color:'var(--on-sur)',textAlign:'right'}}>{val}</span>
              </div>;
            })}
            {activeTile.warranty&&<div style={{marginTop:10,fontSize:11.5,color:'var(--on-sur-v)',padding:'7px 10px',background:'rgba(255,255,255,.3)',borderRadius:'var(--r-sm)',border:'1px solid rgba(255,255,255,.4)'}}>🛡️ {activeTile.warranty}</div>}
            {pR?.insider&&<div style={{marginTop:10,padding:'8px 10px',background:'rgba(185,98,0,.08)',borderRadius:'var(--r-sm)',fontSize:11.5,color:'var(--on-sur-v)',lineHeight:1.5,border:'1px solid rgba(185,98,0,.15)'}}>
              <strong style={{color:'var(--pri)'}}>💡 </strong>{pR.insider}
            </div>}
          </div>
        </div>
        {/* Actions */}
        <div style={{padding:'14px 24px',borderTop:'1px solid rgba(255,255,255,.28)',display:'flex',gap:8,background:'rgba(255,255,255,.18)',flexWrap:'wrap'}}>
          <button className="btn" onClick={()=>window.open(`https://www.amazon.in/s?k=${encodeURIComponent(activeTile.name)}`,'_blank')} style={{flex:1,minWidth:100,justifyContent:'center',padding:'12px',fontSize:13,background:'#FF9900',color:'#111',border:'none',boxShadow:'0 2px 4px rgba(0,0,0,0.1)'}}>Amazon</button>
          <button className="btn" onClick={()=>window.open(`https://www.flipkart.com/search?q=${encodeURIComponent(activeTile.name)}`,'_blank')} style={{flex:1,minWidth:100,justifyContent:'center',padding:'12px',fontSize:13,background:'#2874F0',color:'#fff',border:'none',boxShadow:'0 2px 4px rgba(0,0,0,0.1)'}}>Flipkart</button>
          <button className="btn btn-s" onClick={()=>window.open(`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(activeTile.name)}`,'_blank')} style={{padding:'12px 14px',fontSize:13,borderRadius:'var(--r-f)'}}><Ic name="camera" size={15}/></button>
          <button className="btn btn-s" onClick={()=>togS(activeTile)} style={{width:44,height:44,padding:0,display:'grid',placeItems:'center',background:saved.find(x=>x.name===activeTile.name)?'var(--pri-c)':'rgba(255,255,255,.3)',borderRadius:'var(--r-md)'}}>
            <Ic name="heart" size={18} color={saved.find(x=>x.name===activeTile.name)?'var(--on-pri-c)':'var(--on-sur-v)'}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
