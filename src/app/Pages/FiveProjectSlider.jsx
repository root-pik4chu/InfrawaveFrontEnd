import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FiveProjectSlider = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const projectsRef = useRef([]);

  // Add projects to refs array
  const addProjectRef = (el) => {
    if (el && !projectsRef.current.includes(el)) {
      projectsRef.current.push(el);
    }
  };

  useGSAP(() => {
    const projects = projectsRef.current;
    
    // Create a timeline for the main horizontal scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=100%", // Longer scroll for smoother animation
        pin: true,
        scrub: 1,
        // markers: true
      }
    });

    // Main slider animation - unchanged from your original
    tl.to(sliderRef.current, {
      x: () => -(sliderRef.current.scrollWidth - window.innerWidth),
      // ease: "circ",
      duration:2,
    });

  }, []);

  return (
    <div>
      <div className="w-full h-[250vh] bg-zinc-950">
        <div className="w-full h-[20vh]"></div>
        
        {/* Container that gets pinned */}
        <div ref={containerRef} className="w-full h-[80vh] bg-zinc-950 overflow-hidden">
          
          {/* Row of projects that moves horizontally */}
          <div
            ref={sliderRef}
            className="flex gap-8 h-full p-8"
          >
            <div ref={addProjectRef} className="project w-[70vh] h-[70vh] bg-zinc-900 flex-shrink-0 flex items-center justify-center rounded-lg shadow-lg transform">
              <span className="text-white text-4xl font-bold">Project 1</span>
            </div>
            <div ref={addProjectRef} className="project w-[70vh] h-[70vh] bg-zinc-900 flex-shrink-0 flex items-center justify-center rounded-lg shadow-lg transform">
              <span className="text-white text-4xl font-bold">Project 2</span>
            </div>
            <div ref={addProjectRef} className="project w-[70vh] h-[70vh] bg-zinc-900 flex-shrink-0 flex items-center justify-center rounded-lg shadow-lg transform">
              <span className="text-white text-4xl font-bold">Project 3</span>
            </div>
            <div ref={addProjectRef} className="project w-[70vh] h-[70vh] bg-zinc-900 flex-shrink-0 flex items-center justify-center rounded-lg shadow-lg transform">
              <span className="text-white text-4xl font-bold">Project 4</span>
            </div>
            <div ref={addProjectRef} className="project w-[70vh] h-[70vh] bg-zinc-900 flex-shrink-0 flex items-center justify-center rounded-lg shadow-lg transform">
              <span className="text-white text-4xl font-bold">Project 5</span>
            </div>
            <div ref={addProjectRef} className="project w-[70vh] h-[70vh] bg-zinc-900 flex-shrink-0 flex items-center justify-center rounded-lg shadow-lg transform">
              <span className="text-white text-4xl font-bold">Project 6</span>
            </div>
          </div>
          
         
        </div>
      </div>
    </div>
  );
};

export default FiveProjectSlider;