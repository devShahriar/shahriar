const colors = require('tailwindcss/colors');
const fadeInFromLeftAnimation = 'fade-in-from-left 1s ease-in-out 1';
const fadeInFromRightAnimation = 'fade-in-from-right 1s ease-in-out 1';
const slowBounceAnimation = 'slow-bounce 2s ease-in-out infinite';

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}','./components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        ...colors.green,
        500: "#00ff75"
      },
      secondary: {
        ...colors.gray,
        800: colors.gray[900],
        900: "#000"
      }
    },
    fontFamily: {
      'mono': ['Inconsolata', 'monospace', 'Menlo', 'Consolas', 'Monaco'],
    },
    extend: {
      screens: {
        'usm': '450px'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-1.5deg)'
          },
          '50%': {
            transform: 'rotate(1.5deg)'
          },
        },
        'fade-in-from-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100%)'
          },
          '75%': {
            opacity: '.75',
            transform: 'translateX(10%)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        'fade-in-from-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(100%)'
          },
          '75%': {
            opacity: '.75',
            transform: 'translateX(-10%)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-25px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        'slow-bounce': {
          '0%': {
            transform: 'translateY(-2.5px)'
          },
          '50%': {
            transform: 'translateY(2.5px)'
          },
          '100%': {
            transform: 'translateY(-2.5px)'
          }
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'fade-in-from-right': fadeInFromRightAnimation,
        'fade-in-from-left': fadeInFromLeftAnimation,
        'fade-in-right': 'fade-in-right .5s ease-out 1',
        'slow-bounce': slowBounceAnimation,
        'fade-l-bounce': `${fadeInFromRightAnimation}, ${slowBounceAnimation}`,
        'fade-r-bounce': `${fadeInFromLeftAnimation}, ${slowBounceAnimation}`,
      }
    }
  },
  variants: {
    extend: {
      animation: ['hover'],
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}