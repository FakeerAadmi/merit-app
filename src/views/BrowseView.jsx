import React from 'react';
import { Ic } from '../components/Icons';
import { getCatColor } from '../utils/catColors';

const BrowseView = ({ t, lang, catQ, setCatQ, fCa, setCat, navigate, setSub, setPris, setBudget, setNotes, setResult, setError, setShowT }) => {
  const c = getCatColor;
  return (
    <div className="fade-up" style={{paddingTop:32}}>
      <div style={{position:'relative',marginBottom:28}}>
        <div style={{position:'absolute',left:16,top:'50%',transform:'translateY(-50%)',color:'var(--on-sur-v)'}}><Ic name="search" size={18}/></div>
        <input value={catQ} onChange={e=>setCatQ(e.target.value)} placeholder={t('searchPH')}
          style={{width:'100%',padding:'14px 14px 14px 46px',borderRadius:'var(--r-f)',border:'1.5px solid var(--out)',fontSize:15,background:'var(--card)',color:'var(--on-sur)',boxShadow:'var(--nm-sm)'}}/>
      </div>
      <div className="grid-3" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:14}}>
        {fCa.map((cc,i)=>{
          const cl=c(cc.id);
          return(
            <div key={cc.id} className="cat-card"
              onClick={()=>{setCat(cc.id);navigate('/configure');setSub('');setPris([]);setBudget('');setNotes('');setResult('');setError('');setShowT(false);}}
              style={{padding:'22px 20px',background:cl.bg,animation:`fadeUp .45s var(--ease) ${i*.025}s both`,display:'flex',flexDirection:'column'}}>
              <div style={{width:48,height:48,borderRadius:'var(--r-lg)',background:cl.chip,display:'grid',placeItems:'center',marginBottom:14}}>
                <Ic name={cc.icon} size={26} color={cl.ic}/>
              </div>
              <div style={{fontWeight:800,fontSize:15,marginBottom:5,fontFamily:'Outfit,sans-serif',color:'var(--on-sur)'}}>{t(cc.tk)}</div>
              <div style={{fontSize:12,color:'var(--on-sur-v)',lineHeight:1.5}}>{cc.sub.slice(0,3).join(' · ')}</div>
            </div>
          );
        })}
      </div>
      <div style={{display:'flex',justifyContent:'center',gap:28,padding:'44px 0 0',flexWrap:'wrap'}}>
        {[['shield',t('noBias')],['zap',t('aiPow')],['check',t('indSpec')]].map(([ic,l])=>(
          <div key={l} style={{display:'flex',alignItems:'center',gap:8,fontSize:13,color:'var(--on-sur-v)',fontWeight:600}}>
            <Ic name={ic} size={14} color="var(--pri)"/>{l}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseView;
