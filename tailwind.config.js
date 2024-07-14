/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  options: {
    safelist: [
      'gatsby-image-wrapper' // 直接添加
    ]
  },
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
        '15': '3.75rem',  // 60px
        '27': '6.75rem',  // 108px
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
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
      },
      zIndex: {
        '-11': '-11',
      },
      spacing: {
        '13': '3.25rem', // 自定义 3.25rem 的间距
        '14': '3.5rem',  // 自定义 3.5rem 的间距
        '15': '3.75rem', // 自定义 3.75rem 的间距
        '16': '4rem',    // 自定义 4rem 的间距
        '20': '5rem',    // 自定义 5rem 的间距
        '24': '6rem',    // 自定义 6rem 的间距
        '28': '7rem',    // 自定义 7rem 的间距
        '32': '8rem',    // 自定义 8rem 的间距
        '36': '9rem',    // 自定义 9rem 的间距
        '40': '10rem',   // 自定义 10rem 的间距
        '44': '11rem',   // 自定义 11rem 的间距
        '48': '12rem',   // 自定义 12rem 的间距
        '52': '13rem',   // 自定义 13rem 的间距
        '56': '14rem',   // 自定义 14rem 的间距
        '60': '15rem',   // 自定义 15rem 的间距
        '64': '16rem',   // 自定义 16rem 的间距
        '72': '18rem',   // 自定义 18rem 的间距
        '80': '20rem',   // 自定义 20rem 的间距
        '96': '24rem',   // 自定义 24rem 的间距
      },
      padding: {
        '13': '3.25rem',
        '14': '3.5rem',
        '15': '3.75rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '28': '7rem',
        '32': '8rem',
        '36': '9rem',
        '40': '10rem',
        '44': '11rem',
        '48': '12rem',
        '52': '13rem',
        '56': '14rem',
        '60': '15rem',
        '64': '16rem',
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

