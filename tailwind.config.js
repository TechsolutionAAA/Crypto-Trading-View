/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': { 'max': '1535px' },
        // => @media (max-width: 1535px) { ... }

        'xl': { 'min': '1200px', 'max': '3840px' },
        // => @media (max-width: 1279px) { ... }

        'lg': { 'max': '1200px' },
        // => @media (max-width: 1023px) { ... }

        'md': { 'max': '765px' },
        // => @media (max-width: 767px) { ... }

        'm_md': '865px',

        'm_sm': '393px',

        'sm': { 'max': '393px' },
        // => @media (max-width: 639px) { ... }
      }
    },
  },
  plugins: [],
}
