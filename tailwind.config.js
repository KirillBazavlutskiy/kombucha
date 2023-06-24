/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        // sans: ['var(--fonts)', ...fontFamily.sans],
        pobeda: ['var(--font-pobeda)'],
        sverdlovsk: ['var(--font-sverdlovsk)'],
        montserrat: ['var(--font-montserrat)'],
      },
    },
  },
  plugins: [],
}
