/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'tan': '#D4A373',
      'beige': '#FAEDCD',
      'sand': '#FEFAE0',
    },
    fontFamily: {
      'alegreya': ['"Alegreya SC"'],
      'uncial': ['"Uncial Antiqua"'],
      'bodoni': ['"Bodoni Moda"']
    },
    extend: {},
  },
  plugins: [],
}

