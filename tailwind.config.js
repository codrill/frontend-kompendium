module.exports = {
  purge: ['./pages/**/*.{jsx,tsx}', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    transitionProperty: ['motion-safe', 'motion-reduce'],
    extend: {},
  },
  plugins: [],
}
