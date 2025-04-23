// 'use client';
// import { useState, useEffect } from "react";

// const PreloaderAnimation = () => {
//   const [isVisible, setIsVisible] = useState(false);
  
//   // Number of divisions/images
//   const divisions = 8;
  
//   // Sample images - replace with your actual images
//   const images =
//   ["https://images.unsplash.com/photo-1558981420-bf351ce8e3ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",

//    "https://plus.unsplash.com/premium_photo-1667354155492-e75b59b5a7ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",

//    "https://images.unsplash.com/photo-1744190070346-f0d4ab0d2b86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",

//    "https://images.unsplash.com/photo-1744125235979-4286ddb612b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",

//    "https://images.unsplash.com/photo-1745175129773-ad9f779c978b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
//   ]
//   ;
  
//   useEffect(() => {
//     // Show container immediately
//     setIsVisible(true);
//   }, []);

//   return (
//     <div 
//       className={`fixed inset-0 bg-black overflow-hidden z-50 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
//     >
//       {/* Perspective container */}
//       <div 
//         className="relative w-full h-full"
//         style={{
//           perspective: '1200px',
//           perspectiveOrigin: 'center'
//         }}
//       >
//         {Array.from({ length: divisions }).map((_, index) => (
//           <div 
//             key={index}
//             className="absolute inset-0 w-full h-full flex items-center justify-center"
//             style={{
//               animation: `rise3d 1.8s ease-out forwards`,
//               animationDelay: `${index * 0.15}s`,
//               transform: 'translateY(100%) rotateX(40deg)',
//               transformOrigin: 'bottom',
//               zIndex: divisions - index,
//               opacity: 0.9 - (index * 0.1)
//             }}
//           >
//             <div 
//               className="w-4/5 h-3/4 overflow-hidden rounded-lg shadow-2xl"
//               style={{
//                 transformStyle: 'preserve-3d',
//                 backfaceVisibility: 'hidden'
//               }}
//             >
//               <img 
//                 src={images[index]} 
//                 alt={`Preloader image ${index}`} 
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Add animation keyframes */}
//       <style jsx>{`
//         @keyframes rise3d {
//           0% {
//             transform: translateY(100%) rotateX(40deg);
//           }
//           70% {
//             transform: translateY(-5%) rotateX(-5deg);
//           }
//           85% {
//             transform: translateY(2%) rotateX(2deg);
//           }
//           100% {
//             transform: translateY(0) rotateX(0deg);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default PreloaderAnimation;




















'use client';
import { useState, useEffect } from "react";

const PreloaderAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Number of divisions/images
  const divisions = 8;
  
  // Use placeholder images instead of external URLs
  const images =
  ["https://images.unsplash.com/photo-1558981420-bf351ce8e3ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",

   "https://plus.unsplash.com/premium_photo-1667354155492-e75b59b5a7ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",

   "https://images.unsplash.com/photo-1744190070346-f0d4ab0d2b86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",

   "https://images.unsplash.com/photo-1744125235979-4286ddb612b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",

   "https://images.unsplash.com/photo-1745175129773-ad9f779c978b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
  ]
  
  useEffect(() => {
    // Show container immediately
    setIsVisible(true);
  }, []);

  return (
    <div 
      className={`fixed inset-0 bg-black overflow-hidden z-50 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Perspective container */}
      <div 
        className="relative w-full h-full"
        style={{
          perspective: '1200px',
          perspectiveOrigin: 'center'
        }}
      >
        {/* Make sure we only map through available images */}
        {images.map((img, index) => (
          <div 
            key={index}
            className="absolute inset-0 w-full h-full flex items-center justify-center"
            style={{
              animation: `rise3d 1s ease-out forwards`,
              animationDelay: `${index * 0.3}s`,
              transform: 'translateY(100%) rotateX(50deg)',
              transformOrigin: 'bottom',
              zIndex:  index,
              opacity: 0.95 - (index * 0.05) // Made opacity higher to see more images
            }}
          >
            <div 
              className="w-full h-screen overflow-hidden rounded-lg shadow-2xl"
              style={{
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden'
              }}
            >
              <img 
                src={img}
                alt={`Preloader image ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Add animation keyframes */}
      <style jsx>{`
        @keyframes rise3d {
          0% {
            transform: translateY(100%) rotateX(40deg);
          }
         //  70% {
         //    transform: translateY(5%) rotateX(5deg);
         //  }
         //  85% {
         //    transform: translateY(2%) rotateX(2deg);
         //  }
          100% {
            transform: translateY(0) rotateX(0deg);
          }
        }
      `}</style>
    </div>
  );
};

export default PreloaderAnimation;