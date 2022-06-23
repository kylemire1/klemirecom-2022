/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    container: {
      padding: '0.5rem',
      center: true,
    },
    extend: {
      minHeight: {
        hero: '45rem',
      },
      colors: {
        primary: '#663399',
        'primary-dark': '#542880',
        'primary-darker': '#461c70',
        highlight: '#FF5D3A',
        'brand-light': '#F7F7F7',
        'brand-medium': '#e5e5e5',
        'brand-dark': '#C4C4C4',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
