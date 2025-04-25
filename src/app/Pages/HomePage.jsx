import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrollGradientText from "../components/ScrollGradientText";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const firstBox = useRef(null);
  const secondBox = useRef(null);
  const videoBox = useRef(null);
  const box = useRef(null);

  useGSAP(() => {
    // Create a timeline for coordinated animations
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: box.current,
        start: "top 0%", // Start animation when section top reaches 20% from viewport top
        end: "+=300", // End animation after scrolling 300px
        scrub: 1, // Smoother scrubbing with slight delay
        // markers: true,       // Keep markers for debugging (remove in production)
        pin: true,
        anticipatePin: 1, // Keep pinning behavior
      },
    });

    // Add animations to timeline with label "a" to keep them synchronized
    t1.to(
      firstBox.current,
      {
        x: "-100%", // Move left panel completely off-screen
        duration: 1,
        // ease: "power2.inOut",
      },
      "a"
    );

    t1.to(
      secondBox.current,
      {
        x: "100%", // Move right panel completely off-screen
        duration: 1,
        // ease: "power2.inOut",
      },
      "a"
    );

    t1.to(
      videoBox.current,
      {
        width: "100vw", // Expand video box to full width
        duration: 1,
        ease: "power2.inOut",
      },
      "a"
    );
  }, []);

  return (
    <div>
      <div className="w-[100%] h-[250vh] bg-zinc-50 text-zinc-800">
        <div className="w-full h-full overflow-hidden">
          {/* Top section */}
          <div className="w-full h-[85vh] ">
            {/* <div className="w-full h-full flex items-srart justify-between p-[2vw] flex-col  pt-[10vw]">
            <div className="">
              <h1 className="text-[2.2vw]">
                We turn customer data into{" "}
                <span className="text-blue-500">margin</span>
              </h1>
              <p className="w-[40%] leading-none ">
                Unlock growth by transforming insights into measurable business
                value
              </p>
            </div>
            <div className="w-full h-[10vh] relative ">
              <button className="bg-zinc-200 w-fit px-[2vw] py-[1vw] ">
                Work with Us
              </button>
            </div>
            </div> */}
            <div className="w-full h-full flex items-srart justify-between p-[2vw] flex-col  pt-[22vw] ">
              <div className="w-full ">
                <h1 className="text-[5.2vw] w-[50%] leading-none">
                We turn customer data into{" "}
                <span className="text-blue-500">margin</span>
              </h1>
              </div>
              <div className="w-full flex items-center justify-between">
              <button className="bg-zinc-200 w-fit px-[2vw] py-[1vw]">
                Work with Us
              </button>
              <p className="w-[30%] leading-none mb-[2vw]">We turn data into profit, plain and simple. Our approach pinpoints the crucial identifiers of growth, deploys robust collection, processing, and storage infrastructure, and transforms your data into a tangible, profitable product.</p>

              </div>
            </div>
              {/* <h1>Precise Approach to your product</h1> */}
              {/* <p className="w-[40%] leading-none mb-[2vw]">We turn data into profit, plain and simple. Our approach pinpoints the crucial identifiers of growth, deploys robust collection, processing, and storage infrastructure, and transforms your data into a tangible, profitable product.</p> */}


            
            {/* <p className="w-[40%] leading-none ">We turn data into profit, plain and simple. Our approach pinpoints the crucial identifiers of growth, deploys robust collection, processing, and storage infrastructure, and transforms your data into a tangible, profitable product.</p> */}
            {/* <ScrollGradientText
        texts={['big ideas, smart strategies',' endless creativity to ', 'supercharge your brand!', 'right?']}
        className="items-start"
      /> */}
            {/* <p className="w-[50%] leading-none text-xl font-[smallHeading]" style={{color: 'rgba(182, 182, 182)',}}>Infrawave Solutions empowers businesses with cutting-edge digital services, offering web and mobile app development, AI/ML solutions, blockchain integration, and innovative technology for seamless digital transformation.</p> */}
          </div>

          {/* Animation section */}
          <div
            ref={box}
            className="relative w-full h-[100vh] flex items-center justify-center"
          >
            <div className="w-full h-full  sticky flex items-center justify-between">
              <div className="relative w-full h-full flex">
                <div ref={firstBox} className="w-1/3 h-full  absolute p-[1vw] ">
                  <div className="w-full h-full bg-red-500 rounded-4xl"></div>
                </div>
                <div className="video h-full w-full object-cover p-[1vw] ">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-4xl"
                  >
                    <source
                      src="https://framerusercontent.com/assets/7noJ6ZABGBxwSX8scPjAZOqcOhU.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div
                  ref={secondBox}
                  className="w-1/3 h-full  absolute right-0 p-[1vw] flex"
                >
                  {/* <div className="w-[2vw] h-full bg-yellow-400 z-20"></div> */}
                  <div className="w-full h-full rounded-4xl bg-red-500 "></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section for scrolling space */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
// <div className="absolute ">
//                <div className=" sticky w-full h-full p-[1vw]">
//                   <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1744062064909-67dbdfc7c314?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D" alt="" />
//                </div>
//                </div>
//                <div ref={firstBox} className="firstBox w-1/3 h-full  absolute p-[1vw]">
//                <div className="w-full h-full bg-pink-400 rounded-4xl">

//                </div>
//                </div>
//                <div ref={secondBox} className="secondBox w-1/3 h-full  absolute right-0 rounded-4xl p-[1vw]">
//                 <div className="w-full h-full bg-pink-400 rounded-4xl">

//                </div>
//                </div>

{
  /* <div class="framer-91rqja-container"><div class="framer-52htx framer-NHrER framer-1d0ad4v framer-v-1d0ad4v" data-framer-name="Image-Video-Image" data-highlight="true" style="height: 100%; width: 100%; opacity: 1; border-radius: 30px;" tabindex="0"><div class="framer-1rv8b6s" data-framer-name="Image 1" style="border-radius: 30px; transform: none; transform-origin: 50% 50% 0px;"><div style="position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0" data-framer-background-image-wrapper="true"><img decoding="async" sizes="calc(max(min(100vw, 1920px) - 80px, 1px) * 0.3277)" srcset="https://framerusercontent.com/images/IFY0RoqssWJA9ANeSyRcZCmZg.jpg?scale-down-to=1024 936w,https://framerusercontent.com/images/IFY0RoqssWJA9ANeSyRcZCmZg.jpg?scale-down-to=2048 1872w,https://framerusercontent.com/images/IFY0RoqssWJA9ANeSyRcZCmZg.jpg 3660w" src="https://framerusercontent.com/images/IFY0RoqssWJA9ANeSyRcZCmZg.jpg" alt="" style="display:block;width:100%;height:100%;border-radius:inherit;object-position:right center;object-fit:cover"></div><div class="framer-d1n2c4" data-framer-name="Text Wrapper" style="background-color: var(--token-7cfab920-9d1e-4f38-8c7a-a58d533b8508, rgb(255, 251, 251)); border-radius: 30px; transform: none; transform-origin: 50% 50% 0px;"><div class="framer-3php94" style="outline: none; display: flex; flex-direction: column; justify-content: flex-start; flex-shrink: 0; --extracted-1w3ko1f: var(--token-441e6b96-cded-437c-bbd4-5862cce7caef, rgb(255, 109, 65)); --framer-link-text-color: rgb(0, 153, 255); --framer-link-text-decoration: underline; transform: none; transform-origin: 50% 50% 0px;" data-framer-component-type="RichTextContainer"><p class="framer-text framer-styles-preset-1v525k0" data-styles-preset="fjyVc4jD3">People first, profits second—that’s our <span style="--framer-text-color:var(--extracted-1w3ko1f, var(--token-441e6b96-cded-437c-bbd4-5862cce7caef, rgb(255, 109, 65)))" class="framer-text">mantra</span>.</p></div></div></div><div class="framer-145eced" data-framer-cursor="gcm2ew" data-framer-name="Video Wrapper" style="background-color: var(--token-c09d492a-e729-4cbb-b155-5952e8c0f0ee, rgb(237, 233, 230)); border-radius: 30px; transform: none; transform-orstyle={{borderRadius: "20px -50px"}}igin: 50% 50% 0px;"><div class="framer-1296dcm-container" style="transform: none; transform-origin: 50% 50% 0px;"><video src="https://framerusercontent.com/assets/7noJ6ZABGBxwSX8scPjAZOqcOhU.mp4" loop="" preload="auto" muted="" playsinline="" style="cursor:auto;width:100%;height:100%;border-radius:0px;display:block;object-fit:cover;background-color:rgba(0, 0, 0, 0);object-position:50% 50%" autoplay=""></video></div></div><div class="framer-1s9xqos" data-framer-name="Image 2" style="border-radius: 30px; transform: none; transform-origin: 50% 50% 0px;"><div style="position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0" data-framer-background-image-wrapper="true"><img decoding="async" sizes="calc(max(min(100vw, 1920px) - 80px, 1px) * 0.3277)" srcset="https://framerusercontent.com/images/PDDdZBn0j0Udoh6FeuU6U8nJ8.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/PDDdZBn0j0Udoh6FeuU6U8nJ8.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/PDDdZBn0j0Udoh6FeuU6U8nJ8.jpg?scale-down-to=2048 2048w,https://framerusercontent.com/images/PDDdZBn0j0Udoh6FeuU6U8nJ8.jpg?scale-down-to=4096 4096w,https://framerusercontent.com/images/PDDdZBn0j0Udoh6FeuU6U8nJ8.jpg 4594w" src="https://framerusercontent.com/images/PDDdZBn0j0Udoh6FeuU6U8nJ8.jpg" alt="" style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:cover"></div></div></div></div> */
}

// <div className="w-full h-full flex relative">
//               {/* Left box */}
//               <div
//                 ref={firstBox}
//                 className="relative bg-red-400 w-1/3 h-full flex items-center justify-center"
//               >
//                 <div className="text-white text-xl font-bold">Left Panel</div>
//               </div>

//               {/* Center box with video */}
//               <div
//                 ref={videoBox}
//                 className="bg-pink-400 w-1/3 h-full overflow-hidden"
//               >
//                 <video
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                   className="w-full h-full object-cover "
//                 >
//                   <source src="https://framerusercontent.com/assets/7noJ6ZABGBxwSX8scPjAZOqcOhU.mp4" type="video/mp4" />
//                 </video>
//               </div>

//               {/* Right box */}
//               <div
//                 ref={secondBox}
//                 className="relative bg-red-400 w-1/3 h-full flex items-center justify-center"
//               >
//                 <div className="text-white text-xl font-bold">Right Panel</div>
//               </div>
//             </div>
