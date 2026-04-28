export const CATS = [
  {id:"ac",       icon:"ac",      tk:"cat_ac", sub:["Split AC","Window AC","Portable AC","Cassette AC","Inverter AC"]},
  {id:"cool",     icon:"cool",    tk:"cat_co", sub:["Ceiling Fan","Tower Fan","Pedestal Fan","Air Cooler","Desert Cooler"]},
  {id:"fridge",   icon:"fridge",  tk:"cat_fr", sub:["Single Door","Double Door","Triple Door","Side-by-Side","French Door","Mini Fridge"]},
  {id:"washer",   icon:"washer",  tk:"cat_wa", sub:["Front Load","Top Load","Semi-Auto","Washer-Dryer Combo"]},
  {id:"kitchen",  icon:"kitchen", tk:"cat_ki", sub:["Microwave","OTG Oven","Air Fryer","Mixer Grinder","Induction Cooktop","Water Purifier","Dishwasher","Chimney","Juicer"]},
  {id:"geyser",   icon:"geyser",  tk:"cat_ge", sub:["Instant Geyser","Storage Geyser","Room Heater","Heat Pump","Solar Water Heater"]},
  {id:"tv",       icon:"tv",      tk:"cat_tv", sub:["LED TV","OLED TV","QLED TV","Smart TV","Mini LED","Projector"]},
  {id:"monitor",  icon:"pc",      tk:"cat_mo", sub:["4K Monitor","Gaming Monitor","Ultrawide","Portable Monitor","Office Monitor"]},
  {id:"audio",    icon:"audio",   tk:"cat_au", sub:["TWS Earbuds","Over-Ear Headphones","Soundbar","2.1 Speaker System","Smart Speaker","Bluetooth Speaker","DAC/Amp"]},
  {id:"phone",    icon:"phone",   tk:"cat_ph", sub:["Flagship","Upper Mid-Range","Mid-Range","Budget","Camera-Focused","Gaming Phone","Foldable"]},
  {id:"laptop",   icon:"laptop",  tk:"cat_la", sub:["Ultrabook","Gaming Laptop","Business Laptop","Creative Workstation","2-in-1","Budget Laptop","Chromebook"]},
  {id:"tablet",   icon:"tablet",  tk:"cat_ta", sub:["Premium Tablet","Android Mid-Range","Kids Tablet","E-Reader","Drawing Tablet"]},
  {id:"smart",    icon:"smart",   tk:"cat_sm", sub:["Smart Lock","Security Camera","Video Doorbell","Smart Plug","Robot Vacuum","Smart Lighting","Smart AC Controller","Smart TV Box"]},
  {id:"network",  icon:"network", tk:"cat_ne", sub:["Wi-Fi Router","Mesh Wi-Fi System","5G Router","Range Extender","Wi-Fi 7 Router"]},
  {id:"health",   icon:"health",  tk:"cat_he", sub:["Electric Toothbrush","Trimmer","Hair Dryer","Hair Straightener","BP Monitor","Glucometer","Pulse Oximeter","Massager"]},
  {id:"wearable", icon:"wearable",tk:"cat_we", sub:["Smartwatch","Fitness Band","Smart Ring","GPS Watch","Kids Smartwatch"]},
  {id:"camera",   icon:"camera",  tk:"cat_ca", sub:["Mirrorless","DSLR","Action Camera","Vlogging Camera","Compact Camera","Drone","Webcam"]},
  {id:"gaming",   icon:"gaming",  tk:"cat_ga", sub:["Gaming Console","Gaming Monitor","Gaming Chair","Controller","Headset","Gaming Keyboard","Gaming Mouse"]},
  {id:"purifier", icon:"cool",    tk:"cat_pu", sub:["HEPA Air Purifier","UV Air Purifier","Car Air Purifier","Portable Purifier"]},
  {id:"vacuum",   icon:"smart",   tk:"cat_va", sub:["Robot Vacuum","Stick Vacuum","Wet & Dry Vacuum","Handheld Vacuum","Bagless Vacuum"]},
  {id:"storage",  icon:"storage", tk:"cat_st", sub:["External SSD","External HDD","Power Bank","UPS / Inverter","NAS Drive","USB Hub","Portable Charger"]},
  {id:"ebike",    icon:"zap",     tk:"cat_eb", sub:["Electric Scooter","Electric Cycle","E-Bike","EV Accessories","Portable EV Charger"]},
];

