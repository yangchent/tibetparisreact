module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['"Roboto"', 'sans-serif'],
        'poppins': ['"Poppins"', 'sans-serif'],
        'fredoka': ['"Fredoka"', 'sans-serif'] // Ensure fonts with spaces have " " surrounding it.
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'mygreen': '#2a9d8f',
        'myorange': '#e76f51',
      },
    },
  },
  plugins: [],
}