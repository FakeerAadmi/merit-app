export const CATS = [
  {id:"ac",     icon:"ac",      tk:"cat_ac", sub:["Split AC","Window AC","Portable AC","Inverter AC"]},
  {id:"fridge", icon:"fridge",  tk:"cat_fr", sub:["Single Door","Double Door","Side-by-Side","French Door"]},
  {id:"washer", icon:"washer",  tk:"cat_wa", sub:["Front Load","Top Load","Semi-Auto","Washer-Dryer"]},
  {id:"tv",     icon:"tv",      tk:"cat_tv", sub:["LED","OLED","QLED","Smart TV","Projector"]},
  {id:"phone",  icon:"phone",   tk:"cat_ph", sub:["Flagship","Mid-Range","Budget","Camera","Gaming"]},
  {id:"laptop", icon:"laptop",  tk:"cat_la", sub:["Ultrabook","Gaming","Business","2-in-1","Budget"]},
  {id:"tablet", icon:"tablet",  tk:"cat_ta", sub:["Premium","Mid-Range","Kids","E-Reader"]},
  {id:"audio",  icon:"audio",   tk:"cat_au", sub:["Earbuds","Headphones","Soundbar","Smart Speaker"]},
  {id:"kitchen",icon:"kitchen", tk:"cat_ki", sub:["Microwave","Air Fryer","Mixer Grinder","Induction","Water Purifier"]},
  {id:"health", icon:"health",  tk:"cat_he", sub:["Electric Toothbrush","Trimmer","Hair Dryer","BP Monitor"]},
  {id:"smart",  icon:"smart",   tk:"cat_sm", sub:["Smart Lock","Camera","Doorbell","Smart Plug","Robot Vacuum"]},
  {id:"cool",   icon:"cool",    tk:"cat_co", sub:["Ceiling Fan","Tower Fan","Air Cooler"]},
  {id:"geyser", icon:"geyser",  tk:"cat_ge", sub:["Instant","Storage","Room Heater","Solar"]},
  {id:"gaming", icon:"gaming",  tk:"cat_ga", sub:["Console","Monitor","Controller","VR Headset"]},
  {id:"camera", icon:"camera",  tk:"cat_ca", sub:["DSLR","Mirrorless","Action Cam","Webcam"]},
  {id:"wearable",icon:"wearable",tk:"cat_we",sub:["Smartwatch","Fitness Band","Smart Ring"]},
  {id:"network",icon:"network", tk:"cat_ne", sub:["Wi-Fi Router","Mesh System","5G Router"]},
  {id:"storage",icon:"storage", tk:"cat_st", sub:["External SSD","Power Bank","UPS"]},
];

/* All `l` and `d` values are i18n keys — looked up via t() in App.jsx */
export const PRIS = [
  {id:"price",       l:"pri_price",       d:"pri_price_d"},
  {id:"quality",     l:"pri_quality",     d:"pri_quality_d"},
  {id:"quiet",       l:"pri_quiet",       d:"pri_quiet_d"},
  {id:"energy",      l:"pri_energy",      d:"pri_energy_d"},
  {id:"smart",       l:"pri_smart",       d:"pri_smart_d"},
  {id:"brand",       l:"pri_brand",       d:"pri_brand_d"},
  {id:"ease",        l:"pri_ease",        d:"pri_ease_d"},
  {id:"size",        l:"pri_size",        d:"pri_size_d"},
  {id:"perf",        l:"pri_perf",        d:"pri_perf_d"},
  {id:"design",      l:"pri_design",      d:"pri_design_d"},
  {id:"camera",      l:"pri_camera",      d:"pri_camera_d"},
  {id:"battery",     l:"pri_battery",     d:"pri_battery_d"},
  {id:"display",     l:"pri_display",     d:"pri_display_d"},
  {id:"cooling",     l:"pri_cooling",     d:"pri_cooling_d"},
  {id:"ecosystem",   l:"pri_ecosystem",   d:"pri_ecosystem_d"},
  {id:"capacity",    l:"pri_capacity",    d:"pri_capacity_d"},
  {id:"health",      l:"pri_health",      d:"pri_health_d"},
  {id:"motor",       l:"pri_motor",       d:"pri_motor_d"},
  {id:"jars",        l:"pri_jars",        d:"pri_jars_d"},
  {id:"noise",       l:"pri_noise",       d:"pri_noise_d"},
  {id:"value",       l:"pri_value",       d:"pri_value_d"},
  {id:"triggers",    l:"pri_triggers",    d:"pri_triggers_d"},
  {id:"portability", l:"pri_portability", d:"pri_portability_d"},
  {id:"convection",  l:"pri_convection",  d:"pri_convection_d"},
];

