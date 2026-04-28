import React from 'react';

const Loader = ({ msg, t }) => (
  <div style={{padding:36,textAlign:'center',marginTop:20,background:'var(--sur-low)',borderRadius:'var(--r-xl)',border:'1px solid var(--out-v)'}}>
    <div className="loader" style={{display:'flex',gap:7,justifyContent:'center',marginBottom:14}}><span/><span/><span/></div>
    <p style={{color:'var(--on-sur-v)',fontSize:15,fontWeight:600}}>{msg}</p>
    <p style={{color:'var(--on-sur-v)',fontSize:12.5,marginTop:4,opacity:.55}}>{t('takes')}</p>
  </div>
);

export default Loader;
