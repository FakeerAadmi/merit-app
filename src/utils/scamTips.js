/* ─── Scam protection tips per category ─────── */
const scamEN = {
  ac: ['Check BEE star label physically.','Inverter ACs save 30-50% electricity.','Copper coils outlast aluminium.','1-ton covers ~120 sq ft.'],
  fridge: ['300L+ overkill for 4 people.','Inverter compressor is worth it — 24/7 run.','Check usable, not gross capacity.'],
  phone: ['Sensor size > megapixels.','Check OS update guarantee years.','Online 10-20% below offline MRP.'],
};

const scamMR = {
  ac: ['BEE स्टार रेटिंग प्रत्यक्ष तपासा.','इन्व्हर्टर AC ३०-५०% वीज वाचवतो.','१-टन ~१२० चौ.फू. कव्हर करतो.'],
  fridge: ['४ जणांसाठी ३००L+ अनावश्यक.','इन्व्हर्टर कंप्रेसर योग्य.','वापरण्यायोग्य क्षमता तपासा.'],
  phone: ['सेन्सर आकार > मेगापिक्सेल.','OS अपडेट वर्षे तपासा.','ऑनलाइन MRP पेक्षा १०-२०% कमी.'],
};

const defEN = ['Compare on 3+ platforms.','Check brand site for MRP.','Brand warranties beat third-party.','Read reviews 2-3 months post-launch.'];
const defMR = ['३+ प्लॅटफॉर्मवर तुलना करा.','MRP साठी ब्रँड साइट तपासा.','ब्रँड वॉरंटी चांगली.','लॉन्चनंतर २-३ महिन्यांचे रिव्ह्यू वाचा.'];

export const getScamTips = (id, lang) =>
  lang === 'mr' ? (scamMR[id] || defMR) : (scamEN[id] || defEN);
