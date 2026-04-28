import React from 'react';

const HeroArt = () => (
  <svg viewBox="0 0 360 300" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{width:'100%',maxWidth:360,height:'auto',display:'block'}}>
    {/* Soft background morphs */}
    <ellipse cx="200" cy="140" rx="160" ry="130" fill="#FFF3E0" opacity=".6"/>
    <ellipse cx="130" cy="80" rx="90" ry="75" fill="#FFF8DC" opacity=".5"/>

    {/* Connecting lines */}
    <path d="M85 105 Q160 60 230 95" stroke="#D97706" strokeWidth="1.2" strokeDasharray="5 5" opacity=".3"/>
    <path d="M230 95 Q280 140 240 190" stroke="#D97706" strokeWidth="1.2" strokeDasharray="5 5" opacity=".3"/>
    <path d="M85 105 Q80 160 120 200" stroke="#D97706" strokeWidth="1.2" strokeDasharray="5 5" opacity=".3"/>
    <path d="M120 200 Q180 240 240 190" stroke="#D97706" strokeWidth="1.2" strokeDasharray="5 5" opacity=".3"/>

    {/* Card 1 — Phone (top-left) */}
    <g className="dev-card" style={{transformOrigin:'85px 95px'}}>
      <rect x="34" y="60" width="102" height="68" rx="16" fill="#FFFBEB" stroke="#FDE68A" strokeWidth="1.5"/>
      <rect x="42" y="73" width="22" height="22" rx="8" fill="#FDE68A"/>
      <text x="49" y="89" fontSize="13" textAnchor="middle">📱</text>
      <text x="74" y="83" fontSize="11" fontWeight="700" fill="#1C1107" fontFamily="Inter,sans-serif">Smartphone</text>
      <text x="74" y="97" fontSize="9.5" fill="#6B5344" fontFamily="Inter,sans-serif">Samsung S25+</text>
      <text x="74" y="113" fontSize="11" fontWeight="700" fill="#B96200" fontFamily="Inter,sans-serif">₹79,999</text>
      <circle cx="120" cy="74" r="5" fill="#22C55E"/>
    </g>

    {/* Card 2 — AC (top-right) */}
    <g className="dev-card" style={{animationName:'float1',transformOrigin:'240px 85px'}}>
      <rect x="189" y="52" width="102" height="68" rx="16" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1.5"/>
      <rect x="197" y="65" width="22" height="22" rx="8" fill="#BFDBFE"/>
      <text x="204" y="81" fontSize="13" textAnchor="middle">❄️</text>
      <text x="229" y="75" fontSize="11" fontWeight="700" fill="#1C1107" fontFamily="Inter,sans-serif">Split AC</text>
      <text x="229" y="89" fontSize="9.5" fill="#6B5344" fontFamily="Inter,sans-serif">Daikin 1.5T 5★</text>
      <text x="229" y="105" fontSize="11" fontWeight="700" fill="#2563EB" fontFamily="Inter,sans-serif">₹41,990</text>
      <circle cx="275" cy="66" r="5" fill="#F59E0B"/>
    </g>

    {/* Card 3 — TV (center) */}
    <g className="dev-card" style={{animationName:'float2',transformOrigin:'180px 150px'}}>
      <rect x="125" y="120" width="110" height="68" rx="16" fill="#F5F3FF" stroke="#DDD6FE" strokeWidth="1.5"/>
      <rect x="133" y="133" width="22" height="22" rx="8" fill="#DDD6FE"/>
      <text x="140" y="149" fontSize="13" textAnchor="middle">📺</text>
      <text x="165" y="143" fontSize="11" fontWeight="700" fill="#1C1107" fontFamily="Inter,sans-serif">OLED TV</text>
      <text x="165" y="157" fontSize="9.5" fill="#6B5344" fontFamily="Inter,sans-serif">LG 55" C4 OLED</text>
      <text x="165" y="173" fontSize="11" fontWeight="700" fill="#7C3AED" fontFamily="Inter,sans-serif">₹1,04,990</text>
      <circle cx="219" cy="134" r="5" fill="#22C55E"/>
    </g>

    {/* Card 4 — Laptop (bottom-left) */}
    <g className="dev-card" style={{animationName:'float3',transformOrigin:'120px 200px'}}>
      <rect x="34" y="170" width="102" height="68" rx="16" fill="#ECFDF5" stroke="#6EE7B7" strokeWidth="1.5"/>
      <rect x="42" y="183" width="22" height="22" rx="8" fill="#A7F3D0"/>
      <text x="49" y="199" fontSize="13" textAnchor="middle">💻</text>
      <text x="74" y="193" fontSize="11" fontWeight="700" fill="#1C1107" fontFamily="Inter,sans-serif">Gaming Laptop</text>
      <text x="74" y="207" fontSize="9.5" fill="#6B5344" fontFamily="Inter,sans-serif">ASUS ROG Flow</text>
      <text x="74" y="223" fontSize="11" fontWeight="700" fill="#059669" fontFamily="Inter,sans-serif">₹89,990</text>
      <circle cx="120" cy="184" r="5" fill="#22C55E"/>
    </g>

    {/* Card 5 — Fridge (bottom-right) */}
    <g className="dev-card" style={{animationName:'float1',animationDelay:'1.5s',transformOrigin:'244px 198px'}}>
      <rect x="193" y="170" width="102" height="68" rx="16" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1.5"/>
      <rect x="201" y="183" width="22" height="22" rx="8" fill="#BBF7D0"/>
      <text x="208" y="199" fontSize="13" textAnchor="middle">🧊</text>
      <text x="233" y="193" fontSize="11" fontWeight="700" fill="#1C1107" fontFamily="Inter,sans-serif">Refrigerator</text>
      <text x="233" y="207" fontSize="9.5" fill="#6B5344" fontFamily="Inter,sans-serif">Samsung 324L</text>
      <text x="233" y="223" fontSize="11" fontWeight="700" fill="#16A34A" fontFamily="Inter,sans-serif">₹31,990</text>
      <circle cx="279" cy="184" r="5" fill="#F59E0B"/>
    </g>

    {/* merit. badge in center */}
    <rect x="151" y="267" width="58" height="22" rx="11" fill="#B96200"/>
    <text x="180" y="282" fontSize="11" fontWeight="700" fill="white" textAnchor="middle" fontFamily="Outfit,sans-serif">merit.</text>
  </svg>
);

export default HeroArt;
