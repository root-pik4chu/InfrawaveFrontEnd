'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FollowText = ({ text = "I'm floating ✨", className = '', floatClass = '' }) => {
  const containerRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
    setShow(true);
  };

  const handleMouseLeave = () => {
    setShow(false);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full h-[400px] bg-neutral-300 rounded-xl overflow-hidden ${className}`}
    >
      <AnimatePresence>
        {show && (
          <motion.div
            className={`absolute pointer-events-none text-white text-xl font-semibold ${floatClass}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: position.x, y: position.y }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {text}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FollowText;
