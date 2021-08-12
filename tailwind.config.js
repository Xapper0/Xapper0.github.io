module.exports = {
  purge: [
    // './src/**/*.html',
    // './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        double:'200%'
      },
    },
  },
  variants: {
    extend: {
      brightness: ['hover', 'focus'],
    },
  },
  plugins: [],
}
