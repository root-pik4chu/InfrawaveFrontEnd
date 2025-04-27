import React from 'react'

const Lines = () => {
  return (
    <div>
      <div className="w-full overflow-hidden">
      <div className=" top-0 left-0 w-full h-full z-[1] pointer-events-none px-[1vw] absolute ">
        <div className="flex w-full h-full justify-between ">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="w-px bg-black/20 h-full" />
            ))}
        </div>
      </div>
      </div>
    </div>
  )
}

export default Lines
