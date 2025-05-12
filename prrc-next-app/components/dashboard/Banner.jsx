import React from 'react';

export default function Banner() {
  return (
    <div className="flex items-center justify-center  bg-white">
      <img
        src="/homepage-banner.png"
        alt="Homepage Banner"
        className="max-w-screen h-auto block "
      />
    </div>
  );
}

// export default function Banner() {
//   const bannerStyle = {
//     display: 'flex',
//     justifyContent: 'center', // Centers children horizontally
//     alignItems: 'center', // Centers children vertically
//     flexDirection: 'column', // Stacks children vertically
//     maxWidth: '100%', // Ensures the banner doesn't exceed the viewport width
//     margin: '0 auto', // Centers the banner itself
//     padding: '1em', // Adds some space around the banner
//   };

//   const imageStyle = {
//     maxWidth: '100%', // Makes the image scale down if it's too large
//     height: 'auto', // Maintains aspect ratio
//     display: 'block', // Removes bottom margin
//     margin: '0 auto', // Centers the image
//   };

//   return (
//     <div style={bannerStyle}>
//       <img
//         style={imageStyle}
//         src="/homepage-banner.png"
//         alt="Homepage Banner"
//       />
//     </div>
//   );
// }
