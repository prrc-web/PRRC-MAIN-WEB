module.exports = {
  darkMode: 'class', // Required for dark variant
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    fontFamily: {
      header: ['"Times New Roman"', 'Times', 'serif'],
    },
    extend: {
      colors: {
        navheaderstart: '#112233',
        navheadermid: '#334455',
        navheaderend: '#112233',
        nmtblue: '#0c2753',
        nmtred: '#78291c',
        monochrome1: '#6275ab',
        monochrome2: '#bcceff',
        switch1: '#daf7f4',
        switch2: '#2d928d',
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
