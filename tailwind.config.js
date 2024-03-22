/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'alegreya': ['"Alegreya SC"'],
      'uncial': ['"Uncial Antiqua"'],
      'bodoni': ['"Bodoni Moda"']
    },
    extend: {
      colors: {
        'tan': '#D4A373',
        'beige': '#FAEDCD',
        'sand': '#FEFAE0',
      },
    },
  },
  plugins: [],
}

