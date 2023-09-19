/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: {'max': '400px'},
      md: {'max': '600px'},
      lg: {'min': '601px', 'max': '1180px'},
      lt: {'min': '1181px', 'max': '1440px'},
      xl: {'min': '1181px', 'max': '1600px'},
      wide: {'min': '1601px', 'max': '3000px'}
    },
    container: {
      padding: '20px',
      center: true
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      black_bg: '#242424',
      grey_text: '#949494',
      yellow_bg: '#FFF9E4',
      yellow_text: '#FFCC17',
    }
  },
  plugins: [],
}