/* ─── All priority IDs — l/d are i18n keys ─── */
export const PRIS = [
  // Universal
  {id:"price",       l:"pri_price",       d:"pri_price_d"},
  {id:"quality",     l:"pri_quality",     d:"pri_quality_d"},
  {id:"brand",       l:"pri_brand",       d:"pri_brand_d"},
  {id:"ease",        l:"pri_ease",        d:"pri_ease_d"},
  {id:"design",      l:"pri_design",      d:"pri_design_d"},
  {id:"value",       l:"pri_value",       d:"pri_value_d"},
  {id:"durability",  l:"pri_durability",  d:"pri_durability_d"},
  {id:"warranty",    l:"pri_warranty",    d:"pri_warranty_d"},
  {id:"smart",       l:"pri_smart",       d:"pri_smart_d"},
  {id:"connectivity",l:"pri_connectivity",d:"pri_connectivity_d"},
  {id:"portability", l:"pri_portability", d:"pri_portability_d"},
  {id:"size",        l:"pri_size",        d:"pri_size_d"},
  // Performance
  {id:"perf",        l:"pri_perf",        d:"pri_perf_d"},
  {id:"battery",     l:"pri_battery",     d:"pri_battery_d"},
  {id:"energy",      l:"pri_energy",      d:"pri_energy_d"},
  {id:"motor",       l:"pri_motor",       d:"pri_motor_d"},
  {id:"quiet",       l:"pri_quiet",       d:"pri_quiet_d"},
  {id:"noise",       l:"pri_noise",       d:"pri_noise_d"},
  {id:"cooling",     l:"pri_cooling",     d:"pri_cooling_d"},
  {id:"capacity",    l:"pri_capacity",    d:"pri_capacity_d"},
  {id:"airflow",     l:"pri_airflow",     d:"pri_airflow_d"},
  {id:"coverage",    l:"pri_coverage",    d:"pri_coverage_d"},
  // Display & Vision
  {id:"display",     l:"pri_display",     d:"pri_display_d"},
  {id:"resolution",  l:"pri_resolution",  d:"pri_resolution_d"},
  {id:"panel",       l:"pri_panel",       d:"pri_panel_d"},
  {id:"brightness",  l:"pri_brightness",  d:"pri_brightness_d"},
  {id:"refresh",     l:"pri_refresh",     d:"pri_refresh_d"},
  {id:"response",    l:"pri_response",    d:"pri_response_d"},
  {id:"color_acc",   l:"pri_color_acc",   d:"pri_color_acc_d"},
  {id:"night_vis",   l:"pri_night_vis",   d:"pri_night_vis_d"},
  // Camera
  {id:"camera",      l:"pri_camera",      d:"pri_camera_d"},
  {id:"sensor",      l:"pri_sensor",      d:"pri_sensor_d"},
  {id:"autofocus",   l:"pri_autofocus",   d:"pri_autofocus_d"},
  {id:"stabilize",   l:"pri_stabilize",   d:"pri_stabilize_d"},
  {id:"video_rec",   l:"pri_video_rec",   d:"pri_video_rec_d"},
  {id:"flip_scr",    l:"pri_flip_scr",    d:"pri_flip_scr_d"},
  {id:"ecosystem",   l:"pri_ecosystem",   d:"pri_ecosystem_d"},
  // Phone/Laptop
  {id:"triggers",    l:"pri_triggers",    d:"pri_triggers_d"},
  // Kitchen
  {id:"jars",        l:"pri_jars",        d:"pri_jars_d"},
  {id:"convection",  l:"pri_convection",  d:"pri_convection_d"},
  {id:"health",      l:"pri_health",      d:"pri_health_d"},
  {id:"filter",      l:"pri_filter",      d:"pri_filter_d"},
  {id:"suction",     l:"pri_suction",     d:"pri_suction_d"},
  {id:"modes",       l:"pri_modes",       d:"pri_modes_d"},
  {id:"programs",    l:"pri_programs",    d:"pri_programs_d"},
  // Health devices
  {id:"accuracy",    l:"pri_accuracy",    d:"pri_accuracy_d"},
  {id:"waterproof",  l:"pri_waterproof",  d:"pri_waterproof_d"},
  {id:"blade",       l:"pri_blade",       d:"pri_blade_d"},
  {id:"attachments", l:"pri_attachments", d:"pri_attachments_d"},
  // Wearables
  {id:"health_track",l:"pri_health_track",d:"pri_health_track_d"},
  {id:"gps",         l:"pri_gps",         d:"pri_gps_d"},
  // Gaming
  {id:"game_lib",    l:"pri_game_lib",    d:"pri_game_lib_d"},
  {id:"switch_type", l:"pri_switch_type", d:"pri_switch_type_d"},
  {id:"ergo",        l:"pri_ergo",        d:"pri_ergo_d"},
  // Storage / EV
  {id:"charging",    l:"pri_charging",    d:"pri_charging_d"},
  {id:"backup",      l:"pri_backup",      d:"pri_backup_d"},
  {id:"safety",      l:"pri_safety",      d:"pri_safety_d"},
  {id:"range",       l:"pri_range",       d:"pri_range_d"},
  // Mapping
  {id:"mapping",     l:"pri_mapping",     d:"pri_mapping_d"},
  // Tablet
  {id:"parental",    l:"pri_parental",    d:"pri_parental_d"},
  {id:"pressure",    l:"pri_pressure",    d:"pri_pressure_d"},
];

