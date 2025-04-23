'use client'   
import { useTransform, useScroll, motion } from 'framer-motion';  
import Image from 'next/image';
import { useState, useEffect } from 'react';

const NewCard = ({ color, i, targetScale, progress, range, title }) => {      
  // Calculate staggered position based on index      
  const staggerOffset = i * 20; // Reduced offset for better stacking
       
  // Create scale transform based on scroll progress   
  const scale = useTransform(progress, range, [1, targetScale]);
  
  // Create opacity transform for the content
  const opacity = useTransform(progress, 
    [range[0] - 0.1, range[0], range[1] - 0.1, range[1]], 
    [0, 1, 1, 0]
  );
  
  return (
    <div className="h-[520px] flex items-center justify-end sticky top-[20vh] px-[5vw]">
      {/* Left side - Text area */}
      
      
      {/* Right side - Card */}
      <motion.div                            
        className="flex flex-col relative h-[500px] w-[50%] rounded-2xl origin-top shadow-lg"
        style={{
          backgroundColor: color,
          translateY: staggerOffset, // Use translateY directly in style
          scale: scale,
          zIndex: 100 - i, // Higher cards appear on top
        }}
      >                             
      </motion.div>               
    </div>
  );  
}      

export default NewCard;