export const BUD = {
  ac:     ["Under ₹25K","₹25K–40K","₹40K–60K","₹60K+"],
  fridge: ["Under ₹15K","₹15K–30K","₹30K–50K","₹50K+"],
  phone:  ["Under ₹10K","₹10K–20K","₹20K–40K","₹40K–70K","₹70K+"],
  laptop: ["Under ₹30K","₹30K–50K","₹50K–80K","₹80K–1.2L","₹1.2L+"],
  default:["Budget","Mid-Range","Premium","Ultra Premium"],
};

export const CITIES = [
  "Mumbai","Delhi","Bangalore","Hyderabad","Ahmedabad","Chennai","Kolkata","Pune",
  "Jaipur","Surat","Lucknow","Nagpur","Indore","Thane","Bhopal","Patna","Ghaziabad",
  "Nashik","Varanasi","Chandigarh","Coimbatore","Goa","Noida","Gurgaon","Kochi",
  "Mysore","Dehradun","Bhubaneswar","Amritsar","Raipur","Mangalore","Udaipur",
  "Pimpri-Chinchwad","Trivandrum",
];

export const PCP = [
  {id:"cpu",  n:"Processor (CPU)",  nm:"प्रोसेसर (CPU)",    ph:"e.g. Ryzen 5 7600X"},
  {id:"gpu",  n:"Graphics Card",    nm:"ग्राफिक्स कार्ड",   ph:"e.g. RTX 4060"},
  {id:"ram",  n:"RAM",              nm:"RAM",                ph:"e.g. 16GB DDR5"},
  {id:"mobo", n:"Motherboard",      nm:"मदरबोर्ड",           ph:"e.g. B650"},
  {id:"stor", n:"Storage",          nm:"स्टोरेज",            ph:"e.g. 1TB NVMe SSD"},
  {id:"psu",  n:"Power Supply",     nm:"पॉवर सप्लाय",        ph:"e.g. 650W 80+ Gold"},
  {id:"case", n:"Case",             nm:"केस",                ph:"e.g. Mid-tower ATX"},
  {id:"cool", n:"CPU Cooler",       nm:"CPU कूलर",           ph:"e.g. AIO 240mm"},
];

export const CAT_CONF = {
  ac: {
    hasHH: true,
    pris: ["cooling","energy","quiet","smart","brand","price"],
    sub: {
      "Split AC":   {bud:["Under ₹30K","₹30K–45K","₹45K+"]},
      "Window AC":  {bud:["Under ₹25K","₹25K–35K","₹35K+"]},
      "Portable AC":{bud:["Under ₹30K","₹30K+"]},
    }
  },
  fridge: {
    hasHH: true,
    pris: ["capacity","energy","cooling","brand","price","design"],
    sub: {
      "Single Door":{bud:["Under ₹15K","₹15K-20K"]},
      "Double Door":{bud:["₹20K-35K","₹35K+"]},
    }
  },
  tv: {
    hasHH: false,
    pris: ["display","size","smart","brand","price","energy"],
    sub: {
      "OLED":{bud:["₹80K-1.2L","₹1.2L+"]},
      "LED": {bud:["Under ₹20K","₹20K-40K","₹40K+"]},
    }
  },
  phone: {
    hasHH: false,
    pris: ["camera","perf","battery","display","brand","price"],
    sub: {
      "Flagship":  {bud:["₹50K–80K","₹80K–1.2L","₹1.2L+"],  pris:["camera","perf","display","design","ecosystem"]},
      "Mid-Range": {bud:["₹20K–30K","₹30K–40K","₹40K–50K"]},
      "Budget":    {bud:["Under ₹10K","₹10K–15K","₹15K–20K"],pris:["battery","value","display","perf"]},
      "Gaming":    {bud:["₹20K–40K","₹40K+"],                 pris:["perf","cooling","display","battery","triggers"]},
    }
  },
  laptop: {
    hasHH: false,
    pris: ["perf","battery","display","portability","brand","price"],
    sub: {
      "Gaming":    {bud:["₹60K-90K","₹90K-1.5L","₹1.5L+"],pris:["perf","cooling","display","value"]},
      "Ultrabook": {bud:["₹50K-80K","₹80K+"],              pris:["portability","battery","display","perf"]},
    }
  },
  kitchen: {
    hasHH: true,
    pris: ["ease","size","energy","brand","price"],
    sub: {
      "Microwave":     {bud:["Under ₹5K","₹5K–10K","₹10K+"],  pris:["capacity","convection","ease","brand"]},
      "Air Fryer":     {bud:["Under ₹4K","₹4K–8K","₹8K+"],    pris:["capacity","health","ease","brand"]},
      "Mixer Grinder": {bud:["Under ₹2K","₹2K–5K","₹5K+"],    pris:["motor","jars","noise","brand"]},
    }
  },
};

export const getCatConf = (catId, subName) => {
  const c = CAT_CONF[catId] || { hasHH: false, pris: ["quality","perf","brand","price","ease","design"] };
  const s = (c.sub && subName) ? c.sub[subName] : null;
  return {
    hasHH: c.hasHH,
    pris:  s?.pris || c.pris,
    bud:   s?.bud  || BUD[catId] || BUD.default,
  };
};
