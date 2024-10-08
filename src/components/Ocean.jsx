import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import gsap from 'gsap';
import MagnifyImage from "../components/MagnifyImage"
import ScrollTrigger from 'gsap/ScrollTrigger';
import fishImage from '../assets/fish.png'; // Import your fish image here
import fishImage2 from '../assets/fish2.png';
import Police from '../assets/police.png'

gsap.registerPlugin(ScrollTrigger);
AOS.init();

const Ocean = () => {
  // Create refs for the fish elements
  const fish1Ref = useRef(null);
  const fish2Ref = useRef(null);
  const fish3Ref = useRef(null);
  const fish4Ref = useRef(null);
  const fish5Ref = useRef(null);
  const fish6Ref = useRef(null);

  const policeRef = useRef(null);
  const particlesRefs = useRef([]);

  
  // Create an array of refs for the particle divs
  

  useEffect(() => {
    // Fish animations
    const fishAnimations = [
      { ref: fish1Ref, start: 'top bottom', end: 'bottom top', xStart: '-100%', xEnd: '100%' },
      { ref: fish2Ref, start: 'top bottom', end: 'bottom top', xStart: '-100%', xEnd: '100%' },
      { ref: fish3Ref, start: 'top bottom', end: 'bottom top', xStart: '-100%', xEnd: '100%' },
      { ref: fish4Ref, start: 'top bottom', end: 'bottom top', xStart: '100%', xEnd: '-100%' },
      { ref: fish5Ref, start: 'top bottom', end: 'bottom top', xStart: '100%', xEnd: '-100%' },
      { ref: fish6Ref, start: 'top bottom', end: 'bottom top', xStart: '100%', xEnd: '-100%' },
    ];


    gsap.to(policeRef.current, {
      x: "90vw", // Moves the police image to the right as you scroll
      scrollTrigger: {
        trigger: ".last",
        start: "top 0%", // Animation starts when the top of the trigger hits the top of the viewport
        end: "bottom 20%", // Animation ends when the bottom of the trigger hits the top of the viewport
        scrub: 10, // Smooth scrolling effect
      },
    });

    fishAnimations.forEach(({ ref, start, end, xStart, xEnd }) => {
      gsap.fromTo(
        ref.current,
        { x: xStart }, // Start position
        {
          x: xEnd, // End position
          scrollTrigger: {
            trigger: ref.current,
            start: start,
            end: end,
            scrub: 2,
          },
        }
      );
    });

    // Apply the same animation to each particle

    // particlesRefs.current.forEach((particle, index) => {
    //   if (particle) {
    //     gsap.to(particle, {
    //       scrollTrigger: {
    //         trigger: particle,
    //         start: "top 50%", 
    //         end: "bottom 20%", 
    //         scrub: 80,
    //       },

    //       y: "190vh", 
    //       ease: "power2.out",
    //     });
    //   }
    // });
  }, []);

  // Helper to add refs dynamically

  // const addToRefs = (el) => {
  //   if (el && !particlesRefs.current.includes(el)) {
  //     particlesRefs.current.push(el);
  //   }
  // };

  return (
    <div className='grid grid-cols-1 z-0 ocean relative'>
      {/* Fish Background */}
      <div className='absolute inset-0 overflow-hidden'>
        <img
          src={fishImage}
          alt='Fish 1'
          ref={fish1Ref}
          className='absolute w-20 invert'
          style={{ top: '10%', left: '30%' }}
        />
        <img
          src={fishImage}
          alt='Fish 2'
          ref={fish2Ref}
          className='absolute w-20'
          style={{ top: '25%', left: '10%' }}
        />
        <img
          src={fishImage}
          alt='Fish 3'
          ref={fish3Ref}
          className='absolute w-20 invert'
          style={{ top: '34%', left: '30%' }}
        />
        <img
          src={fishImage2}
          alt='Fish 4'
          ref={fish4Ref}
          className='absolute w-20'
          style={{ top: '55%', right: '10%' }}
        />
        <img
          src={fishImage2}
          alt='Fish 5'
          ref={fish5Ref}
          className='absolute w-20 invert'
          style={{ top: '70%', right: '40%' }}
        />
        <img
          src={fishImage2}
          alt='Fish 6'
          ref={fish6Ref}
          className='absolute w-20'
          style={{ top: '90%', left: '20%' }}
        />
      </div>

      {/* Particle Elements */}
      <div className='particles'>
        {/* <div className='flex justify-between '>
          <div className='rounded-full bg-red-600 w-[9px] h-[15px]' ref={addToRefs}></div>
          <div className='rounded-full bg-blue-600 w-[9px] h-[10px] mt-8' ref={addToRefs}></div>
          <div className='rounded-full bg-green-600 w-[9px] h-[13px] mt-20' ref={addToRefs}></div>
          <div className='rounded-full bg-red-600 w-[9px] h-[9px] mt-18' ref={addToRefs}></div>
          <div className='rounded-full bg-yellow-600 w-[9px] h-[10px] mt-14' ref={addToRefs}></div>
          <div className='rounded-full bg-green-600 w-[9px] h-[13px]' ref={addToRefs}></div>
          <div className='rounded-full bg-pink-600 w-[9px] h-[10px] mt-10' ref={addToRefs}></div>
          <div className='rounded-full bg-yellow-600 w-[9px] h-[12px]' ref={addToRefs}></div>
          <div className='rounded-full bg-red-600 w-[9px] h-[15px]' ref={addToRefs}></div>
        </div> */}

        {/* Content Sections */}
        <h1 className='pt-[70px] pb-[20px] text-center text-white font-nohemi_m text-[70px]'>
        Oceans are choking on plastics
                </h1>
        <div className='grid grid-rows-1'>
          <div className='flex flex-col items-end justify-end pt-35'>
            <div
              data-aos='fade-left'
              className='text-white w-[600px] text-justify p-4 text-2xl m-20 backdrop-blur-lg'
            >
              {/* <h1 className='text-[50px] font-nohemi_m my-7'>What is it?</h1> */}
              <p className='font-nohemi_l my-7 text-[30px]'>
              With 8 million tons of plastic waste dumped into them annually.
              </p>
            </div>
          </div>
        </div>

        <div className='grid grid-rows-1'>
          <div className='flex flex-row items-start justify-start pt-35'>
            <div
              data-aos='fade-left'
              className='text-white w-[600px] text-justify p-4 text-2xl m-20 backdrop-blur-lg'
            >
              {/* <h1 className='text-[50px] font-nohemi_m my-7'>Why is it?</h1> */}
              <p className='font-nohemi_l my-7 text-[30px] justify-center'>
              These toxic particles block digestive tracts, reduce feeding, and poison marine creatures.
              </p>
            </div>
            <div className=" mt-12 ">
              <h1 className='text-white text-[30px]'>Hover over me !</h1>
      <MagnifyImage src={fishImage2} />
    </div>
          </div>
        </div>

        <div className='grid grid-rows-1 last' >
          <div className='flex flex-col items-end justify-end pt-35' >
            <div
              data-aos='fade-left'
              className='text-white w-[600px] text-justify p-4 text-2xl m-20 backdrop-blur-lg'
            >
              <p className='font-nohemi_l text-[30px] my-7'>
              This disruption of ecosystems threatens not only marine life but also the global food chain​. 

              </p>
            </div>
          </div>
         
        </div>

        
      </div>



      <div className='items-start police' ref={policeRef}>
        <img src={Police} className='w-[400px] pimg' alt="Police" />
      </div>

      
    </div>
  );
};

export default Ocean;
