import React from 'react';
import './Content.css';
import air1 from './shoes/air1.png';

const Content = () => {
  return (
    <div className='flex gap-5 w-screen overflow-hidden border-white border-2 content-container text-white'>

      <div className='flex flex-col justify-center gap-4 px-20 w-1/2'>

        <span className='text-4xl font-black '>Air Jordan 1 'Black Toe Reimagined'</span>

        <span className='text-2xl font-normal'>
          Scheduled for release on February 1, 2025, this iteration reimagines the classic 'Black Toe' design. It
          combines the iconic black, red, and white color scheme with modern materials and construction, offering a
          fresh take on a beloved classic.
        </span>

        <span className='text-6xl font-semibold px-6'>
          ₹15,000
        </span>
      </div>


      {/* <div className='w-2/3 py-30 border-2 border-amber-50 relative'>
 
 
        <div className="absolute text-white text-9xl font-extrabold opacity-40 rotate-340 flex flex-col justify-center px-50">
        <span>Just Do It</span>
        <span>Just Do It</span>
        <span>Just Do It</span>
        </div>

        <img
          src={air1}
          alt="air1"
          className="scale-110 rotate-[340deg] relative z-10 px-20"
        />
      </div>
 */}
      <div className='w-2/3 border-2 border-amber-50 relative'>
     
     
        <div className="absolute text-white font-extrabold opacity-40 flex flex-col justify-center px-50 border-2 border-white">
          <span className="stroke-text text-8xl">Just Do It</span>
          <span className="glow-text text-9xl ">Just Do It</span>
          <span className="stroke-text text-8xl">Just Do It</span>
        </div>

        <img
          src={air1}
          alt="air1"
          className="scale-110 rotate-[340deg] relative z-10 px-20"
        />
      </div>


    </div>

  );
};

export default Content;
