import React from "react";
import './TimeLine.css'

const TimeLine = () => {
  return (
    <div
      className="TimeLine text-white">

      <div className="flex items-center justify-center py-18 w-auto">

        <div className="flex flex-col items-center justify-center gap-11 ">
          <div className="flex items-center justify-center gap-86">
            <span className="text-8xl font-black">Jordans'</span>
            <span className="text-8xl font-black">Legacy</span>
          </div>
          <div className="text-4xl font-medium">
            A Showcase of Jordans' Excellent Testimonials
          </div>
        </div>
      </div>

      <div className="w-screen border-2 border-white h-auto flex flex-col justify-center gap-5 p-10">
        <div className="border-2 border-white w-66 h-44 ml-32"></div>
        <hr className="w-full h-2 border-2 border-white"></hr>
        <div className="border-2 border-white w-66 h-44"></div>
        <div></div>
      </div>

    </div>
  );
};

export default TimeLine;
