import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Check if it's a fine pointer (desktop)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsDesktop(mediaQuery.matches);

    const handleMediaChange = (e) => {
      setIsDesktop(e.matches);
    };
    mediaQuery.addEventListener('change', handleMediaChange);

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    if (mediaQuery.matches) {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mouseenter', onMouseEnter);
    }

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isDesktop) return null;

  return (
    <>
      {/* Outer ring */}
      <div
        className="fixed top-0 left-0 w-6 h-6 rounded-full border border-[#D4AF37]/50 pointer-events-none z-[999999] transition-opacity duration-300"
        style={{
          transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
          opacity: isVisible ? 1 : 0,
          transition: 'transform 0.1s ease-out, opacity 0.3s ease-out',
        }}
      />
      {/* Inner dot */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#FFE29A] shadow-[0_0_6px_rgba(246,211,101,0.8)] pointer-events-none z-[999999] transition-opacity duration-300"
        style={{
          transform: `translate(${position.x - 3}px, ${position.y - 3}px)`,
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
};

export default CustomCursor;
