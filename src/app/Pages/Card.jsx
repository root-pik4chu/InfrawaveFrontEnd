'use client'  
import { useTransform, useScroll, motion } from 'framer-motion'; 
import Image from 'next/image';    

const Card = ({ color, i, targetScale, progress, range }) => {      
  // Calculate staggered position based on index   
  const staggerOffset = i * 20; // Reduced offset for better stacking
   
  // Create scale transform based on scroll progress
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div className="h-[520px] flex items-center justify-end sticky top-[20vh] pr-[2vw]">              
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

export default Card;