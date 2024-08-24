/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      width: {
        mobile: 375,
        desktop: 1440
      },
      colors: {
        primary: {
          'bright-blue': 'hsl(220, 98%, 61%)'
        },
        light: {
          'very-light-gray': 'hsl(0, 0%, 98%)',
          'very-light-grayish-blue': 'hsl(236, 33%, 92%)',
          'light-grayish-blue': 'hsl(233, 11%, 84%)',
          'dark-grayish-blue': 'hsl(236, 9%, 61%)',
          'very-dark-grayish-blue': 'hsl(235, 19%, 35%)'
        },
        dark: {
          'very-dark-blue': 'hsl(235, 21%, 11%)',
          'very-dark-desaturated-blue': 'hsl(235, 24%, 19%)',
          'light-grayish-blue': 'hsl(234, 39%, 85%)',
          'light-grayish-blue-hover': 'hsl(236, 33%, 92%)',
          'dark-grayish-blue': 'hsl(234, 11%, 52%)',
          'very-dark-grayish-blue': 'hsl(233, 14%, 35%)',
          'very-dark-grayish-blue-hover': 'hsl(237, 14%, 26%)'
        }
      },
      backgroundImage: {
        'desktop-dark': 'url("/bg-desktop-dark.jpg")',
        'desktop-light': 'url("/bg-desktop-light.jpg")',
        'mobile-dark': 'url("/bg-mobile-dark.jpg")',
        'mobile-light': 'url("/bg-mobile-light.jpg")',
        check: 'linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))'
      },
      fontFamily: {
        'josefin-sans': '"Josefin Sans", sans-serif'
      }
    }
  },
  plugins: []
}
