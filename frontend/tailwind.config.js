/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // screens: {
    //   sm: {'max': '500px'},
    //   md: {'max': '600px'},
    //   lg: {'min': '601px', 'max': '1180px'},
    //   lt: {'min': '1181px', 'max': '1440px'},
    //   xl: {'min': '1181px', 'max': '1600px'},
    //   wide: {'min': '1601px', 'max': '3000px'}
    // },
    screens: {
      wide: {'max': '3000px'},
      xl: {'max': '1600px'},
      lt: {'max': '1440px'},
      lg: {'max': '1180px'},
      md: {'max': '600px'},
      sm: {'max': '500px'},
    },
    container: {
      padding: '20px',
      center: true
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      blackBg: '#242424',
      greyText: '#949494',
      yellowBg: '#FFF9E4',
      yellowText: '#FFCC17',
    }
  },
  plugins: [],
}
