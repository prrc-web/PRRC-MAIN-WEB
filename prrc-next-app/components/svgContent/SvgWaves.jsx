import React, { useEffect, useState } from 'react';

const SvgWaves = () => {
  const [scale, setscale] = useState(1); // Initial scale

  useEffect(() => {
    const updateScaleAndAnimationSpeed = () => {
      let newScale;
      let animationSpeed = '35s'; // Default animation speed

      if (window.innerWidth < 380) {
        newScale = 0;
        animationSpeed = '16s';
      } else if (window.innerWidth < 400) {
        newScale = 0;
        animationSpeed = '17s';
      } else if (window.innerWidth < 420) {
        newScale = 0;
        animationSpeed = '18s';
      } else if (window.innerWidth < 440) {
        newScale = 0;
        animationSpeed = '19s';
      } else if (window.innerWidth < 780) {
        newScale = 0;
        animationSpeed = '19s';
      } else if (window.innerWidth < 850) {
        newScale = 2.15;
      } else if (window.innerWidth < 1250) {
        newScale = 2.13;
        animationSpeed = '20s';
      } else {
        newScale = 2.065;
        animationSpeed = '35s';
      } // Update scale
      setscale(newScale); // Update scale

      document.documentElement.style.setProperty(
        '--wave-animation-duration',
        animationSpeed,
      ); // Update animation speed
    };

    updateScaleAndAnimationSpeed(); // Initial call

    window.addEventListener('resize', updateScaleAndAnimationSpeed); // Add event listener
    return () => {
      window.removeEventListener('resize', updateScaleAndAnimationSpeed);
    }; // Remove event listener
  }, []);

  return (
    <svg
      className="waves w-full overflow-hidden transform-gpu "
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 120 20"
      preserveAspectRatio="none"
      shapeRendering="auto"
      style={{
        transform: `scale(${scale}, 1)`,
        // Contains waves
      }}>
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g className="parallax">
        <use
          xlinkHref="#gentle-wave"
          className="wave1 fill-[rgba(115,194,251)] animate-wave-1"
        />
        <use
          xlinkHref="#gentle-wave"
          className="wave2 fill-[rgba(173,216,255)] animate-wave-2"
        />
        <use
          xlinkHref="#gentle-wave"
          className="wave3 fill-[rgba(87,160,210)] animate-wave-3"
        />
        <use
          xlinkHref="#gentle-wave"
          className="wave4 fill-[#6693F5] animate-wave-4"
        />
      </g>
      <line
        x1="0"
        y1="100%"
        x2="100%"
        y2="100%"
        className="stroke-[#112233] stroke-[1.5]"
        transform="translate(0 23.5)"
      />
    </svg>

    // <svg
    //   className="waves"
    //   xmlns="http://www.w3.org/2000/svg"
    //   xmlnsXlink="http://www.w3.org/1999/xlink"
    //   viewBox="0 24 125 28"
    //   preserveAspectRatio="none"
    //   shapeRendering="auto"
    //   style={{ transform: `scale(${scale}, 1)` }} // Scale horizontally
    // >
    //   <defs>
    //     <path
    //       id="gentle-wave"
    //       d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
    //     />
    //   </defs>
    //   <g className="parallax">
    //     <use
    //       xlinkHref="#gentle-wave"
    //       x="0"
    //       y="8.5"
    //       fill="rgba(115, 194, 251)"
    //       className="wave1"
    //     />
    //     <use
    //       xlinkHref="#gentle-wave"
    //       x="-20"
    //       y="8.5"
    //       fill="rgba(173, 216, 255)"
    //       className="wave2"
    //     />
    //     <use
    //       xlinkHref="#gentle-wave"
    //       x="-40"
    //       y="8.5"
    //       fill="rgba(87, 160, 210)"
    //       className="wave3"
    //     />
    //     <use
    //       xlinkHref="#gentle-wave"
    //       x="-60"
    //       y="8.5"
    //       fill="#6693F5"
    //       className="wave4"
    //     />
    //   </g>
    // </svg>
  );
};

export default SvgWaves;
