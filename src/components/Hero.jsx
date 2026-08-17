import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Download, MapPin, Mail, Phone, Activity, Github, Linkedin, FileText, Briefcase, GraduationCap, Layers, Award, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const canvasRef = useRef(null);
  const [typedTitle, setTypedTitle] = useState('');
  const titles = [
    "Full Stack Developer",
    "React & Node.js Specialist",
    "Spring Boot & FastAPI Engineer",
    "AI Healthcare Matcher Developer"
  ];
  const [titleIdx, setTitleIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing loop effect
  useEffect(() => {
    const currentFullText = titles[titleIdx];
    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && typedTitle === currentFullText) {
      setTimeout(() => setIsDeleting(true), 2200);
      return;
    }

    if (isDeleting && typedTitle === '') {
      setIsDeleting(false);
      setTitleIdx((prev) => (prev + 1) % titles.length);
      return;
    }

    const timer = setTimeout(() => {
      setTypedTitle(prev => 
        isDeleting 
          ? currentFullText.substring(0, prev.length - 1)
          : currentFullText.substring(0, prev.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [typedTitle, isDeleting, titleIdx]);

  // Animated Background Particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
      }
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * (canvas.width || 800),
      y: Math.random() * (canvas.height || 600),
      radius: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      color: Math.random() > 0.5 ? '#a3e635' : '#6366f1'
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="objective" style={{
      position: 'relative',
      paddingTop: '110px',
      paddingBottom: '70px',
      minHeight: '88vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }}>
      {/* Background Canvas Particles */}
      <canvas 
        ref={canvasRef} 
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          pointerEvents: 'none',
          opacity: 0.35,
          zIndex: 0
        }}
      />

      <div style={{
        width: '100%',
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '0 1.5rem',
        position: 'relative',
        zIndex: 10
      }}>
        <div 
          className="responsive-hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '2.5rem',
            alignItems: 'center'
          }}
        >
          
          {/* Left Column: Hero Overview */}
          <div className="responsive-hero-left" style={{ gridColumn: 'span 7 / span 7', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            {/* Status Ticker Badge */}
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
                fontWeight: 600,
                boxShadow: '0 0 15px rgba(163, 230, 53, 0.15)'
              }}>
                <Activity size={14} color="#a3e635" />
                <span>SYS_STATUS: READY FOR FULL-STACK & AI ROLES</span>
              </div>
            </div>

            {/* Headline & Name */}
            <div>
              <h1 style={{
                fontSize: '3rem',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.15,
                margin: 0,
                letterSpacing: '-0.02em'
              }}>
                Hi, I'm <span className="text-gradient">{PERSONAL_INFO.name}</span>
              </h1>
              
              <div style={{
                fontSize: '1.35rem',
                fontWeight: 700,
                color: '#e4e4e7',
                marginTop: '4px'
              }}>
                {PERSONAL_INFO.title}
              </div>

              {/* Typing Title Loop */}
              <div style={{
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                color: '#a3e635',
                fontSize: '1.15rem',
                fontFamily: 'JetBrains Mono, monospace',
                fontWeight: 600,
                marginTop: '6px'
              }}>
                <span style={{ color: '#818cf8', marginRight: '8px' }}>&gt;</span>
                <span>{typedTitle}</span>
                <span className="cursor-blink"></span>
              </div>
            </div>

            {/* Career Objective Card */}
            <div style={{
              padding: '20px 24px',
              borderRadius: '12px',
              backgroundColor: '#141418',
              border: '1px solid #27272a',
              borderLeft: '4px solid #a3e635',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}>
              <h2 style={{
                fontSize: '11px',
                fontFamily: 'JetBrains Mono, monospace',
                color: '#a3e635',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '8px',
                fontWeight: 700
              }}>
                CAREER OBJECTIVE
              </h2>
              <p style={{
                color: '#d4d4d8',
                fontSize: '0.95rem',
                lineHeight: 1.65,
                margin: 0
              }}>
                {PERSONAL_INFO.objective}
              </p>
            </div>

            {/* Aligned Contact Chips */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 0',
              borderTop: '1px solid #27272a',
              borderBottom: '1px solid #27272a',
              fontSize: '12px',
              fontFamily: 'JetBrains Mono, monospace'
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 12px',
                borderRadius: '6px',
                backgroundColor: '#18181b',
                border: '1px solid #27272a',
                color: '#a3e635'
              }}>
                <MapPin size={14} color="#a3e635" />
                <span>{PERSONAL_INFO.location}</span>
              </div>

              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  backgroundColor: '#18181b',
                  border: '1px solid #27272a',
                  color: '#d4d4d8',
                  textDecoration: 'none'
                }}
              >
                <Mail size={14} color="#a3e635" />
                <span>{PERSONAL_INFO.email}</span>
              </a>

              <a 
                href={`tel:${PERSONAL_INFO.phone}`} 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  backgroundColor: '#18181b',
                  border: '1px solid #27272a',
                  color: '#d4d4d8',
                  textDecoration: 'none'
                }}
              >
                <Phone size={14} color="#a3e635" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>

              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noreferrer" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  backgroundColor: '#18181b',
                  border: '1px solid #27272a',
                  color: '#d4d4d8',
                  textDecoration: 'none'
                }}
              >
                <Github size={14} color="#a3e635" />
                <span>Github</span>
              </a>

              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  backgroundColor: '#18181b',
                  border: '1px solid #27272a',
                  color: '#d4d4d8',
                  textDecoration: 'none'
                }}
              >
                <Linkedin size={14} color="#a3e635" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Action Buttons Row */}
            <div className="hero-buttons-row" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', paddingTop: '4px' }}>
              <a 
                href="/CATHRIN_RESUME.pdf" 
                download="CATHRIN_RESUME.pdf"
                style={{
                  height: '48px',
                  padding: '0 24px',
                  borderRadius: '10px',
                  backgroundColor: '#a3e635',
                  color: '#09090b',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontWeight: 700,
                  fontSize: '12px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(163, 230, 53, 0.35)',
                  cursor: 'pointer'
                }}
              >
                <Download size={16} />
                <span>Download Resume PDF</span>
              </a>

              <button
                onClick={onOpenResume}
                style={{
                  height: '48px',
                  padding: '0 22px',
                  borderRadius: '10px',
                  backgroundColor: '#18181b',
                  border: '1px solid #27272a',
                  color: '#fafafa',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontWeight: 600,
                  fontSize: '12px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  cursor: 'pointer'
                }}
              >
                <FileText size={16} color="#a3e635" />
                <span>View Online Resume</span>
              </button>

              <a 
                href="#projects" 
                style={{
                  height: '48px',
                  padding: '0 20px',
                  borderRadius: '10px',
                  backgroundColor: '#18181b',
                  border: '1px solid #27272a',
                  color: '#d4d4d8',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '12px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  textDecoration: 'none'
                }}
              >
                <span>Explore Projects</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Right Column: NEW STYLE - ESSENTIAL IMPORTANT DETAILS CARD ALONE */}
          <div className="responsive-hero-right" style={{ gridColumn: 'span 5 / span 5' }}>
            <div 
              style={{
                padding: '28px',
                borderRadius: '16px',
                backgroundColor: '#141418',
                border: '1px solid #27272a',
                boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}
            >
              
              {/* Card Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #27272a', paddingBottom: '14px' }}>
                <div style={{ fontSize: '12px', fontWeight: 800, color: '#ffffff', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '1px' }}>
                  KEY HIGHLIGHTS
                </div>
                <div style={{ fontSize: '10px', fontFamily: 'JetBrains Mono, monospace', color: '#a3e635', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Sparkles size={12} />
                  <span>VERIFIED PROFILE</span>
                </div>
              </div>

              {/* Detail 1: Internship */}
              <div style={{ padding: '14px 16px', borderRadius: '10px', backgroundColor: '#18181b', border: '1px solid #27272a', borderLeft: '3px solid #a3e635', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <Briefcase size={18} color="#a3e635" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '10px', fontFamily: 'JetBrains Mono, monospace', color: '#a1a1aa', textTransform: 'uppercase' }}>Internship</div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff', marginTop: '2px' }}>Junior Web Developer</div>
                  <div style={{ fontSize: '11px', color: '#a3e635', fontFamily: 'JetBrains Mono, monospace' }}>Nanlogical Consultancy Services, Chennai</div>
                </div>
              </div>

              {/* Detail 2: Education & CGPA */}
              <div style={{ padding: '14px 16px', borderRadius: '10px', backgroundColor: '#18181b', border: '1px solid #27272a', borderLeft: '3px solid #fbbf24', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <GraduationCap size={18} color="#fbbf24" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '10px', fontFamily: 'JetBrains Mono, monospace', color: '#a1a1aa', textTransform: 'uppercase' }}>Education</div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff', marginTop: '2px' }}>B.E Computer Science & Engineering</div>
                  <div style={{ fontSize: '11px', color: '#fbbf24', fontFamily: 'JetBrains Mono, monospace', fontWeight: 700 }}>8.6 / 10 CGPA • Sri Krishna College of Tech</div>
                </div>
              </div>

              {/* Detail 3: Engineered Projects */}
              <div style={{ padding: '14px 16px', borderRadius: '10px', backgroundColor: '#18181b', border: '1px solid #27272a', borderLeft: '3px solid #6366f1', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <Layers size={18} color="#818cf8" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '10px', fontFamily: 'JetBrains Mono, monospace', color: '#a1a1aa', textTransform: 'uppercase' }}>Key Projects</div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff', marginTop: '2px' }}>4 Engineered Systems</div>
                  <div style={{ fontSize: '11px', color: '#a5b4fc', fontFamily: 'JetBrains Mono, monospace' }}>React, Node, Spring Boot, FastAPI, NLP</div>
                </div>
              </div>

              {/* Detail 4: Certifications */}
              <div style={{ padding: '14px 16px', borderRadius: '10px', backgroundColor: '#18181b', border: '1px solid #27272a', borderLeft: '3px solid #10b981', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <Award size={18} color="#34d399" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '10px', fontFamily: 'JetBrains Mono, monospace', color: '#a1a1aa', textTransform: 'uppercase' }}>Certifications</div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff', marginTop: '2px' }}>6 Verified Certifications</div>
                  <div style={{ fontSize: '11px', color: '#34d399', fontFamily: 'JetBrains Mono, monospace' }}>Cisco, NPTEL Elite+Silver, TATA, Infosys</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
