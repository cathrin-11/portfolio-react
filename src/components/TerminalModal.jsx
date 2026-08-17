import React, { useState, useEffect, useRef } from 'react';
import { X, Terminal, CornerDownLeft, Sparkles, RefreshCw } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, EXPERIENCE, EDUCATION, CERTIFICATIONS } from '../data/portfolioData';
import { soundFX } from '../utils/audio';

export default function TerminalModal({ isOpen, onClose, onOpenResume, onOpenAiDemo }) {
  if (!isOpen) return null;

  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'CATHRIN.SYS HUD CLI v2.4 initialized. Type "help" or "skills" to begin.' },
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
  help          - Show this help menu
  skills        - List full technical skills matrix
  projects      - List engineered project systems
  experience    - Display Junior Web Developer internship
  education     - Display degree & academic honors
  certs         - Display verified certifications
  contact       - Show email, phone, location & profiles
  resume        - Launch interactive resume viewer
  ai            - Launch AI Nurse Matcher sandbox
  whoami        - System user profile info
  clear         - Clear terminal screen`
        });
        break;

      case 'skills':
        const skillsText = SKILL_CATEGORIES.map(cat => 
          `[${cat.title.toUpperCase()}]\n  ` + cat.skills.map(s => `${s.name} (${s.level}%)`).join(', ')
        ).join('\n\n');
        newHistory.push({ type: 'output', text: skillsText });
        break;

      case 'projects':
        const projText = PROJECTS.map((p, i) => 
          `${i + 1}. ${p.title.toUpperCase()}\n   Category: ${p.category}\n   Stack: ${p.techStack.join(', ')}\n   Desc: ${p.shortDesc}`
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
          text: `NAME: ${PERSONAL_INFO.name}\nEMAIL: ${PERSONAL_INFO.email}\nPHONE: ${PERSONAL_INFO.phone}\nLOCATION: ${PERSONAL_INFO.location}\nGITHUB: ${PERSONAL_INFO.github}\nLINKEDIN: ${PERSONAL_INFO.linkedin}`
        });
        break;

      case 'whoami':
        newHistory.push({
          type: 'output',
          text: `${PERSONAL_INFO.name} — ${PERSONAL_INFO.title}\nStatus: ${PERSONAL_INFO.status}\nBio: ${PERSONAL_INFO.bio}`
        });
        break;

      case 'resume':
        newHistory.push({ type: 'system', text: 'Launching interactive resume viewer modal...' });
        onOpenResume();
        break;

      case 'ai':
        newHistory.push({ type: 'system', text: 'Launching AI Nurse Matcher Cosine & Haversine Sandbox...' });
        onOpenAiDemo();
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not recognized: "${cmd}". Type "help" for valid options.`
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
      <div className="terminal-window bg-[#080c14] border-cyan-500/50 w-full max-w-3xl h-[550px] flex flex-col rounded-2xl shadow-[0_0_60px_rgba(0,242,254,0.25)]">
        
        {/* Terminal Header */}
        <div className="terminal-header shrink-0">
          <div className="terminal-dots">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
          </div>
          <div className="text-xs font-mono text-cyan-400 flex items-center gap-2">
            <Terminal size={14} />
            <span>cathrin@sys-hud:~ (bash)</span>
          </div>
          <button
            onClick={() => { soundFX.playClick(); onClose(); }}
            className="p-1 rounded text-slate-400 hover:text-white"
          >
            <X size={16} />
          </button>
        </div>

        {/* Console Body Stream */}
        <div className="flex-1 overflow-y-auto p-6 font-mono text-xs space-y-3">
          {history.map((item, idx) => (
            <div key={idx}>
              {item.type === 'input' && (
                <div className="text-cyan-400 font-bold">{item.text}</div>
              )}
              {item.type === 'system' && (
                <div className="text-emerald-400">{item.text}</div>
              )}
              {item.type === 'output' && (
                <pre className="text-slate-300 whitespace-pre-wrap font-mono leading-relaxed pl-2 border-l border-cyan-500/30">
                  {item.text}
                </pre>
              )}
              {item.type === 'error' && (
                <div className="text-rose-400">{item.text}</div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Prompt Form */}
        <form onSubmit={handleCommand} className="p-4 border-t border-slate-800/80 bg-slate-950 flex items-center gap-3">
          <span className="text-emerald-400 font-mono font-bold">$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type command ('help', 'skills', 'projects', 'resume', 'clear')..."
            className="flex-1 bg-transparent border-none outline-none font-mono text-xs text-cyan-300 placeholder-slate-600"
          />
          <button type="submit" className="text-slate-500 hover:text-cyan-400">
            <CornerDownLeft size={16} />
          </button>
        </form>

      </div>
    </div>
  );
}
