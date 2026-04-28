import React from 'react';

/* ─── Markdown renderer ──────────────────────────── */
const MarkdownRenderer = ({ content }) => {
  if (!content) return null;
  return (
    <div>
      {content.split('\n').map((line, i) => {
        const t = line.trim();
        if (!t) return <div key={i} style={{height:8}}/>;
        if (t.startsWith('### ')) return <h3 key={i} style={{fontSize:16,fontWeight:700,color:'var(--on-sur)',margin:'20px 0 8px',paddingBottom:6,borderBottom:'1px solid var(--out-v)'}}>{t.slice(4).replace(/\*\*/g,'')}</h3>;
        if (t.startsWith('## ')) return <h2 key={i} style={{fontSize:20,fontWeight:800,color:'var(--pri)',margin:'26px 0 10px',fontFamily:'Outfit,sans-serif'}}>{t.slice(3).replace(/\*\*/g,'')}</h2>;
        if (t.startsWith('# ')) return <h1 key={i} style={{fontSize:24,fontWeight:800,margin:'20px 0 10px',fontFamily:'Outfit,sans-serif'}}>{t.slice(2).replace(/\*\*/g,'')}</h1>;
        if (t.startsWith('- ') || t.startsWith('* ')) {
          const ct = t.replace(/^[-*]\s*/,'');
          const p = ct.split(/\*\*(.*?)\*\*/g);
          return <div key={i} style={{display:'flex',gap:10,marginBottom:6,paddingLeft:4,fontSize:14,lineHeight:1.65,color:'var(--on-sur-v)'}}>
            <span style={{color:'var(--pri)',marginTop:3,flexShrink:0,fontSize:10}}>◆</span>
            <span>{p.map((x,j)=>j%2===1?<strong key={j} style={{color:'var(--on-sur)'}}>{x}</strong>:x)}</span>
          </div>;
        }
        if (t.startsWith('|')) return <div key={i} style={{fontFamily:"'JetBrains Mono'",fontSize:12,color:'var(--on-sur-v)',padding:'3px 0',borderBottom:t.includes('---')?'2px solid var(--out)':'1px solid var(--out-v)',whiteSpace:'pre',overflowX:'auto'}}>{t}</div>;
        const p = t.split(/\*\*(.*?)\*\*/g);
        return <p key={i} style={{fontSize:14,lineHeight:1.7,color:'var(--on-sur-v)',margin:'3px 0'}}>{p.map((x,j)=>j%2===1?<strong key={j} style={{color:'var(--on-sur)'}}>{x}</strong>:x)}</p>;
      })}
    </div>
  );
};

export default MarkdownRenderer;
