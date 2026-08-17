import React from 'react';
import { INTERNSHIPS, EDUCATION_AND_CERTIFICATIONS } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function ExperienceEducation() {
  return (
    <section id="internships" style={{ padding: '60px 0', borderTop: '1px solid #27272a' }}>
      <div style={{ width: '100%', maxWidth: '1240px', margin: '0 auto', padding: '0 2rem' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '3rem' }}>
          
          {/* Left Column: INTERNSHIPS */}
          <div style={{ gridColumn: 'span 6 / span 6', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
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
                <Briefcase size={14} color="#a3e635" />
                <span>INTERNSHIPS</span>
              </div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                Work <span className="text-gradient">Experience</span>
              </h2>
            </div>

            {INTERNSHIPS.map((item, idx) => (
              <div key={idx} style={{ padding: '24px', borderRadius: '12px', backgroundColor: '#141418', border: '1px solid #27272a', borderLeft: '4px solid #a3e635', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>{item.role}</h3>
                  <div style={{ color: '#a3e635', fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', marginTop: '4px', fontWeight: 600 }}>{item.company}</div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '12px', fontFamily: 'JetBrains Mono, monospace', color: '#a1a1aa' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Calendar size={13} color="#a3e635" />
                    <span>{item.period}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <MapPin size={13} color="#a3e635" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: EDUCATION AND CERTIFICATIONS */}
          <div id="education" style={{ gridColumn: 'span 6 / span 6', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
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
                <GraduationCap size={14} color="#a3e635" />
                <span>EDUCATION AND CERTIFICATIONS</span>
              </div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                Degrees & <span className="text-gradient">Credentials</span>
              </h2>
            </div>

            <div style={{ padding: '24px', borderRadius: '12px', backgroundColor: '#141418', border: '1px solid #27272a', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {EDUCATION_AND_CERTIFICATIONS.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '13px', color: '#e4e4e7', lineHeight: 1.6 }}>
                  <CheckCircle2 size={16} color="#a3e635" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