export const BUD = {
  ac:["Under ₹25K","₹25K–35K","₹35K–50K","₹50K–70K","₹70K+"],
  fridge:["Under ₹15K","₹15K–25K","₹25K–40K","₹40K–60K","₹60K+"],
  washer:["Under ₹12K","₹12K–20K","₹20K–35K","₹35K–55K","₹55K+"],
  phone:["Under ₹10K","₹10K–20K","₹20K–35K","₹35K–60K","₹60K–1L","₹1L+"],
  laptop:["Under ₹30K","₹30K–50K","₹50K–80K","₹80K–1.2L","₹1.2L–2L","₹2L+"],
  tv:["Under ₹20K","₹20K–35K","₹35K–60K","₹60K–1L","₹1L+"],
  monitor:["Under ₹10K","₹10K–20K","₹20K–35K","₹35K–60K","₹60K+"],
  audio:["Under ₹2K","₹2K–5K","₹5K–15K","₹15K–40K","₹40K+"],
  camera:["Under ₹30K","₹30K–60K","₹60K–1L","₹1L–2L","₹2L+"],
  gaming:["Under ₹5K","₹5K–15K","₹15K–40K","₹40K–80K","₹80K+"],
  wearable:["Under ₹3K","₹3K–8K","₹8K–20K","₹20K–50K","₹50K+"],
  kitchen:["Under ₹3K","₹3K–8K","₹8K–20K","₹20K+"],
  geyser:["Under ₹5K","₹5K–10K","₹10K–20K","₹20K+"],
  cool:["Under ₹3K","₹3K–8K","₹8K–18K","₹18K+"],
  purifier:["Under ₹5K","₹5K–12K","₹12K–25K","₹25K+"],
  vacuum:["Under ₹5K","₹5K–15K","₹15K–30K","₹30K–60K","₹60K+"],
  storage:["Under ₹2K","₹2K–5K","₹5K–12K","₹12K–30K","₹30K+"],
  ebike:["Under ₹40K","₹40K–70K","₹70K–1L","₹1L–1.5L","₹1.5L+"],
  network:["Under ₹2K","₹2K–5K","₹5K–12K","₹12K–25K","₹25K+"],
  smart:["Under ₹2K","₹2K–5K","₹5K–15K","₹15K+"],
  health:["Under ₹1K","₹1K–3K","₹3K–8K","₹8K–20K","₹20K+"],
  tablet:["Under ₹10K","₹10K–20K","₹20K–40K","₹40K–70K","₹70K+"],
  default:["Budget","Mid-Range","Premium","Ultra Premium"],
};

export const CITIES = [
  "Mumbai","Delhi","Bangalore","Hyderabad","Ahmedabad","Chennai","Kolkata","Pune",
  "Jaipur","Surat","Lucknow","Nagpur","Indore","Thane","Bhopal","Patna","Ghaziabad",
  "Nashik","Varanasi","Chandigarh","Coimbatore","Goa","Noida","Gurgaon","Kochi",
  "Mysore","Dehradun","Bhubaneswar","Amritsar","Raipur","Mangalore","Udaipur",
  "Pimpri-Chinchwad","Trivandrum","Srinagar","Jalandhar","Agra","Faridabad",
  "Meerut","Visakhapatnam","Rajkot","Vadodara","Ludhiana",
];

export const PCP = [
  {id:"cpu",  n:"Processor (CPU)",  nm:"प्रोसेसर (CPU)",    ph:"e.g. Ryzen 5 7600X or i5-13600K"},
  {id:"gpu",  n:"Graphics Card",    nm:"ग्राफिक्स कार्ड",   ph:"e.g. RTX 4060 Ti or RX 7600"},
  {id:"ram",  n:"RAM",              nm:"RAM",                ph:"e.g. 16GB DDR5 6000MHz"},
  {id:"mobo", n:"Motherboard",      nm:"मदरबोर्ड",           ph:"e.g. B650 or Z790"},
  {id:"stor", n:"Storage",          nm:"स्टोरेज",            ph:"e.g. 1TB NVMe Gen4 SSD"},
  {id:"psu",  n:"Power Supply",     nm:"पॉवर सप्लाय",        ph:"e.g. 750W 80+ Gold"},
  {id:"case", n:"Case",             nm:"केस",                ph:"e.g. Mid-tower ATX"},
  {id:"cool", n:"CPU Cooler",       nm:"CPU कूलर",           ph:"e.g. AIO 240mm or NH-D15"},
];

