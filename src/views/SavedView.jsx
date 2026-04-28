import React from 'react';
import { Ic } from '../components/Icons';

const SavedView = ({ saved, compSel, togC, togS, setView }) => (
  <div className="fade-up" style={{paddingTop:40}}>
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:28}}>
      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <div style={{width:40,height:40,borderRadius:'var(--r-md)',background:'#FFF1F2',display:'grid',placeItems:'center'}}><Ic name="heart" size={20} color="var(--pri)"/></div>
        <h2 style={{fontFamily:'Outfit,sans-serif',fontSize:26,fontWeight:800}}>Saved Items</h2>
      </div>
      {compSel.length>1&&<button className="btn btn-p" onClick={()=>setView('compare')} style={{padding:'9px 18px',fontSize:13}}>Compare {compSel.length} Items</button>}
    </div>
    {saved.length===0
      ?<div style={{padding:56,textAlign:'center',background:'var(--sur-low)',borderRadius:'var(--r-xl)',border:'1px solid var(--out-v)'}}>
         <div style={{fontSize:48,marginBottom:16}}>🤍</div>
         <h3 style={{fontSize:18,fontWeight:700,marginBottom:8}}>No saved items yet</h3>
         <p style={{fontSize:14,color:'var(--on-sur-v)'}}>Tap ♥ on any recommendation to save it here for comparison.</p>
       </div>
      :<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:16}}>
        {saved.map((r,i)=>(
          <div key={i} className="card" onClick={()=>togC(r)} style={{padding:22,cursor:'pointer',outline:compSel.includes(r)?'2.5px solid var(--pri)':'none',outlineOffset:3}}>
            <div style={{fontSize:11,fontWeight:800,color:'var(--pri)',marginBottom:8}}>{r.badge}</div>
            <div style={{fontWeight:700,fontSize:15,marginBottom:4,paddingRight:28,lineHeight:1.3}}>{r.name}</div>
            <div style={{fontSize:20,fontWeight:800,marginBottom:12,color:'var(--pri)'}}>₹{parseInt(r.price.toString().replace(/\D/g,'')||'0').toLocaleString()}</div>
            <div style={{background:'var(--sur-low)',padding:'10px 14px',borderRadius:'var(--r-md)',fontSize:12,borderRadius:10}}>
              {(Array.isArray(r.specs)?r.specs:Object.entries(r.specs||{}).map(([k,v])=>`${k}: ${v}`)).slice(0,3).map((s,j)=><div key={j} style={{color:'var(--on-sur-v)',marginBottom:3,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>◆ {s}</div>)}
            </div>
            <button onClick={e=>{e.stopPropagation();togS(r);}} style={{position:'absolute',top:16,right:16,background:'transparent',border:'none',cursor:'pointer',padding:4}}><Ic name="heart" size={18} color="var(--pri)"/></button>
          </div>
        ))}
      </div>}
  </div>
);

export default SavedView;
