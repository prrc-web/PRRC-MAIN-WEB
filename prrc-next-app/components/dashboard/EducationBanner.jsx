import React from 'react';
import Image from 'next/image';

export default function EducationBanner() {
  const bannerStyle = {
    display: 'flex',
    justifyContent: 'center', // Centers children horizontally
    alignItems: 'center', // Centers children vertically
    flexDirection: 'column', // Stacks children vertically
    maxWidth: '100%', // Ensures the banner doesn't exceed the viewport width
    margin: '0 auto', // Centers the banner itself
    padding: '20px', // Adds some space around the banner
  };

  return (
    <div style={bannerStyle}>
      <Image
        src="/student-collage-1.png"
        alt="Photos of our researchers, students, graduate students, and staff."
        width={500} // Specify the width of the image
        height={500} // Specify the height of the image
        style={{
          maxWidth: '100%', // Makes the image scale down if it's too large
          height: 'auto', // Maintains aspect ratio
          display: 'block', // Removes bottom margin
          margin: '0 auto', // Centers the image
        }}
      />
    </div>
  );
}
