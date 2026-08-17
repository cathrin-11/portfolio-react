import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { AnimatePresence } from 'framer-motion';

import CustomCursor from './components/CustomCursor';
import ScanlineOverlay from './components/ScanlineOverlay';
import InteractiveBackground from './components/InteractiveBackground';
import PageTransition from './components/PageTransition';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import SkillsMatrix from './components/SkillsMatrix';
import ExperienceEducation from './components/ExperienceEducation';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import TerminalModal from './components/TerminalModal';
import AiNurseDemoModal from './components/AiNurseDemoModal';
import ProjectDetailsModal from './components/ProjectDetailsModal';

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [aiDemoOpen, setAiDemoOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  /* ── Lenis Smooth Scroll ── */
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  /* ── Ctrl+K → CLI HUD ── */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/CATHRIN_RESUME.pdf';
    link.download = 'CATHRIN_RESUME.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Custom gold cursor (desktop only) */}
      <CustomCursor />

      {/* GPU-Accelerated Interactive Canvas Background */}
      <InteractiveBackground />

      {/* Scanlines overlay */}
      <ScanlineOverlay />

      {/* Page entrance transition */}
      <PageTransition />

      {/* Navbar */}
      <Navbar
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Main content */}
      <main className="relative z-10">
        <Hero
          onOpenTerminal={() => setTerminalOpen(true)}
        />

        <ProjectsSection
          onOpenAiDemo={() => setAiDemoOpen(true)}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <AboutSection />
        <SkillsMatrix />
        <ExperienceEducation />
        <ContactSection />
      </main>

      <Footer />

      {/* ── Modals ── */}
      <AnimatePresence>
        {terminalOpen && (
          <TerminalModal
            isOpen={terminalOpen}
            onClose={() => setTerminalOpen(false)}
            onOpenResume={() => { setTerminalOpen(false); handleDownloadResume(); }}
            onOpenAiDemo={() => { setTerminalOpen(false); setAiDemoOpen(true); }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {aiDemoOpen && (
          <AiNurseDemoModal isOpen={aiDemoOpen} onClose={() => setAiDemoOpen(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailsModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
