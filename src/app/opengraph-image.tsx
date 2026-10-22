import { ImageResponse } from 'next/og';
export const runtime = 'edge';
export const alt = 'Husan Aulakh — Software Engineering, AI and Robotics';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', background: '#f3ecdd', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 90, fontFamily: 'Georgia, serif', color: '#332b26' }}>
      <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 24, textTransform: 'uppercase', letterSpacing: 5, color: '#704431', marginBottom: 28 }}>Software engineering · Applied AI · Robotics</div>
      <div style={{ fontSize: 104, lineHeight: 1.1, fontWeight: 700 }}>Husan Aulakh</div>
      <div style={{ fontFamily: 'Arial, sans-serif', marginTop: 28, fontSize: 33, color: '#4f5444' }}>Building dependable systems from prototype to production.</div>
    </div>,
    { ...size }
  );
}
