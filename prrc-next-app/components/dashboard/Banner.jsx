import React from 'react';
import Image from 'next/image';

export default function Banner() {
  return (
<<<<<<< HEAD
    <div className="flex items-center justify-center  bg-white">
      <Image
        src="/homepage-banner.png"
        alt="Homepage Banner"
        width={1920}
        height={1080}
        className="max-w-screen h-auto block "
=======
    <div className="w-full overflow-hidden bg-white">
      <img
        src="/homepage-banner.png"
        alt="Homepage Banner"
        className="w-screen h-auto object-cover "
>>>>>>> 03c0f1afbb667d0b9f2a3f2b07e9eae00ed3e6dc
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
