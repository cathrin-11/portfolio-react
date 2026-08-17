import React, { useState } from 'react';
import { X, Sparkles, Brain, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { soundFX } from '../utils/audio';

export default function AiNurseDemoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [patientNeeds, setPatientNeeds] = useState("Post-operative cardiac recovery, IV medication monitoring, ICU background");
  const [distanceKm, setDistanceKm] = useState(4.2);
  const [isCalculating, setIsCalculating] = useState(false);
  const [matchResult, setMatchResult] = useState(null);

  // Chat simulator state
  const [chatMessages, setChatMessages] = useState([
    { sender: 'System', text: 'AI Match confirmed. Pre-confirmation consultation channel opened with Nurse Sarah M.' },
    { sender: 'Nurse', text: 'Hello! I have reviewed your cardiac care requirements and medical history. I am available starting 8:00 AM tomorrow.' }
  ]);
  const [inputMsg, setInputMsg] = useState('');

  const sampleNurses = [
    {
      id: "N-101",
      name: "Sarah Miller, RN",
      skills: "Cardiac ICU Specialist, Advanced IV Therapy, 8 Yrs Experience",
      vectorScore: 0.94,
      coords: "11.0168° N, 76.9558° E",
      distanceKm: 4.2
    },
    {
      id: "N-102",
      name: "Priya Raman, B.Sc Nursing",
      skills: "Geriatric & Post-op Recovery, Tracheostomy Care, 5 Yrs Exp",
      vectorScore: 0.81,
      coords: "11.0280° N, 76.9620° E",
      distanceKm: 7.8
    },
    {
      id: "N-103",
      name: "David Chen, RN",
      skills: "Pediatric & General Medical Nursing, Wound Care",
      vectorScore: 0.63,
      coords: "11.0500° N, 76.9900° E",
      distanceKm: 14.1
    }
  ];

  const handleRunMatch = () => {
    soundFX.playBeep();
    setIsCalculating(true);
    setMatchResult(null);

    setTimeout(() => {
      const matched = sampleNurses[0];
      setMatchResult({
        primaryNurse: matched,
        vectorDimensions: 384,
        haversineRadiusLimit: 15,
        executionTimeMs: 18.4,
        status: "OPTIMAL MATCH"
      });
      setIsCalculating(false);
      soundFX.playBeep();
    }, 900);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;

    soundFX.playTerminalKey();
    const newMsgs = [...chatMessages, { sender: 'Patient', text: inputMsg }];
    setChatMessages(newMsgs);
    setInputMsg('');

    setTimeout(() => {
      setChatMessages(prev => [
        ...prev,
        { sender: 'Nurse', text: 'Thank you for providing that detail! I will make sure we have all necessary monitoring equipment ready.' }
      ]);
      soundFX.playBeep();
    }, 1200);
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
          maxWidth: '920px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: '#0B0B0B',
          border: '1px solid #2A2414',
          borderRadius: '16px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.95), 0 0 30px rgba(212, 175, 55, 0.15)'
        }}
      >
        {/* Modal Header */}
        <div style={{
          padding: '20px 24px',
          backgroundColor: '#111111',
          borderBottom: '1px solid #1C1C1C',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          zIndex: 10
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', fontFamily: 'JetBrains Mono, monospace', color: '#D4AF37', fontWeight: 700 }}>
              <Brain size={15} color="#D4AF37" />
              <span>AI CLINICAL-FIT COSINE MATCHER SANDBOX</span>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#F5F3EE', margin: 0, marginTop: '4px' }}>
              MiniLM Embeddings & Haversine GIS Allocation Engine
            </h3>
          </div>

          <button
            onClick={() => { soundFX.playClick(); onClose(); }}
            style={{
              padding: '8px',
              borderRadius: '8px',
              backgroundColor: '#0B0B0B',
              border: '1px solid #1C1C1C',
              color: '#A8A39A',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Content */}
        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Controls Input */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            
            {/* Needs input */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '11px', fontFamily: 'JetBrains Mono, monospace', color: '#A8A39A', textTransform: 'uppercase' }}>
                Patient Clinical Requirements (Text Prompt)
              </label>
              <input
                type="text"
                value={patientNeeds}
                onChange={(e) => setPatientNeeds(e.target.value)}
                style={{ width: '100%', padding: '12px 14px', borderRadius: '6px', backgroundColor: '#050505', border: '1px solid #1C1C1C', color: '#F5F3EE', fontSize: '12px', fontFamily: 'JetBrains Mono, monospace', outline: 'none' }}
              />
            </div>

            {/* Radius Slider */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontFamily: 'JetBrains Mono, monospace', color: '#A8A39A' }}>
                <span>Haversine Max Radius</span>
                <span style={{ color: '#D4AF37', fontWeight: 700 }}>{distanceKm} km</span>
              </div>
              <input
                type="range"
                min="1"
                max="25"
                step="0.5"
                value={distanceKm}
                onChange={(e) => setDistanceKm(parseFloat(e.target.value))}
                style={{ width: '100%', accentColor: '#D4AF37' }}
              />
            </div>

          </div>

          <button
            onClick={handleRunMatch}
            disabled={isCalculating}
            className="btn-gold-primary"
            style={{ width: '100%', height: '44px', fontSize: '12px' }}
          >
            {isCalculating ? (
              <span>Computing Cosine Vector Similarities...</span>
            ) : (
              <>
                <Sparkles size={16} />
                <span>RUN AI COSINE VECTOR & GIS MATCH</span>
              </>
            )}
          </button>

          {/* Results Display */}
          {matchResult && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingTop: '16px', borderTop: '1px solid #1C1C1C' }}>
              
              <div style={{ padding: '20px', borderRadius: '10px', backgroundColor: '#111111', border: '1px solid #2A2414', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                <div>
                  <div style={{ fontSize: '10px', fontFamily: 'JetBrains Mono, monospace', color: '#D4AF37', fontWeight: 700 }}>
                    {matchResult.status} • COSINE SIMILARITY: {matchResult.primaryNurse.vectorScore}
                  </div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#F5F3EE', margin: '4px 0' }}>
                    {matchResult.primaryNurse.name}
                  </h4>
                  <div style={{ fontSize: '12px', color: '#A8A39A' }}>
                    {matchResult.primaryNurse.skills}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontFamily: 'JetBrains Mono, monospace', color: '#F5D76E', backgroundColor: '#050505', padding: '6px 12px', borderRadius: '6px', border: '1px solid #2A2414' }}>
                  <CheckCircle size={14} color="#D4AF37" />
                  <span>{matchResult.primaryNurse.distanceKm} km away (GIS Verified)</span>
                </div>
              </div>

              {/* Chat Simulator */}
              <div style={{ borderRadius: '10px', backgroundColor: '#111111', border: '1px solid #1C1C1C', overflow: 'hidden' }}>
                <div style={{ padding: '12px 16px', backgroundColor: '#050505', borderBottom: '1px solid #1C1C1C', fontSize: '12px', fontFamily: 'JetBrains Mono, monospace', color: '#D4AF37', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <MessageSquare size={14} />
                  <span>PRE-CONFIRMATION CONSULTATION CHAT</span>
                </div>

                <div style={{ padding: '16px', maxHeight: '180px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '12px', fontFamily: 'JetBrains Mono, monospace' }}>
                  {chatMessages.map((msg, i) => (
                    <div key={i} style={{ color: msg.sender === 'System' ? '#D4AF37' : msg.sender === 'Nurse' ? '#F5F3EE' : '#A8A39A' }}>
                      <span style={{ fontWeight: 700, color: '#D4AF37' }}>[{msg.sender}]:</span> {msg.text}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSendMessage} style={{ display: 'flex', borderTop: '1px solid #1C1C1C', backgroundColor: '#050505' }}>
                  <input
                    type="text"
                    value={inputMsg}
                    onChange={(e) => setInputMsg(e.target.value)}
                    placeholder="Type message to matched nurse..."
                    style={{ flex: 1, padding: '12px 16px', backgroundColor: 'transparent', border: 'none', color: '#F5F3EE', fontSize: '12px', fontFamily: 'JetBrains Mono, monospace', outline: 'none' }}
                  />
                  <button type="submit" style={{ padding: '0 20px', color: '#D4AF37', border: 'none', background: 'none', cursor: 'pointer' }}>
                    <Send size={16} />
                  </button>
                </form>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
