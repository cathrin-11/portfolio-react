import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageTransition = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] bg-[#050505] flex flex-col items-center justify-center"
        >
          <div className="flex flex-col items-center">
            <h1 className="font-display text-3xl font-bold text-gold-gradient tracking-wider mb-4">
              CATHRIN R
            </h1>
            <div className="flex gap-[3px] h-4 items-end">
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  initial={{ height: "4px" }}
                  animate={{ height: ["4px", "16px", "4px"] }}
                  transition={{ 
                    duration: 0.8, 
                    repeat: Infinity, 
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                  className="w-[2px] rounded bg-[#D4AF37]"
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;
