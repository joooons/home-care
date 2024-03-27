/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'alegreya': ['"Alegreya Sans"'],
      'bodoni': ['"Libre Bodoni"'],
      'merriweather': ['"Merriweather"']
    },
    extend: {
      colors: {
        'tan': '#D4A373',
        'beige': '#FAEDCD',
        'sand': '#FEFAE0',
        'soot': '#2A1B1B',
        'dark': "#000",
        'light': "#FFF",
        'prime': "#4992FF",
        // 'prime': "#5C4600",
        'second': "#4E31A3"
      },
    },
  },
  plugins: [],
}

