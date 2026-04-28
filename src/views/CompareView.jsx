import React from 'react';
import { Ic } from '../components/Icons';

const CompareView = ({ compSel, setView }) => (
  <div className="fade-up" style={{paddingTop:40}}>
    <div style={{display:'flex',gap:8,marginBottom:22}}>
      <button className="btn btn-s" onClick={()=>setView('saved')} style={{fontSize:13,padding:'8px 16px'}}><Ic name="back" size={14}/> Back</button>
    </div>
    <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:26}}>
      <div style={{width:40,height:40,borderRadius:'var(--r-md)',background:'var(--accentBg)',display:'grid',placeItems:'center'}}><Ic name="compare" size={20} color="var(--pri)"/></div>
      <h2 style={{fontFamily:'Outfit,sans-serif',fontSize:26,fontWeight:800}}>Compare Products</h2>
    </div>
    {compSel.length<2
      ?<div style={{padding:48,textAlign:'center',background:'var(--sur-low)',borderRadius:'var(--r-xl)',border:'1px solid var(--out-v)'}}>
         <p style={{fontSize:14,color:'var(--on-sur-v)',marginBottom:20}}>Select at least 2 products from Saved to compare.</p>
         <button className="btn btn-p" onClick={()=>setView('saved')}>Go to Saved</button>
       </div>
      :<div style={{overflowX:'auto'}}>
        <table style={{width:'100%',minWidth:560,borderCollapse:'collapse',background:'var(--card)',borderRadius:'var(--r-xl)',overflow:'hidden',boxShadow:'var(--nm-md)'}}>
          <thead>
            <tr>
              <th style={{padding:'14px 16px',borderBottom:'2px solid var(--out-v)',background:'var(--sur-con)',textAlign:'left',width:100,fontSize:12,color:'var(--on-sur-v)',fontWeight:700,textTransform:'uppercase',letterSpacing:.5}}>Feature</th>
              {compSel.map((r,i)=><th key={i} style={{padding:'14px 16px',borderBottom:'2px solid var(--out-v)',background:'var(--sur-con)',textAlign:'left',minWidth:180,fontSize:13,color:'var(--on-sur)',fontWeight:700}}>{r.name}</th>)}
            </tr>
          </thead>
          <tbody>
            {[['Price',r=>`₹${parseInt(r.price.toString().replace(/\D/g,'')||'0').toLocaleString()}`],['Badge',r=>r.badge],['Specs',r=>(Array.isArray(r.specs)?r.specs:Object.entries(r.specs||{}).map(([k,v])=>`${k}: ${v}`)).map((s,j)=><div key={j}>◆ {s}</div>)],['Summary',r=>r.summary||r.why],['Pros',r=>(r.pros||[]).map((p,j)=><div key={j} style={{color:'#16A34A'}}>✓ {p}</div>)],['Cons',r=>(Array.isArray(r.cons)?r.cons:[r.cons]).map((cc,j)=><div key={j} style={{color:'#DC2626'}}>✗ {cc}</div>)]].map(([label,fn])=>(
              <tr key={label}>
                <td style={{padding:'12px 16px',borderBottom:'1px solid var(--out-v)',fontWeight:700,color:'var(--on-sur-v)',fontSize:11,textTransform:'uppercase',letterSpacing:.5}}>{label}</td>
                {compSel.map((r,i)=><td key={i} style={{padding:'12px 16px',borderBottom:'1px solid var(--out-v)',fontSize:13,lineHeight:1.55}}>{fn(r)}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>}
  </div>
);

export default CompareView;
