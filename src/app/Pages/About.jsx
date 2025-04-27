import React from 'react';

const About = () => {
  return (
    <div>
      <div className="w-full h-[110vh] relative text-black ">
        <div className="w-full h-full relative ">
          <h2 className=" w-[80%] h-[40vh] leading-none pt-[5vw]">
            building brands, boosting businesses, and redefining possibilities. let’s
            grow your brand together.
          </h2>
        <div className="w-full h-[40vh] ">
          <div className="w-full h-full grid grid-cols-5 ">
            <div className="col-start-3 w-full ">
              <p className='mb-[2vw]'>project Delivered</p>
              <h3 className="text-5xl" >100+</h3>
              <p>creative work that drives real results</p>
            </div>
            
            <div className="col-start-4 w-full ">
              <p className='mb-[2vw]'>project Delivered</p>
              <h3 className="text-5xl" >100+</h3>
              <p>creative work that drives real results</p>
            </div>

            <div className="col-start-5 w-full ">
              <p className='mb-[2vw]'>project Delivered</p>
              <h3 className="text-5xl" >100+</h3>
              <p>creative work that drives real results</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
