const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{jsx}', './components/**/*.{jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: colors.green,
      secondary: colors.gray
    },
    fontFamily: {
      'mono': ['Inconsolata', 'monospace', 'Menlo', 'Consolas', 'Monaco'],
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-5deg)'
          },
          '50%': {
            transform: 'rotate(5deg)'
          },
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-15px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
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
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'fade-in-down': 'fade-in-down 0.5s ease-out 1',
        'fade-in-right': 'fade-in-right 1s ease-out 1',
        'fade-in-from-right': 'fade-in-from-right 1s ease-in-out 1',
        'fade-in-from-left': 'fade-in-from-left 1s ease-out 1',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}