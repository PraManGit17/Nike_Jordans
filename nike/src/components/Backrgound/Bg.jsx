import React, { useState, useEffect } from 'react';

const Bg = () => {
  const [mousePosition, setMousePosition] = useState({ x: '50%', y: '50%' });

  const handleMouseMove = (event) => {
    setMousePosition({ x: `${event.clientX}px`, y: `${event.clientY}px` });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className='w-screen h-screen flex overflow-hidden relative bg-container'>
      <div
        className='absolute w-full h-full grid grid-cols-6 grid-rows-10 gap-30 rotate-335 nike-text-container'
        style={{ '--x': mousePosition.x, '--y': mousePosition.y }}
      >
        {[...Array(80)].map((_, index) => (
          <span key={index} className='text-white text-9xl font-extrabold opacity-10 nike-text'>
            Nike
          </span>
        ))}
      </div>
    </div>
  );
};

export default Bg;