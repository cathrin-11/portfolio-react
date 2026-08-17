import React, { useState, useEffect, useRef } from 'react';
import { X, Terminal, CornerDownLeft } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, EXPERIENCE, EDUCATION, CERTIFICATIONS } from '../data/portfolioData';
import { soundFX } from '../utils/audio';

export default function TerminalModal({ isOpen, onClose, onOpenResume, onOpenAiDemo }) {
  if (!isOpen) return null;

  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'CATHRIN.GOLD HUD CLI v3.0 initialized. Type "help" or "skills" to inspect system telemetry.' },
    { type: 'system', text: 'Commands: help | skills | projects | experience | education | certs | resume | ai | contact | clear' }
  ]);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    soundFX.playTerminalKey();
    const newHistory = [...history, { type: 'input', text: `$ ${inputVal}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `AVAILABLE COMMANDS:
  help          - Display HUD command directory
  skills        - List full Node.js & technical skills matrix
  projects      - List engineered project systems
  experience    - Display Junior Web Developer internship
  education     - Display degree & academic honors
  certs         - Display verified certifications
  contact       - Show email, phone & direct channels
  resume        - Launch printable resume viewer
  ai            - Launch AI Nurse Matcher sandbox
  whoami        - System user profile info
  clear         - Clear terminal screen`
        });
        break;

      case 'skills':
        const skillsText = SKILL_CATEGORIES.map(cat => 
          `[${cat.title.toUpperCase()}]\n  ` + cat.skills.join(', ')
        ).join('\n\n');
        newHistory.push({ type: 'output', text: skillsText });
        break;

      case 'projects':
        const projText = PROJECTS.map((p, i) => 
          `${i + 1}. ${p.title.toUpperCase()}\n   Badge: ${p.badge}\n   Stack: ${p.techStack.join(', ')}\n   Desc: ${p.shortDesc}`
        ).join('\n\n');
        newHistory.push({ type: 'output', text: projText });
        break;

      case 'experience':
        const expText = EXPERIENCE.map(e => 
          `ROLE: ${e.role} at ${e.company}\nPERIOD: ${e.period} (${e.location})\nDETAILS: ${e.description}`
        ).join('\n\n');
        newHistory.push({ type: 'output', text: expText });
        break;

      case 'education':
        const eduText = EDUCATION.map(ed => 
          `DEGREE: ${ed.degree}\nINSTITUTION: ${ed.institution} (${ed.location})\nGRADE: ${ed.grade}\nSPECIALIZATION: ${ed.details}`
        ).join('\n\n');
        newHistory.push({ type: 'output', text: eduText });
        break;

      case 'certs':
      case 'certifications':
        const certText = CERTIFICATIONS.map(c => 
          `• ${c.title} — ${c.issuer} (${c.badge}, ${c.year})`
        ).join('\n');
        newHistory.push({ type: 'output', text: certText });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `NAME: ${PERSONAL_INFO.name}\nEMAIL: ${PERSONAL_INFO.email}\nPHONE: ${PERSONAL_INFO.phone}\nSTACK: Node.js, React.js, Spring Boot\nGITHUB: ${PERSONAL_INFO.github}\nLINKEDIN: ${PERSONAL_INFO.linkedin}`
        });
        break;

      case 'whoami':
        newHistory.push({
          type: 'output',
          text: `USER: Guest Telemetry Agent\nROLE: Evaluating Cathrin R's Full Stack & Node.js Developer Portfolio`
        });
        break;

      case 'resume':
        onOpenResume();
        newHistory.push({ type: 'output', text: 'Launching Resume Viewer...' });
        break;

      case 'ai':
        onOpenAiDemo();
        newHistory.push({ type: 'output', text: 'Launching AI Nurse Cosine Matcher Demo Sandbox...' });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newHistory.push({
          type: 'output',
          text: `Command not recognized: "${cmd}". Type "help" for a list of valid HUD commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      zIndex: 2000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      backgroundColor: 'rgba(5, 5, 5, 0.9)',
      backdropFilter: 'blur(16px)'
    }}>
      <div 
        className="gold-card"
        style={{
          width: '100%',
          maxWidth: '820px',
          height: '540px',
          backgroundColor: '#0B0B0B',
          border: '1px solid #2A2414',
          borderRadius: '14px',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.95), 0 0 30px rgba(212, 175, 55, 0.15)'
        }}
      >
        {/* Terminal Header */}
        <div style={{
          padding: '14px 20px',
          backgroundColor: '#111111',
          borderBottom: '1px solid #1C1C1C',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Terminal size={16} color="#D4AF37" />
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', fontWeight: 700, color: '#D4AF37', letterSpacing: '0.05em' }}>
              CATHRIN.GOLD HUD TERMINAL
            </span>
          </div>

          <button
            onClick={onClose}
            style={{
              padding: '6px',
              borderRadius: '6px',
              backgroundColor: '#0B0B0B',
              border: '1px solid #1C1C1C',
              color: '#A8A39A',
              cursor: 'pointer'
            }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Terminal Body Screen */}
        <div style={{
          flex: 1,
          padding: '20px',
          overflowY: 'auto',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '13px',
          color: '#F5F3EE',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          backgroundColor: '#050505'
        }}>
          {history.map((item, idx) => (
            <div key={idx}>
              {item.type === 'system' && (
                <div style={{ color: '#D4AF37', opacity: 0.9 }}>{item.text}</div>
              )}
              {item.type === 'input' && (
                <div style={{ color: '#F5F3EE', fontWeight: 700 }}>{item.text}</div>
              )}
              {item.type === 'output' && (
                <div style={{ color: '#A8A39A', whiteSpace: 'pre-wrap', lineHeight: 1.6, paddingLeft: '12px', borderLeft: '2px solid #2A2414' }}>
                  {item.text}
                </div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Prompt Form Input */}
        <form 
          onSubmit={handleCommand}
          style={{
            padding: '12px 20px',
            backgroundColor: '#0B0B0B',
            borderTop: '1px solid #1C1C1C',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <span style={{ color: '#D4AF37', fontFamily: 'JetBrains Mono, monospace', fontWeight: 700 }}>$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type command (e.g. help, skills, projects, ai, contact)..."
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              border: 'none',
              color: '#F5F3EE',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '13px',
              outline: 'none'
            }}
          />
          <button type="submit" style={{ color: '#D4AF37', border: 'none', background: 'none', cursor: 'pointer' }}>
            <CornerDownLeft size={16} />
          </button>
        </form>

      </div>
    </div>
  );
}
