'use client'
// import styles from './page.module.css' 
import { projects } from './data/data'; 
import Card from './Card'; 
import React, { useRef } from 'react'; 
import { useScroll } from 'framer-motion'; 

export default function Container() {
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });
  
  return (
    <main className="relative w-full">
      <div ref={container} className="min-h-[100vh]">
        {projects.map((project, i) => {
          // Adjust the scale calculation for smoother transition
          const targetScale = 1 - ((projects.length - i) * 0.01);
          // Adjust range for more gradual transitions
          const rangeStart = i * 0.1; // More gradual range start
          
          return (
            <Card 
              key={`p_${i}`} 
              {...project} 
              i={i} 
              targetScale={targetScale} 
              progress={scrollYProgress} 
              range={[rangeStart, Math.min(rangeStart + 0.5, 1)]}
            />
          );
        })}
      </div>
    </main>
  );
}