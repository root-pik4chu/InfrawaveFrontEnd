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
  
    // STEP 1: Set all cards to the center, randomly rotated and slightly scattered
    gsap.set(projects, {
      xPercent: -50,
      yPercent: -50,
      x: window.innerWidth / 4 ,
      y: window.innerHeight / 4,
      rotation: () => gsap.utils.random(-40, 40),
      scale: 0.8, // a bit smaller initially
      opacity: 1,
    });
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 20%",
        end: "+=300%",
        pin: true,
        scrub: 1,
        markers: true,
      },
    });
  
    // STEP 2: Animate cards into their correct spots
    tl.to(projects, {
      xPercent: 0,
      yPercent: 0,
      x: 0,
      y: 0,
      rotation: 0,
      scale: 1,
      stagger: 0.1, // they move one by one a bit
      ease: "power2.out",
      duration: 1.5,
    });
  
    // STEP 3: Move the whole slider horizontally
    tl.to(sliderRef.current, {
      x: () => -(sliderRef.current.scrollWidth - window.innerWidth),
      ease: "none",
      duration: 2,
    });
  }, []);
  

  return (
    <div>
      <div
        className="w-full h-[400vh] rounded-t-[2vw] "
        style={{
          backgroundImage:
            "url('https://www.lumina-design.co/static/media/i_project_bg.9a00241e79d94cfd91eb.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full h-[20vh]"></div>

        {/* Container that gets pinned */}
        <div
          ref={containerRef}
          className="w-full h-[80vh] overflow-hidden z-[9999]"
        >
          {/* Row of projects that moves horizontally */}
          <div ref={sliderRef} className="flex gap-8 h-full p-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
              return (
                <div
                  ref={addProjectRef}
                  className="project w-[27vw] h-[60vh] border-zinc-900/10 flex-shrink-0 flex items-center justify-center flex-col rounded-3xl shadow-lg border-1  transform z-[100] p-[1vw] bg-blue-300"
                >
                  <div className="w-full h-[60%] ">
                    <img
                      className="object-cover w-full h-full overflow-hidden  rounded-2xl"
                      src="https://images.unsplash.com/photo-1695634621145-9133286e0247?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2plY3QlMjBtb2NrdXBzfGVufDB8fDB8fHww"
                      alt=""
                    />
                  </div>
                  <div className="w-full h-[40%] ">
                    <h4>root</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiveProjectSlider;
