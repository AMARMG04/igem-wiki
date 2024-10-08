import React from 'react';
import Plant from "../assets/plant.png"
const Land = () => {
  // Define styles as JavaScript objects
  const containerStyles = {
    position: 'relative', // Ensure the parent div has relative positioning to allow absolute positioning of the shape
    padding: '20px', // Optional padding for content
    minHeight: '200px', // Minimum height to ensure the SVG has enough space
    overflow: 'hidden', // Prevents content overflow
  };

  const dividerStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    overflow: 'hidden',
    lineHeight: 0,
  };

  const svgStyles = {
    position: 'relative',
    display: 'block',
    width: 'calc(105% + 1.3px)',
    height: '120px', // Increased height to ensure full visibility
    transform: 'rotateY(180deg)',
  };

  const pathStyles = {
    fill: '#FFFAE9',
  };

  return (
    <div className='h-screen z-1000'>
    <div style={containerStyles} className='bg-amber-900 relative '>
        
      <div style={dividerStyles}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={svgStyles}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            style={pathStyles}
          ></path>
        </svg>
        
      </div>
      <div className='flex w-full justify-center absolute top-[-125px] z-1000'>
        <img src={Plant} alt="" className='' />
      </div>
    </div>
    </div>
  );
};

export default Land;
