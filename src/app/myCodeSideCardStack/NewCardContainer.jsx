'use client'
import { projects } from '../Pages/data/data'; 
import NewCard from './NewCard'; 
import React, { useRef, useState, useEffect } from 'react'; 
import { useScroll, motion } from 'framer-motion'; 

export default function Container() {
  const container = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });
  
  // Update active index based on scroll position
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(value => {
      // Calculate which card is active based on scroll progress
      const newIndex = Math.min(
        Math.floor(value * projects.length),
        projects.length - 1
      );
      setActiveIndex(newIndex);
    });
    
    return () => unsubscribe();
  }, [scrollYProgress, projects.length]);
  
  const headings = [
    "Project One",
    "Project Two",
    "Project Three",
    "Project Four",
    "Project Five",
    "Project Six"
  ];
  
  return (
    <main className="relative w-full">
      {/* Side navigation */}
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-[200]">
        <ul className="flex flex-col gap-8">
          {headings.map((heading, idx) => (
            <li key={idx} className="relative">
              <div className="flex items-center">
                {/* Active pointer */}
                {activeIndex === idx && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute -left-4 w-2 h-2 bg-black rounded-full"
                  />
                )}
                <span className={`cursor-pointer transition-colors ${
                  activeIndex === idx ? 'font-bold' : 'text-gray-500'
                }`}>
                  {heading}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Cards container */}
      <div ref={container} className="min-h-[100vh] w-full ">
        {projects.map((project, i) => {
          // Adjust the scale calculation for smoother transition
          const targetScale = 1 - ((projects.length - i) * 0.05);
          // Adjust range for more gradual transitions
          const rangeStart = i * 0.15;
          
          return (
            <NewCard 
              key={`p_${i}`} 
              {...project} 
              title={headings[i] || `Project ${i+1}`}
              i={i} 
              targetScale={targetScale} 
              progress={scrollYProgress} 
              range={[rangeStart, Math.min(rangeStart + 0.3, 1)]}
            />
          );
        })}
      </div>
    </main>
  );
}