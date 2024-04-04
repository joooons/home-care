/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'ephesis': ['"Ephesis"'],
      'italianno': ['"Italianno"'],
      'playball': ['"Playball"'],
      'allura': ['"Allura"'],
      'playfair': ['"Playfair"'],
      'libre': ['"Libre Baskerville"'],
      'source': ['"Source Serif 4"'],
      'cormorant': ['"Cormorant Upright"'],
      'newsreader': ['"Newsreader"'],
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
        'prime-hi': "#237AFC",
        // 'prime': "#5C4600",
        // 'prime': "#FCC203",
        // 'second': "#4E31A3"
        'second': "#14002E",
        'golden': "#F7D128",
      },
    },
  },
  plugins: [],
}

