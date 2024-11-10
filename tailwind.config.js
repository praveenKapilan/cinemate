module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      sreens: {
        "other": {'min':'340px', 'max': '1200px'},
      },
      colors: {
        "darkbg": "#1E293B",
        blue : {
          300 : '#1A56DB'
        }
      }
    },
  },
  plugins: [],
}