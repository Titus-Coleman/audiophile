/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      mobile: '320px',
      tablet: '768px',
      desktop: '1440px',
    },
    colors: {
      caramel: '#D87D4A',
      nude: '#fbaf85',
      grey: '#F1F1F1',
      'light-grey': '#FAFAFA',
      black: '#000000',
      'light-black': '#101010',
      white: '#FFFFFF',
    },

    fontSize: {
      'sub-title': [
        '0.813rem',
        { lineHeight: '1.563rem', letterSpacing: '0.063rem' },
      ],
      overline: [
        '0.875rem',
        { lineHeight: '1.563rem', letterSpacing: '0.625rem' },
      ],
      body: ['0.938rem', { lineHeight: '1.563rem' }],
      md: ['1.125rem', { lineHeight: '1.5rem', letterSpacing: '0.081rem' }],
      lg: ['1.5rem', { lineHeight: '2.063rem', letterSpacing: '0.1061rem' }],
      xl: ['1.75rem', { lineHeight: '2.375rem', letterSpacing: '0.125rem' }],
      '2xl': ['2rem', { lineHeight: '2.75rem', letterSpacing: '0.094rem' }],
      '3xl': ['2.5rem', { lineHeight: '2.75rem', letterSpacing: '0.1061rem' }],
      '4xl': ['3.5rem', { lineHeight: '3.625rem', letterSpacing: '0.125rem' }],
    },
    extend: {
      backgroundImage: {
        hero: "url('/assets/home/mobile/image-header.jpg')",
        desktopHero:
          'url(https://res.cloudinary.com/duniv0ekp/image/upload/v1674610470/audiophile/home/desktop/image-hero_gqxuzo.jpg)',
        tabletHero:
          'url(https://res.cloudinary.com/duniv0ekp/image/upload/v1674610471/audiophile/home/tablet/image-header_din7tb.jpg)',
        circles: "url('/assets/home/desktop/pattern-circles.svg')",

        zx7: "url('/assets/home/mobile/image-speaker-zx7.jpg')",
      },
      gridTemplateColumns: {
        two: '50px 1fr',
      },
    },
  },
  plugins: [require('daisyui')],
};
