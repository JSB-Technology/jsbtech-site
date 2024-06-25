/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: 'var(--font-inter)',
        display: 'var(--font-lexend)',
      },
      maxWidth: {
        '2xl': '40rem',
      },
      boxShadow: {
        'bottom-fade': '0 8px 10px -5px rgba(0, 0, 0, 0.3)',
      },
      colors: {
        'transparent-white': 'rgba(255, 255, 255, 0.5)', // 白色半透明
      },
      height: {
        '28': '7rem',     // 112px
        '29': '7.25rem',  // 116px
        '30': '7.5rem',   // 120px
        '31': '7.75rem',  // 124px
        '32': '8rem',     // 128px
        '33': '8.25rem',  // 132px
        '34': '8.5rem',   // 136px
        '35': '8.75rem',  // 140px
      },
      maxHeight: {
        '28': '7rem',     // 112px
        '29': '7.25rem',  // 116px
        '30': '7.5rem',   // 120px
        '31': '7.75rem',  // 124px
        '32': '8rem',     // 128px
        '33': '8.25rem',  // 132px
        '34': '8.5rem',   // 136px
        '35': '8.75rem',  // 140px
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

