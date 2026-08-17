import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle2, Terminal, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundFX } from '../utils/audio';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [transmitted, setTransmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    soundFX.playBeep();
    setIsTransmitting(true);

    setTimeout(() => {
      setIsTransmitting(false);
      setTransmitted(true);
      soundFX.playBeep();
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setTransmitted(false), 4000);
    }, 1200);
  };

  const copyEmail = () => {
    soundFX.playClick();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" style={{ padding: '80px 0', position: 'relative', backgroundColor: '#070a12' }}>
      <div style={{ width: '100%', maxWidth: '1240px', margin: '0 auto', padding: '0 2rem' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 50px auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '8px',
              backgroundColor: '#18181b',
              border: '1px solid rgba(163, 230, 53, 0.4)',
              color: '#a3e635',
              fontSize: '12px',
              fontFamily: 'JetBrains Mono, monospace',
              fontWeight: 600
            }}>
              <Mail size={14} color="#a3e635" />
              <span>DIRECT TELEMETRY</span>
            </div>
          </div>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p style={{ color: '#a1a1aa', fontSize: '0.95rem', margin: 0, lineHeight: 1.6 }}>
            Open for full-time Full Stack Engineering opportunities, AI project collaborations, or technical inquiries.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '3rem', maxWidth: '1024px', margin: '0 auto', alignItems: 'start' }}>
          
          {/* Left Column: Direct Contact Info */}
          <div style={{ gridColumn: 'span 5 / span 5', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', fontFamily: 'JetBrains Mono, monospace', display: 'flex', alignItems: 'center', gap: '8px', margin: 0 }}>
                <Terminal size={18} color="#a3e635" />
                <span>CHANNELS</span>
              </h3>

              {/* Email */}
              <div style={{ padding: '16px', borderRadius: '10px', backgroundColor: '#18181b', border: '1px solid #27272a', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '8px', backgroundColor: 'rgba(163, 230, 53, 0.1)', border: '1px solid rgba(163, 230, 53, 0.3)', color: '#a3e635', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '10px', fontFamily: 'JetBrains Mono, monospace', color: '#71717a', textTransform: 'uppercase' }}>Email</div>
                    <a href={`mailto:${PERSONAL_INFO.email}`} style={{ fontSize: '12px', fontFamily: 'JetBrains Mono, monospace', color: '#e4e4e7', textDecoration: 'none' }}>
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  title="Copy email to clipboard"
                  style={{ padding: '8px', borderRadius: '6px', backgroundColor: '#27272a', color: '#a1a1aa', border: 'none', cursor: 'pointer' }}
                >
                  {copiedEmail ? <Check size={16} color="#34d399" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone */}
              <div style={{ padding: '16px', borderRadius: '10px', backgroundColor: '#18181b', border: '1px solid #27272a', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '8px', backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', color: '#34d399', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Phone size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '10px', fontFamily: 'JetBrains Mono, monospace', color: '#71717a', textTransform: 'uppercase' }}>Phone</div>
                  <a href={`tel:${PERSONAL_INFO.phone}`} style={{ fontSize: '12px', fontFamily: 'JetBrains Mono, monospace', color: '#e4e4e7', textDecoration: 'none' }}>
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div style={{ padding: '16px', borderRadius: '10px', backgroundColor: '#18181b', border: '1px solid #27272a', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '8px', backgroundColor: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.3)', color: '#818cf8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '10px', fontFamily: 'JetBrains Mono, monospace', color: '#71717a', textTransform: 'uppercase' }}>Location</div>
                  <div style={{ fontSize: '12px', fontFamily: 'JetBrains Mono, monospace', color: '#e4e4e7' }}>{PERSONAL_INFO.location}</div>
                </div>
              </div>

              {/* Social Buttons */}
              <div style={{ paddingTop: '16px', borderTop: '1px solid #27272a', display: 'flex', gap: '12px' }}>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundFX.playClick()}
                  style={{ flex: 1, height: '40px', borderRadius: '8px', backgroundColor: '#18181b', border: '1px solid #27272a', color: '#d4d4d8', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '12px', fontFamily: 'JetBrains Mono, monospace', textDecoration: 'none' }}
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundFX.playClick()}
                  style={{ flex: 1, height: '40px', borderRadius: '8px', backgroundColor: '#18181b', border: '1px solid #27272a', color: '#d4d4d8', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '12px', fontFamily: 'JetBrains Mono, monospace', textDecoration: 'none' }}
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Terminal Form */}
          <div style={{ gridColumn: 'span 7 / span 7' }}>
            <div className="glass-card" style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', fontFamily: 'JetBrains Mono, monospace', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', margin: 0 }}>
                <span>SEND DIRECT MESSAGE</span>
                <span className="tech-pill emerald" style={{ fontSize: '10px' }}>ENCRYPTED</span>
              </h3>

              {transmitted ? (
                <div style={{ padding: '32px', borderRadius: '12px', backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <CheckCircle2 size={36} color="#34d399" style={{ margin: '0 auto' }} />
                  <h4 style={{ color: '#ffffff', fontWeight: 700, fontSize: '1rem', fontFamily: 'JetBrains Mono, monospace', margin: 0 }}>Transmission Dispatched</h4>
                  <p style={{ color: '#d4d4d8', fontSize: '12px', fontFamily: 'JetBrains Mono, monospace', margin: 0 }}>
                    Thank you! Your message has been encrypted and delivered to Cathrin R.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontFamily: 'JetBrains Mono, monospace', color: '#a1a1aa', textTransform: 'uppercase', marginBottom: '6px' }}>Your Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="e.g. Alex Johnson"
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', backgroundColor: '#18181b', border: '1px solid #27272a', color: '#fafafa', fontSize: '12px', fontFamily: 'JetBrains Mono, monospace', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontFamily: 'JetBrains Mono, monospace', color: '#a1a1aa', textTransform: 'uppercase', marginBottom: '6px' }}>Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="alex@company.com"
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', backgroundColor: '#18181b', border: '1px solid #27272a', color: '#fafafa', fontSize: '12px', fontFamily: 'JetBrains Mono, monospace', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontFamily: 'JetBrains Mono, monospace', color: '#a1a1aa', textTransform: 'uppercase', marginBottom: '6px' }}>Message Payload</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      placeholder="Discuss job opportunities, project requirements, or technical collaborations..."
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', backgroundColor: '#18181b', border: '1px solid #27272a', color: '#fafafa', fontSize: '12px', fontFamily: 'JetBrains Mono, monospace', outline: 'none' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isTransmitting}
                    className="btn-primary"
                    style={{ width: '100%', height: '44px', fontSize: '12px' }}
                  >
                    {isTransmitting ? (
                      <span>Transmitting Payload...</span>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Transmit Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
