module.exports = {
  darkMode: 'class', // Required for dark variant
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    fontFamily: {
      header: ['"Times New Roman"', 'Times', 'serif'],
    },
    extend: {
      colors: {
        // --- legacy tokens ---
        navheaderstart: '#112233',
        navheadermid: '#334455',
        navheaderend: '#112233',
        nmtblue: '#0c2753',
        nmtred: '#78291c',
        monochrome1: '#6275ab',
        monochrome2: '#bcceff',
        switch1: '#daf7f4',
        switch2: '#2d928d',

        // --- brand palette (Dory, 2026-10-15) ---
        // Any utility works: bg-techieBlue, text-whiteSands, border-quantumBlue,
        // ring-electricGreen, and opacity modifiers like bg-oreBlue/60.
        // NOTE: techieBlue, oreBlue and the legacy nmtblue are three distinct dark
        // navies on purpose — they are part of the style guide, used intentionally.
        // Do not consolidate them.
        techieBlue: '#182952', //  Techie Blue
        whiteSands: '#efefef', //  White Sands
        oreBlue: '#0b1535', //  Ore Blue
        cloudCircuit: '#d8e2e7', //  Cloud Circuit
        graphiteSky: '#767f8c', //  Graphite Sky
        quantumBlue: '#0064ff', //  Quantum Blue
        electricGreen: '#c3ea24', //  Electric Green
      },

      animation: {
        'wave-1': 'moveWave 24s linear infinite',
        'wave-2': 'moveWave 29s linear infinite',
        'wave-3': 'moveWave 33s linear infinite',
        'wave-4': 'moveWave 37s linear infinite',
      },
      keyframes: {
        moveWave: {
          '0%': { transform: 'translateX(-140%)' },
          '100%': { transform: 'translateX(240%)' },
        },
      },
    },
    variants: {
      extend: {
        textColor: ['hover', 'dark', 'dark-hover', 'focus', 'dark-focus'],
        backgroundColor: ['hover', 'dark', 'dark-hover', 'focus', 'dark-focus'],
      },
    },
    plugins: [],
  },
};
