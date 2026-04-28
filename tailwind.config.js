/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'slate-green': '#4A5D4E',
        'black-olive': '#242521',
        'primary-dark': '#0B1408',
        'secondary-dark': '#162210',
        'accent-cream': '#E0F0C1',
        'accent-lime': '#B9E075',
        'olive-green': '#3C4D27',
        'muted-green': '#7A8B6C',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

