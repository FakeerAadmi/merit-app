/* ─── Category tonal colors (Material You) ─────── */
const CC = {
  ac:      {bg:'#EFF6FF',ic:'#2563EB',chip:'#BFDBFE'},
  cool:    {bg:'#F0F9FF',ic:'#0284C7',chip:'#BAE6FD'},
  fridge:  {bg:'#F0FDF4',ic:'#16A34A',chip:'#BBF7D0'},
  washer:  {bg:'#ECFDF5',ic:'#059669',chip:'#6EE7B7'},
  kitchen: {bg:'#FFF7ED',ic:'#EA580C',chip:'#FED7AA'},
  geyser:  {bg:'#FFF1F2',ic:'#E11D48',chip:'#FECDD3'},
  tv:      {bg:'#F5F3FF',ic:'#7C3AED',chip:'#DDD6FE'},
  monitor: {bg:'#EEF2FF',ic:'#4F46E5',chip:'#C7D2FE'},
  audio:   {bg:'#FDF4FF',ic:'#A855F7',chip:'#E9D5FF'},
  phone:   {bg:'#FFFBEB',ic:'#D97706',chip:'#FDE68A'},
  laptop:  {bg:'#ECFDF5',ic:'#059669',chip:'#A7F3D0'},
  tablet:  {bg:'#F5F3FF',ic:'#7C3AED',chip:'#C4B5FD'},
  smart:   {bg:'#EFF6FF',ic:'#3B82F6',chip:'#93C5FD'},
  network: {bg:'#F0FDFA',ic:'#0D9488',chip:'#99F6E4'},
  health:  {bg:'#FFF1F2',ic:'#E11D48',chip:'#FDA4AF'},
  wearable:{bg:'#FDF2F8',ic:'#DB2777',chip:'#FBCFE8'},
  camera:  {bg:'#FFFBEB',ic:'#D97706',chip:'#FDE68A'},
  gaming:  {bg:'#F5F0FF',ic:'#8B5CF6',chip:'#DDD6FE'},
  purifier:{bg:'#F0FDFA',ic:'#14B8A6',chip:'#CCFBF1'},
  vacuum:  {bg:'#F5F0FF',ic:'#8B5CF6',chip:'#E9D5FF'},
  storage: {bg:'#F8FAFC',ic:'#64748B',chip:'#CBD5E1'},
  ebike:   {bg:'#F0FDF4',ic:'#16A34A',chip:'#BBF7D0'},
};

const DEFAULT_COLOR = {bg:'#F5F5F5', ic:'#888', chip:'#DDD'};

export const getCatColor = (id) => CC[id] || DEFAULT_COLOR;
