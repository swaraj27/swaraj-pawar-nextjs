module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primaryBackround:"#0a192f",
        primaryGreen:"#77acf1",
        primaryGray:"#ccd6f6",
        darkGray:"#bdc8e7",
      }
    },
  },
  variants: {
    extend: {
      animation: ['motion-safe'],
    },
  },
  plugins: [],
}
