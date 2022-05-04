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
        'inputBg': '#1f1f1f',
        'box': 'rgba(13, 13, 13, 0.5)',
        'subText': '#F3F3F3',
        'boxBg': 'rgba(13, 13, 13, 0.5)'
      },
      gridTemplateRows: {
        "layout": "repeat(1fr 1fr 1fr)"
      },
      backgroundImage: {
        'headerStripe': 'linear-gradient(95.91deg, #665AEF 6.04%, #FC364C 88.42%)',
        'bodyBg': 'linear-gradient(15.74deg, rgba(46, 45, 102, 0.6) -2.5%, rgba(58, 39, 63, 0.6) 47.55%, #181818 90.7%)',
      }
    },
  },
  plugins: [],
}
