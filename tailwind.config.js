/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    container: {
      padding: '0.5rem',
      center: true,
    },
    extend: {
      animationDuration: {
        slow: '10000ms',
        1200: '1200ms',
      },
      animation: {
        'hero-circle-orange-lg': 'heroOrangeLarge',
        'hero-circle-orange-sm': 'heroOrangeSmall',
        'hero-circle-purple-lg': 'heroPurpleLarge',
        'hero-circle-purple-sm': 'heroPurpleSmall',
        'delayed-fade-in': 'delayedFadeIn',
      },
      keyframes: {
        delayedFadeIn: {
          '0%': {
            transform: 'translate(0px, 10px)',
            opacity: 0,
          },
          '50%': {
            transform: 'translate(0px, 10px)',
            opacity: 0,
          },
          '100%': {
            transform: 'translate(0px, 0px)',
            opacity: 1,
          },
        },
        heroPurpleSmall: {
          '0%': {
            transform: 'translate(0px, 0px)',
          },
          '15%': {
            transform: 'translate(5px, 5px)',
          },
          '40%': {
            transform: 'translate(-5px, -5px)',
          },
          '100%': {
            transform: 'translate(-2px, -2px)',
          },
        },
        heroPurpleLarge: {
          '0%': {
            transform: 'translate(0px, 0px)',
          },
          '50%': {
            transform: 'translate(-5px, -5px)',
          },
          '80%': {
            transform: 'translate(0px, 10px)',
          },
          '100%': {
            transform: 'translate(-2px, 5px)',
          },
        },
        heroOrangeSmall: {
          '0%': {
            transform: 'translate(0px, 0px)',
          },
          '25%': {
            transform: 'translate(5px, -5px)',
          },
          '75%': {
            transform: 'translate(-5px, -5px)',
          },
          '100%': {
            transform: 'translate(2px, 2px)',
          },
        },
        heroOrangeLarge: {
          '0%': {
            transform: 'translate(0px, 0px)',
          },
          '33%': {
            transform: 'translate(5px, 5px)',
          },
          '66%': {
            transform: 'translate(-5px, -5px)',
          },
          '100%': {
            transform: 'translate(-2px, -2px)',
          },
        },
      },
      minHeight: {
        hero: '45rem',
      },
      colors: {
        primary: '#663399',
        'primary-dark': '#542880',
        'primary-darker': '#461c70',
        highlight: '#FF5D3A',
        'highlight-dark': '#d84a2b',
        'brand-light': '#F7F7F7',
        'brand-medium': '#e6e9ee',
        'brand-dark': '#C4C4C4',
        black: '#2d2c2c',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
}
