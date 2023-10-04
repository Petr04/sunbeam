/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
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
      ssm: {'max': '400px'}
    },
    container: {
      padding: '20px',
      center: true
    },
    colors: {
      'primary': '#FFCC17',
      'background': '#FFF9E4',
      'white': 'white',
      'gray-01': '#ACACAC',
      'gray-02': '#949494',
      'gray-03': '#373737',
      'gray-04': '#242424',
      'dim': '#00000050',
      'placeholder': '#94949488'
    },
    extend: {
      boxShadow: {
        md: '0px 7.92922px 22.0256px 0px rgba(0, 0, 0, 0.10)',
      },
    },
  },
  plugins: [],
}
