import React from 'react';

const ErrorBanner = ({ error }) => {
  if (!error) return null;
  return (
    <div style={{background:'rgba(220,38,38,.07)',borderRadius:'var(--r-md)',padding:'12px 18px',marginTop:12,border:'1.5px solid rgba(220,38,38,.18)',color:'#B91C1C',fontSize:13.5}}>
      {error}
    </div>
  );
};

export default ErrorBanner;
