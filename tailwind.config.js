const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        SFProText: ['SFProText'],
      },
      colors: {
        grayCustom: 'rgb(53, 64, 82)',
        blueCustom: 'rgb(0, 153, 255)',
      },
    },
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
}
