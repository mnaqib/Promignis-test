module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        SFProText: ['SFProText'],
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
}
