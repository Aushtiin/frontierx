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
        "layout": "repeat(1fr 1fr 1fr)"
      }
    },
  },
  plugins: [],
}
