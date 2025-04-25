import React from 'react'
import logo from "../../../public/Group_57.svg"
import Image from 'next/image'

const NavBar = () => {
  return (
    <div>
      <div className="fixed top-0  h-[10vh] w-full  px-[2vw] bg-zinc-50 z-10">
         <div className="w-full h-full flex items-center justify-between">
            <div className=" ">
               <Image src="/Group_57.svg" alt="Infrawave Logo" width={150} height={40} />
               {
                  console.log(logo)
               }
            </div>
           {
             ["Home","contact","Work","About"].map((item,index)=>{
               return  <p className='text-[0.8vw] font-medium capitalize'>{item}</p>
            
             })
           }
            

         </div>
         {/* <div className=""></div> */}
      </div>
    </div>
  )
}

export default NavBar
