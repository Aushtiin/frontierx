module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'default-red': '#fc364c',
        'bg100': '#0d0d0d',
      },
      gridTemplateRows: {
        "layout": "100px 100px 100px"
      }
    },
  },
  plugins: [],
}
