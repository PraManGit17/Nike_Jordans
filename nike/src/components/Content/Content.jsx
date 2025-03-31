import React from 'react';
import './Content.css';
import air1 from './shoes/air1.png';

const Content = () => {
  return (      
      <div className='flex gap-5 w-screen overflow-hidden content-container text-white z-10'>

        <div className='flex flex-col justify-center gap-8 px-10 w-1/2'>
          <span className='text-5xl font-black '>Air Jordan 1 'Black Toe Reimagined'</span>
          <span className='text-xl font-normal'>
            Scheduled for release on February 1, 2025, this iteration reimagines the classic 'Black Toe' design. It
            combines the iconic black, red, and white color scheme with modern materials and construction, offering a
            fresh take on a beloved classic.
          </span>
          <div className='flex flex-col gap-10' >
            <span className='text-7xl font-semibold'>
              ₹15,000
            </span>
            <div className='flex gap-8 px-10 py-2'>
              <button className='text-2xl border-white border-2 rounded-2xl px-5 py-2'>Buy Now</button>
              <button className='text-2xl border-white border-2 rounded-2xl px-5 py-2'>Add To Cart</button>
            </div>
          </div>
        </div>

        <div className='w-[60%] relative flex items-center justify-center '>
          <div className="absolute text-white font-extrabold opacity-40 flex flex-col items-center justify-center flex-nowrap px-50">
            <span className="stroke-text text-8xl">Just Do It.</span>
            <span className="stroke-text text-8xl">Just Do It.</span>
            <span className="glow-text text-8xl">Just Do It.</span>
            <span className="glow-text text-[120px]">Just Do It.</span>
            <span className="glow-text text-8xl">Just Do It.</span>
            <span className="stroke-text text-8xl">Just Do It.</span>
            <span className="stroke-text text-8xl">Just Do It.</span>
          </div>
          <div className='px-10'>
            <img
              src={air1}
              alt="air1"
              className="scale-110 rotate-[330deg] relative z-10 "
            />
          </div>
        </div>
      </div>


  );
};

export default Content;