/* ═══════════════════════════════════════════════════════════
   CAT_CONF — every sub-type has its own pris list.
   When user picks a sub-type, they see those specific priorities.
   If no sub picked yet, category-level pris are shown as default.
═══════════════════════════════════════════════════════════ */
export const CAT_CONF = {

  ac: {
    hasHH: true,
    pris: ["cooling","energy","quiet","smart","brand","price","size"],
    sub: {
      "Split AC":    {pris:["cooling","energy","quiet","smart","brand","price"],         bud:["Under ₹28K","₹28K–40K","₹40K–55K","₹55K+"]},
      "Window AC":   {pris:["cooling","energy","quiet","size","price","brand"],           bud:["Under ₹22K","₹22K–32K","₹32K+"]},
      "Portable AC": {pris:["portability","cooling","quiet","size","energy","price"],     bud:["Under ₹30K","₹30K–50K","₹50K+"]},
      "Cassette AC": {pris:["cooling","capacity","energy","quiet","brand","price"],       bud:["₹50K–80K","₹80K+"]},
      "Inverter AC": {pris:["energy","cooling","quiet","smart","brand","price"],          bud:["Under ₹35K","₹35K–55K","₹55K+"]},
    }
  },

  cool: {
    hasHH: false,
    pris: ["airflow","quiet","energy","design","smart","brand","price"],
    sub: {
      "Ceiling Fan":   {pris:["airflow","energy","quiet","design","smart","brand","price"],    bud:["Under ₹2K","₹2K–4K","₹4K–8K","₹8K+"]},
      "Tower Fan":     {pris:["airflow","quiet","coverage","modes","design","price"],           bud:["Under ₹3K","₹3K–6K","₹6K–12K","₹12K+"]},
      "Pedestal Fan":  {pris:["airflow","quiet","portability","modes","size","price"],          bud:["Under ₹2K","₹2K–5K","₹5K+"]},
      "Air Cooler":    {pris:["coverage","airflow","cooling","quiet","portability","energy","price"], bud:["Under ₹6K","₹6K–12K","₹12K–20K","₹20K+"]},
      "Desert Cooler": {pris:["coverage","airflow","cooling","energy","quiet","brand","price"], bud:["Under ₹8K","₹8K–15K","₹15K+"]},
    }
  },

  fridge: {
    hasHH: true,
    pris: ["capacity","energy","cooling","brand","design","price"],
    sub: {
      "Single Door":  {pris:["capacity","energy","cooling","quiet","brand","price"],            bud:["Under ₹12K","₹12K–18K","₹18K+"]},
      "Double Door":  {pris:["capacity","energy","cooling","design","brand","price"],           bud:["₹18K–30K","₹30K–45K","₹45K+"]},
      "Triple Door":  {pris:["capacity","energy","design","smart","brand","price"],             bud:["₹35K–55K","₹55K+"]},
      "Side-by-Side": {pris:["capacity","design","smart","energy","brand","price"],             bud:["₹60K–1L","₹1L+"]},
      "French Door":  {pris:["design","capacity","smart","energy","brand","price"],             bud:["₹70K–1.2L","₹1.2L+"]},
      "Mini Fridge":  {pris:["size","capacity","energy","quiet","price","brand"],               bud:["Under ₹8K","₹8K–15K","₹15K+"]},
    }
  },

  washer: {
    hasHH: true,
    pris: ["capacity","energy","quiet","ease","brand","price"],
    sub: {
      "Front Load":        {pris:["quality","energy","capacity","quiet","smart","brand","price"], bud:["Under ₹25K","₹25K–40K","₹40K–60K","₹60K+"]},
      "Top Load":          {pris:["capacity","ease","energy","quiet","brand","price"],            bud:["Under ₹12K","₹12K–22K","₹22K–35K","₹35K+"]},
      "Semi-Auto":         {pris:["capacity","ease","durability","brand","price"],                bud:["Under ₹8K","₹8K–14K","₹14K+"]},
      "Washer-Dryer Combo":{pris:["quality","energy","capacity","quiet","brand","price"],        bud:["₹45K–70K","₹70K+"]},
    }
  },

  kitchen: {
    hasHH: true,
    pris: ["capacity","ease","energy","brand","price"],
    sub: {
      "Microwave":       {pris:["capacity","modes","convection","ease","brand","price"],        bud:["Under ₹5K","₹5K–10K","₹10K–20K","₹20K+"]},
      "OTG Oven":        {pris:["capacity","convection","modes","perf","brand","price"],        bud:["Under ₹4K","₹4K–8K","₹8K–15K","₹15K+"]},
      "Air Fryer":       {pris:["capacity","health","modes","ease","quiet","price"],            bud:["Under ₹3K","₹3K–6K","₹6K–12K","₹12K+"]},
      "Mixer Grinder":   {pris:["motor","jars","quiet","attachments","durability","price"],     bud:["Under ₹2K","₹2K–4K","₹4K–8K","₹8K+"]},
      "Induction Cooktop":{pris:["perf","modes","safety","ease","portability","price"],         bud:["Under ₹2K","₹2K–4K","₹4K–8K","₹8K+"]},
      "Water Purifier":  {pris:["filter","capacity","smart","ease","brand","price"],            bud:["Under ₹8K","₹8K–15K","₹15K–30K","₹30K+"]},
      "Dishwasher":      {pris:["capacity","programs","energy","quiet","brand","price"],        bud:["₹20K–40K","₹40K–60K","₹60K+"]},
      "Chimney":         {pris:["suction","quiet","coverage","filter","design","price"],        bud:["Under ₹8K","₹8K–18K","₹18K–35K","₹35K+"]},
      "Juicer":          {pris:["motor","capacity","quiet","ease","attachments","price"],       bud:["Under ₹2K","₹2K–5K","₹5K–12K","₹12K+"]},
    }
  },

  geyser: {
    hasHH: true,
    pris: ["capacity","energy","safety","brand","price","warranty"],
    sub: {
      "Instant Geyser":      {pris:["perf","safety","size","brand","price","warranty"],         bud:["Under ₹3K","₹3K–6K","₹6K–12K","₹12K+"]},
      "Storage Geyser":      {pris:["capacity","energy","safety","brand","price","warranty"],   bud:["Under ₹5K","₹5K–10K","₹10K–20K","₹20K+"]},
      "Room Heater":         {pris:["coverage","safety","energy","quiet","portability","price"],bud:["Under ₹2K","₹2K–4K","₹4K–8K","₹8K+"]},
      "Heat Pump":           {pris:["energy","capacity","smart","brand","price","warranty"],    bud:["₹30K–60K","₹60K+"]},
      "Solar Water Heater":  {pris:["capacity","energy","quality","brand","price","warranty"],  bud:["Under ₹20K","₹20K–40K","₹40K+"]},
    }
  },

  tv: {
    hasHH: false,
    pris: ["display","size","smart","brand","price","energy"],
    sub: {
      "LED TV":    {pris:["display","size","smart","energy","brand","price"],              bud:["Under ₹18K","₹18K–35K","₹35K–55K","₹55K+"]},
      "OLED TV":   {pris:["display","brightness","design","smart","brand","price"],        bud:["₹80K–1.2L","₹1.2L–2L","₹2L+"]},
      "QLED TV":   {pris:["brightness","display","smart","energy","brand","price"],        bud:["₹40K–70K","₹70K–1.2L","₹1.2L+"]},
      "Smart TV":  {pris:["smart","display","size","connectivity","brand","price"],        bud:["Under ₹20K","₹20K–40K","₹40K+"]},
      "Mini LED":  {pris:["brightness","display","smart","energy","brand","price"],        bud:["₹60K–1L","₹1L+"]},
      "Projector": {pris:["brightness","resolution","portability","connectivity","brand","price"], bud:["Under ₹20K","₹20K–50K","₹50K–1L","₹1L+"]},
    }
  },

  monitor: {
    hasHH: false,
    pris: ["display","refresh","resolution","connectivity","brand","price"],
    sub: {
      "4K Monitor":       {pris:["resolution","panel","color_acc","connectivity","ergo","brand","price"], bud:["Under ₹20K","₹20K–40K","₹40K–80K","₹80K+"]},
      "Gaming Monitor":   {pris:["refresh","response","panel","resolution","connectivity","price"],       bud:["Under ₹15K","₹15K–30K","₹30K–60K","₹60K+"]},
      "Ultrawide":        {pris:["resolution","panel","refresh","size","connectivity","price"],           bud:["₹30K–60K","₹60K–1L","₹1L+"]},
      "Portable Monitor": {pris:["resolution","portability","battery","connectivity","size","price"],     bud:["Under ₹10K","₹10K–20K","₹20K+"]},
      "Office Monitor":   {pris:["display","ergo","connectivity","panel","brand","price"],               bud:["Under ₹10K","₹10K–20K","₹20K–40K","₹40K+"]},
    }
  },

  audio: {
    hasHH: false,
    pris: ["perf","quiet","battery","connectivity","brand","price"],
    sub: {
      "TWS Earbuds":         {pris:["perf","quiet","battery","waterproof","connectivity","brand","price"],   bud:["Under ₹2K","₹2K–5K","₹5K–12K","₹12K–25K","₹25K+"]},
      "Over-Ear Headphones": {pris:["perf","quiet","ergo","battery","connectivity","brand","price"],         bud:["Under ₹3K","₹3K–8K","₹8K–20K","₹20K–50K","₹50K+"]},
      "Soundbar":            {pris:["perf","modes","connectivity","size","brand","price"],                  bud:["Under ₹5K","₹5K–15K","₹15K–35K","₹35K+"]},
      "2.1 Speaker System":  {pris:["perf","modes","connectivity","brand","size","price"],                  bud:["Under ₹3K","₹3K–10K","₹10K–30K","₹30K+"]},
      "Smart Speaker":       {pris:["smart","perf","connectivity","ease","brand","price"],                  bud:["Under ₹3K","₹3K–8K","₹8K–20K","₹20K+"]},
      "Bluetooth Speaker":   {pris:["perf","battery","portability","waterproof","brand","price"],           bud:["Under ₹2K","₹2K–5K","₹5K–15K","₹15K+"]},
      "DAC/Amp":             {pris:["perf","connectivity","quality","design","brand","price"],               bud:["Under ₹5K","₹5K–15K","₹15K–40K","₹40K+"]},
    }
  },

  phone: {
    hasHH: false,
    pris: ["camera","perf","battery","display","brand","price"],
    sub: {
      "Flagship":        {pris:["camera","display","perf","ecosystem","design","brand","price"], bud:["₹60K–90K","₹90K–1.2L","₹1.2L+"]},
      "Upper Mid-Range": {pris:["camera","perf","battery","display","brand","price"],             bud:["₹35K–50K","₹50K–65K"]},
      "Mid-Range":       {pris:["camera","battery","perf","display","value","price"],             bud:["₹20K–30K","₹30K–40K"]},
      "Budget":          {pris:["battery","value","perf","durability","brand","price"],           bud:["Under ₹8K","₹8K–12K","₹12K–18K"]},
      "Camera-Focused":  {pris:["camera","sensor","display","battery","perf","price"],            bud:["₹30K–60K","₹60K+"]},
      "Gaming Phone":    {pris:["perf","cooling","display","battery","triggers","price"],         bud:["₹30K–55K","₹55K+"]},
      "Foldable":        {pris:["design","display","ecosystem","camera","brand","price"],         bud:["₹1L–1.5L","₹1.5L+"]},
    }
  },

  laptop: {
    hasHH: false,
    pris: ["perf","battery","display","portability","brand","price"],
    sub: {
      "Ultrabook":            {pris:["portability","battery","display","perf","quality","brand","price"],   bud:["₹50K–80K","₹80K–1.2L","₹1.2L+"]},
      "Gaming Laptop":        {pris:["perf","cooling","display","refresh","brand","price"],                 bud:["₹60K–90K","₹90K–1.5L","₹1.5L+"]},
      "Business Laptop":      {pris:["battery","portability","display","quality","brand","price"],          bud:["₹50K–80K","₹80K–1.2L","₹1.2L+"]},
      "Creative Workstation": {pris:["display","color_acc","perf","quality","brand","price"],               bud:["₹1L–1.5L","₹1.5L–2.5L","₹2.5L+"]},
      "2-in-1":               {pris:["portability","display","battery","perf","brand","price"],             bud:["₹50K–90K","₹90K–1.5L","₹1.5L+"]},
      "Budget Laptop":        {pris:["value","perf","battery","quality","brand","price"],                   bud:["Under ₹30K","₹30K–45K","₹45K–60K"]},
      "Chromebook":           {pris:["battery","ease","portability","display","price","brand"],             bud:["Under ₹20K","₹20K–35K","₹35K+"]},
    }
  },

  tablet: {
    hasHH: false,
    pris: ["display","perf","battery","portability","brand","price"],
    sub: {
      "Premium Tablet":    {pris:["display","perf","ecosystem","connectivity","brand","price"],       bud:["₹60K–90K","₹90K+"]},
      "Android Mid-Range": {pris:["display","perf","battery","value","brand","price"],                bud:["₹15K–30K","₹30K–50K"]},
      "Kids Tablet":       {pris:["durability","parental","ease","battery","price","brand"],          bud:["Under ₹10K","₹10K–20K"]},
      "E-Reader":          {pris:["display","battery","portability","price","brand","quality"],       bud:["Under ₹8K","₹8K–18K","₹18K+"]},
      "Drawing Tablet":    {pris:["pressure","size","connectivity","brand","price","quality"],        bud:["Under ₹5K","₹5K–15K","₹15K–40K","₹40K+"]},
    }
  },

  smart: {
    hasHH: false,
    pris: ["smart","connectivity","ease","brand","price","quality"],
    sub: {
      "Smart Lock":          {pris:["safety","connectivity","ease","brand","battery","price"],         bud:["Under ₹8K","₹8K–18K","₹18K+"]},
      "Security Camera":     {pris:["resolution","night_vis","connectivity","smart","capacity","price"],bud:["Under ₹2K","₹2K–5K","₹5K–15K","₹15K+"]},
      "Video Doorbell":      {pris:["resolution","night_vis","connectivity","smart","battery","price"],bud:["Under ₹3K","₹3K–7K","₹7K–15K","₹15K+"]},
      "Smart Plug":          {pris:["smart","connectivity","ease","energy","brand","price"],           bud:["Under ₹500","₹500–1.5K","₹1.5K+"]},
      "Robot Vacuum":        {pris:["suction","mapping","battery","smart","brand","price"],            bud:["Under ₹10K","₹10K–25K","₹25K–50K","₹50K+"]},
      "Smart Lighting":      {pris:["smart","design","connectivity","modes","brand","price"],          bud:["Under ₹1K","₹1K–3K","₹3K+"]},
      "Smart AC Controller": {pris:["connectivity","smart","ease","brand","price","quality"],          bud:["Under ₹2K","₹2K–5K","₹5K+"]},
      "Smart TV Box":        {pris:["perf","connectivity","smart","ease","brand","price"],             bud:["Under ₹3K","₹3K–8K","₹8K+"]},
    }
  },

  network: {
    hasHH: false,
    pris: ["perf","coverage","connectivity","ease","brand","price"],
    sub: {
      "Wi-Fi Router":      {pris:["perf","coverage","connectivity","ease","brand","price"],          bud:["Under ₹2K","₹2K–4K","₹4K–8K","₹8K+"]},
      "Mesh Wi-Fi System": {pris:["coverage","perf","ease","smart","brand","price"],                 bud:["₹5K–12K","₹12K–25K","₹25K+"]},
      "5G Router":         {pris:["perf","connectivity","portability","brand","price","battery"],    bud:["₹5K–12K","₹12K–25K","₹25K+"]},
      "Range Extender":    {pris:["coverage","ease","perf","brand","price","design"],                bud:["Under ₹1.5K","₹1.5K–4K","₹4K+"]},
      "Wi-Fi 7 Router":    {pris:["perf","coverage","connectivity","smart","brand","price"],         bud:["₹15K–30K","₹30K+"]},
    }
  },

  health: {
    hasHH: false,
    pris: ["quality","ease","brand","price","durability"],
    sub: {
      "Electric Toothbrush": {pris:["modes","battery","waterproof","quality","brand","price"],          bud:["Under ₹1K","₹1K–3K","₹3K–8K","₹8K+"]},
      "Trimmer":             {pris:["blade","battery","attachments","waterproof","brand","price"],      bud:["Under ₹1K","₹1K–2.5K","₹2.5K–6K","₹6K+"]},
      "Hair Dryer":          {pris:["perf","modes","quiet","portability","brand","price"],              bud:["Under ₹1K","₹1K–3K","₹3K–7K","₹7K+"]},
      "Hair Straightener":   {pris:["modes","accuracy","quality","brand","price","ease"],               bud:["Under ₹1.5K","₹1.5K–4K","₹4K–10K","₹10K+"]},
      "BP Monitor":          {pris:["accuracy","ease","connectivity","quality","brand","price"],        bud:["Under ₹1.5K","₹1.5K–3.5K","₹3.5K–7K","₹7K+"]},
      "Glucometer":          {pris:["accuracy","ease","attachments","brand","price","quality"],         bud:["Under ₹1K","₹1K–2.5K","₹2.5K+"]},
      "Pulse Oximeter":      {pris:["accuracy","ease","display","brand","price","quality"],             bud:["Under ₹500","₹500–1.5K","₹1.5K+"]},
      "Massager":            {pris:["modes","perf","portability","battery","brand","price"],            bud:["Under ₹1K","₹1K–3K","₹3K–8K","₹8K+"]},
    }
  },

  wearable: {
    hasHH: false,
    pris: ["display","health_track","battery","smart","brand","price"],
    sub: {
      "Smartwatch":      {pris:["display","health_track","battery","ecosystem","design","brand","price"], bud:["Under ₹3K","₹3K–8K","₹8K–20K","₹20K–50K","₹50K+"]},
      "Fitness Band":    {pris:["health_track","battery","waterproof","display","brand","price"],         bud:["Under ₹2K","₹2K–5K","₹5K–12K","₹12K+"]},
      "Smart Ring":      {pris:["health_track","battery","design","waterproof","brand","price"],          bud:["₹8K–20K","₹20K+"]},
      "GPS Watch":       {pris:["gps","health_track","battery","durability","brand","price"],             bud:["Under ₹15K","₹15K–35K","₹35K–80K","₹80K+"]},
      "Kids Smartwatch": {pris:["safety","battery","ease","durability","brand","price"],                  bud:["Under ₹3K","₹3K–8K","₹8K+"]},
    }
  },

  camera: {
    hasHH: false,
    pris: ["sensor","autofocus","perf","brand","price","portability"],
    sub: {
      "Mirrorless":      {pris:["sensor","autofocus","video_rec","ecosystem","quality","brand","price"],    bud:["Under ₹50K","₹50K–1L","₹1L–2L","₹2L+"]},
      "DSLR":            {pris:["sensor","autofocus","battery","ecosystem","quality","brand","price"],      bud:["Under ₹40K","₹40K–80K","₹80K–1.5L","₹1.5L+"]},
      "Action Camera":   {pris:["durability","stabilize","resolution","waterproof","battery","price"],     bud:["Under ₹10K","₹10K–25K","₹25K–50K","₹50K+"]},
      "Vlogging Camera": {pris:["flip_scr","autofocus","stabilize","video_rec","battery","price"],         bud:["Under ₹30K","₹30K–60K","₹60K–1L","₹1L+"]},
      "Compact Camera":  {pris:["sensor","perf","portability","ease","brand","price"],                     bud:["Under ₹20K","₹20K–40K","₹40K–80K","₹80K+"]},
      "Drone":           {pris:["video_rec","stabilize","battery","portability","brand","price"],           bud:["Under ₹20K","₹20K–50K","₹50K–1.5L","₹1.5L+"]},
      "Webcam":          {pris:["resolution","autofocus","modes","connectivity","brand","price"],           bud:["Under ₹2K","₹2K–5K","₹5K–12K","₹12K+"]},
    }
  },

  gaming: {
    hasHH: false,
    pris: ["perf","brand","price","connectivity","durability"],
    sub: {
      "Gaming Console":   {pris:["perf","game_lib","connectivity","brand","design","price"],             bud:["Under ₹20K","₹20K–40K","₹40K+"]},
      "Gaming Monitor":   {pris:["refresh","response","resolution","panel","connectivity","price"],      bud:["Under ₹15K","₹15K–30K","₹30K–60K","₹60K+"]},
      "Gaming Chair":     {pris:["ergo","quality","durability","brand","price","design"],               bud:["Under ₹8K","₹8K–18K","₹18K–35K","₹35K+"]},
      "Controller":       {pris:["ergo","connectivity","battery","brand","price","quality"],             bud:["Under ₹2K","₹2K–5K","₹5K–10K","₹10K+"]},
      "Headset":          {pris:["perf","quiet","ergo","connectivity","brand","price"],                  bud:["Under ₹2K","₹2K–6K","₹6K–15K","₹15K+"]},
      "Gaming Keyboard":  {pris:["switch_type","quality","connectivity","modes","brand","price"],        bud:["Under ₹2K","₹2K–6K","₹6K–15K","₹15K+"]},
      "Gaming Mouse":     {pris:["perf","ergo","connectivity","quality","brand","price"],               bud:["Under ₹1.5K","₹1.5K–4K","₹4K–10K","₹10K+"]},
    }
  },

  purifier: {
    hasHH: true,
    pris: ["filter","coverage","quiet","smart","brand","price"],
    sub: {
      "HEPA Air Purifier": {pris:["filter","coverage","quiet","smart","energy","brand","price"],    bud:["Under ₹5K","₹5K–10K","₹10K–20K","₹20K–40K","₹40K+"]},
      "UV Air Purifier":   {pris:["filter","coverage","quiet","quality","brand","price"],           bud:["Under ₹6K","₹6K–15K","₹15K+"]},
      "Car Air Purifier":  {pris:["size","filter","connectivity","ease","brand","price"],           bud:["Under ₹2K","₹2K–5K","₹5K+"]},
      "Portable Purifier": {pris:["portability","filter","battery","ease","brand","price"],         bud:["Under ₹3K","₹3K–8K","₹8K+"]},
    }
  },

  vacuum: {
    hasHH: false,
    pris: ["suction","battery","portability","brand","price"],
    sub: {
      "Robot Vacuum":    {pris:["suction","mapping","battery","smart","brand","price"],             bud:["Under ₹10K","₹10K–25K","₹25K–50K","₹50K+"]},
      "Stick Vacuum":    {pris:["suction","battery","portability","attachments","brand","price"],   bud:["Under ₹5K","₹5K–12K","₹12K–25K","₹25K+"]},
      "Wet & Dry Vacuum":{pris:["suction","capacity","durability","attachments","brand","price"],   bud:["Under ₹4K","₹4K–10K","₹10K–20K","₹20K+"]},
      "Handheld Vacuum": {pris:["suction","battery","portability","ease","brand","price"],          bud:["Under ₹2K","₹2K–5K","₹5K–12K","₹12K+"]},
      "Bagless Vacuum":  {pris:["suction","capacity","filter","ease","brand","price"],              bud:["Under ₹6K","₹6K–15K","₹15K–30K","₹30K+"]},
    }
  },

  storage: {
    hasHH: false,
    pris: ["perf","capacity","portability","durability","brand","price"],
    sub: {
      "External SSD":    {pris:["perf","capacity","durability","portability","brand","price"],      bud:["Under ₹3K","₹3K–6K","₹6K–15K","₹15K+"]},
      "External HDD":    {pris:["capacity","perf","durability","portability","brand","price"],      bud:["Under ₹3K","₹3K–6K","₹6K–12K","₹12K+"]},
      "Power Bank":      {pris:["capacity","charging","portability","safety","brand","price"],      bud:["Under ₹1K","₹1K–2.5K","₹2.5K–6K","₹6K+"]},
      "UPS / Inverter":  {pris:["capacity","backup","connectivity","brand","price","warranty"],     bud:["Under ₹5K","₹5K–12K","₹12K–25K","₹25K+"]},
      "NAS Drive":       {pris:["capacity","perf","connectivity","smart","brand","price"],          bud:["₹15K–35K","₹35K–80K","₹80K+"]},
      "USB Hub":         {pris:["connectivity","charging","portability","brand","price","quality"], bud:["Under ₹1K","₹1K–2.5K","₹2.5K–6K","₹6K+"]},
      "Portable Charger":{pris:["capacity","charging","portability","safety","brand","price"],      bud:["Under ₹800","₹800–2K","₹2K–5K","₹5K+"]},
    }
  },

  ebike: {
    hasHH: false,
    pris: ["range","perf","safety","brand","price","warranty"],
    sub: {
      "Electric Scooter":    {pris:["range","perf","charging","safety","brand","price"],            bud:["Under ₹50K","₹50K–80K","₹80K–1.2L","₹1.2L+"]},
      "Electric Cycle":      {pris:["range","perf","quality","ease","brand","price"],               bud:["Under ₹30K","₹30K–55K","₹55K–1L","₹1L+"]},
      "E-Bike":              {pris:["range","perf","quality","safety","brand","price"],             bud:["₹60K–1L","₹1L–1.5L","₹1.5L+"]},
      "EV Accessories":      {pris:["quality","connectivity","safety","ease","brand","price"],      bud:["Under ₹2K","₹2K–8K","₹8K+"]},
      "Portable EV Charger": {pris:["charging","portability","safety","brand","price","quality"],   bud:["Under ₹5K","₹5K–15K","₹15K+"]},
    }
  },
};

/**
 * Returns sub-level pris when a sub-type is selected.
 * Falls back to category-level pris if no sub is selected.
 */
export const getCatConf = (catId, subName) => {
  const c = CAT_CONF[catId] || { hasHH: false, pris: ["quality","perf","brand","price","ease","design"] };
  const s = (c.sub && subName) ? c.sub[subName] : null;
  return {
    hasHH: c.hasHH,
    pris:  s?.pris || c.pris,   // sub-level when available, category fallback
    bud:   s?.bud  || BUD[catId] || BUD.default,
  };
};
