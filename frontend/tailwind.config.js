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
      lg: {'max': '1126px'},
      xl: {'max': '1600px'},
      wide: {'min': '1601px', 'max': '1920px'}
    },
    container: {
      padding: '20px',
      center: true
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      yellow_bg: '#FFF9E4',
      yellow_text: '#FFCC17',
    }
  },
  plugins: [],
}
