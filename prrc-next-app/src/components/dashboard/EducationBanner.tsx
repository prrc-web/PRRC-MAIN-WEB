import React, { CSSProperties } from 'react';

export default function EducationBanner() {
  const bannerStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    maxWidth: '100%',
    margin: '0 auto',
    padding: '20px',
  };

  const imageStyle: CSSProperties = {
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
    margin: '0 auto',
  };

  return (
    <div style={bannerStyle}>
      <img
        style={imageStyle}
        src="/student-collage-1.png"
        alt="Photos of our researchers, students, graduate students, and staff."
      />
    </div>
  );
}
