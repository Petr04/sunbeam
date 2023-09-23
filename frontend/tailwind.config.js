/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      zoom: {'max': '4000px'},
      wide: {'max': '3000px'},
      xl: {'max': '1920px'},
      lt: {'max': '1440px'},
      lg: {'max': '1180px'},
      mg: {'max': '950px'},
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
      opacityBlack: '#00000050'
    }
  },
  plugins: [],
}
