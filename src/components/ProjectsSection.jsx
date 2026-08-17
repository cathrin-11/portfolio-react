import React from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Layers, CheckCircle2 } from 'lucide-react';

export default function ProjectsSection() {
  return (
    <section id="projects" style={{ padding: '60px 0', borderTop: '1px solid #27272a', backgroundColor: '#070a12' }}>
      <div style={{ width: '100%', maxWidth: '1240px', margin: '0 auto', padding: '0 2rem' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '36px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '6px',
            backgroundColor: '#18181b',
            border: '1px solid #27272a',
            color: '#a3e635',
            fontSize: '12px',
            fontFamily: 'JetBrains Mono, monospace',
            fontWeight: 700,
            letterSpacing: '1px',
            marginBottom: '8px'
          }}>
            <Layers size={14} color="#a3e635" />
            <span>PROJECTS</span>
          </div>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </div>

        {/* Projects List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              style={{
                padding: '28px',
                borderRadius: '12px',
                backgroundColor: '#141418',
                border: '1px solid #27272a',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', fontFamily: 'JetBrains Mono, monospace', margin: 0, marginBottom: '12px' }}>
                  {project.title}
                </h3>
                
                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.tech.map((t) => (
                    <span 
                      key={t}
                      style={{
                        padding: '4px 10px',
                        borderRadius: '4px',
                        backgroundColor: '#18181b',
                        border: '1px solid #27272a',
                        color: '#a3e635',
                        fontSize: '11px',
                        fontFamily: 'JetBrains Mono, monospace'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Exact Resume Bullets */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '16px', borderTop: '1px solid #27272a' }}>
                {project.bullets.map((bullet, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '13px', color: '#e4e4e7', lineHeight: 1.6 }}>
                    <CheckCircle2 size={16} color="#34d399" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
