import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar({ onOpenTerminal, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Objective', href: '#objective' },
    { name: 'Internships', href: '#internships' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education & Certs', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: '70px',
        backgroundColor: scrolled ? 'rgba(9, 9, 11, 0.95)' : 'rgba(9, 9, 11, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid #27272a',
        display: 'flex',
        alignItems: 'center',
        transition: 'all 0.3s ease'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          
          {/* Brand Logo & Title */}
          <a 
            href="#top" 
            style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}
          >
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              backgroundColor: '#a3e635',
              color: '#09090b',
              fontFamily: 'JetBrains Mono, monospace',
              fontWeight: 800,
              fontSize: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(163, 230, 53, 0.4)',
              flexShrink: 0
            }}>
              CR
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontWeight: 800,
                color: '#ffffff',
                fontSize: '14px',
                letterSpacing: '1px',
                lineHeight: 1,
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                {PERSONAL_INFO.name}
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#a3e635', display: 'inline-block' }}></span>
              </div>
              <div style={{
                fontSize: '10px',
                fontFamily: 'JetBrains Mono, monospace',
                color: '#a1a1aa',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                marginTop: '4px',
                lineHeight: 1
              }}>
                {PERSONAL_INFO.title}
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav-links" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  color: '#d4d4d8',
                  fontSize: '12px',
                  fontFamily: 'JetBrains Mono, monospace',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#a3e635'}
                onMouseLeave={(e) => e.target.style.color = '#d4d4d8'}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            
            {/* CLI HUD Toggle Button */}
            <button
              onClick={onOpenTerminal}
              style={{
                height: '40px',
                padding: '0 12px',
                borderRadius: '8px',
                backgroundColor: '#18181b',
                border: '1px solid rgba(163, 230, 53, 0.4)',
                color: '#a3e635',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer'
              }}
            >
              <Terminal size={14} />
              <span className="hidden sm:inline">HUD</span>
            </button>

            {/* Direct PDF Resume Button */}
            <a
              href="/CATHRIN_RESUME.pdf"
              download="CATHRIN_RESUME.pdf"
              style={{
                height: '40px',
                padding: '0 14px',
                borderRadius: '8px',
                backgroundColor: '#a3e635',
                color: '#09090b',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '12px',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                textDecoration: 'none',
                boxShadow: '0 0 15px rgba(163, 230, 53, 0.3)'
              }}
            >
              <FileText size={14} />
              <span>Resume</span>
            </a>

            {/* Mobile Drawer Trigger */}
            <button
              className="mobile-menu-trigger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                height: '40px',
                width: '40px',
                borderRadius: '8px',
                backgroundColor: '#18181b',
                border: '1px solid #27272a',
                color: '#ffffff',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      {mobileMenuOpen && (
        <div 
          className="mobile-drawer-overlay"
          style={{
            position: 'fixed',
            top: '70px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(9, 9, 11, 0.98)',
            zIndex: 999,
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            borderBottom: '1px solid #27272a'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: '#ffffff',
                fontSize: '1.1rem',
                fontFamily: 'JetBrains Mono, monospace',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                padding: '12px 0',
                borderBottom: '1px solid #18181b',
                textDecoration: 'none'
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/CATHRIN_RESUME.pdf"
            download="CATHRIN_RESUME.pdf"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              height: '48px',
              borderRadius: '10px',
              backgroundColor: '#a3e635',
              color: '#09090b',
              fontFamily: 'JetBrains Mono, monospace',
              fontWeight: 700,
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '1rem',
              textDecoration: 'none'
            }}
          >
            <FileText size={18} />
            <span>Download CATHRIN_RESUME.pdf</span>
          </a>
        </div>
      )}
    </>
  );
}
