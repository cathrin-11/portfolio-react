import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { soundFX } from '../utils/audio';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      setTime(now.toUTCString().replace('GMT', 'UTC'));
    };
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    soundFX.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ borderTop: '1px solid #27272a', backgroundColor: '#05070c', padding: '36px 0', position: 'relative' }}>
      <div style={{ width: '100%', maxWidth: '1240px', margin: '0 auto', padding: '0 2rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
        
        {/* Left */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '6px', backgroundColor: 'rgba(163, 230, 53, 0.1)', border: '1px solid rgba(163, 230, 53, 0.3)', color: '#a3e635', fontFamily: 'JetBrains Mono, monospace', fontWeight: 800, fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            CR
          </div>
          <div>
            <div style={{ fontSize: '12px', fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, color: '#e4e4e7' }}>
              Cathrin R &copy; {new Date().getFullYear()}
            </div>
            <div style={{ fontSize: '10px', fontFamily: 'JetBrains Mono, monospace', color: '#71717a' }}>
              Full Stack Developer & AI Engineer Portfolio
            </div>
          </div>
        </div>

        {/* Center Timer */}
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#71717a' }}>
          <span style={{ color: '#a3e635', fontWeight: 600 }}>{time}</span>
        </div>

        {/* Right Scroll Top */}
        <button
          onClick={scrollToTop}
          style={{ padding: '8px 16px', borderRadius: '8px', backgroundColor: '#18181b', border: '1px solid #27272a', color: '#a1a1aa', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontFamily: 'JetBrains Mono, monospace' }}
        >
          <span>Return Top</span>
          <ArrowUp size={14} color="#a3e635" />
        </button>

      </div>
    </footer>
  );
}
