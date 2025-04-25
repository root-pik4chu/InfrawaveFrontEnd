import React from 'react'
import Image from 'next/image'

const NavBar = () => {
  return (
    <div className="fixed top-0 h-[10vh] w-full  bg-zinc-50 z-[5] px-[1vw]">
      <div className="w-full h-full grid grid-cols-5 items-center">
        <div className="flex justify-start">
          <Image src="/Group_57.svg" alt="Infrawave Logo" width={120} height={30} />
        </div>
        {
          ["Home", "Contact", "Work", "About"].map((item, index) => (
            <div key={index} className="flex justify-end">
              <p className="text-[0.8vw] font-medium capitalize hover:cursor-pointer">
                {item}
              </p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default NavBar
