import React from 'react';
import { SKILLS } from '../data/portfolioData';
import { Cpu, CheckCircle } from 'lucide-react';

export default function SkillsMatrix() {
  return (
    <section id="skills" style={{ padding: '60px 0', borderTop: '1px solid #27272a' }}>
      <div style={{ width: '100%', maxWidth: '1240px', margin: '0 auto', padding: '0 2rem' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
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
            <Cpu size={14} color="#a3e635" />
            <span>SKILLS</span>
          </div>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
            Technical <span className="text-gradient">Skills</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px'
        }}>
          {SKILLS.map((skill) => (
            <div 
              key={skill}
              style={{
                padding: '16px 20px',
                borderRadius: '8px',
                backgroundColor: '#141418',
                border: '1px solid #27272a',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <CheckCircle size={18} color="#a3e635" style={{ flexShrink: 0 }} />
              <span style={{
                color: '#ffffff',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '14px',
                fontWeight: 600
              }}>
                {skill}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
