'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollGradientText = ({ texts = [], className = 'text-center' }) => {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className={`flex flex-col ${className} font-[Heading] leading-none`}>
      {texts.map((text, i) => (
        <AnimatedGradientText key={i} text={text} index={i} />
      ))}
    </div>
  );
};

const AnimatedGradientText = ({ text, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'start 0.5'],
  });

  const backgroundSize = useTransform(scrollYProgress, [0, 1], ['0% 100%', '100% 100%']);

  return (
    <motion.h1
      ref={ref}
      style={{
        backgroundSize,
        backgroundImage: 'linear-gradient(to right, #0f0f0f, #0f0f0f)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'rgba(0,0,0, 0.5)',
        textAlign:"center"
      }}
      className="text-[4vw]  bg-no-repeat text-transparent transition-[background-size] duration-50 ease-[cubic-bezier(0.1,0.5,0.5,1)] leading-none text-center
      "
    >
      {text}
    </motion.h1>
  );
};

export default ScrollGradientText;
