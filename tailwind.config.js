/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend:{
      screens:{
        breakpoint1: '471px',
        breakpoint2: '1500px'
      }
    },
    colors: {
      white: 'hsl(0,0%,100%)',
      black: 'black',
      primary: {
        blue:'hsl(200, 100%, 62%)',
        softred: {
          200: 'hsl(7, 99%, 92%)',
          700: 'hsl(7, 99%, 70%)'
        },
        yellow: {
          200: 'hsl(51, 100%, 80%)',
          700: 'hsl(51, 100%, 49%)'
        },
        darkblue: 'hsl(198, 62%, 26%)',
        cyan: {
          300: 'hsl(167, 44%, 70%)',
          400: 'hsl(168, 34%, 41%)',
          700: 'hsl(167, 40%, 24%)',
        },
      },
      neutral: {
        blue: {
          900: 'hsl(212, 27%, 19%)',
          700: 'hsl(213, 9%, 39%)',
          300: 'hsl(232, 10%, 55%)',
          100: 'hsl(210, 4%, 67%)',
        },
      },
    },
    fontFamily: {
      barlow: ['Barlow', 'system-ui, sans-serif'],
      fraunces: ['Fraunces', 'system-ui, sans-serif'],
    },
    plugins: [],
  },
}
