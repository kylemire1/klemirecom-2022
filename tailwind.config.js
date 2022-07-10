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
      },
      animation: {
        'hero-circle-orange-lg': 'heroOrangeLarge',
        'hero-circle-orange-sm': 'heroOrangeSmall',
        'hero-circle-purple-lg': 'heroPurpleLarge',
        'hero-circle-purple-sm': 'heroPurpleSmall',
      },
      keyframes: {
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
        'brand-medium': '#e5e5e5',
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
