/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
export default {
  content: ['./src/**/*.{svelte,js,ts,jsx,tsx,html}'],
  theme: {
      container: {
          center: true,
      },
      extend: {

          colors: {
              background: '#fffffe',
              primary: '#ffd803',
              secondary: '#e3f6f5',
              gray: {
                  dark: colors.coolGray['500'],
                  DEFAULT: colors.coolGray['300'],
                  light: colors.coolGray['100'],
                  lightest: colors.coolGray['50'],
              }
          },
          keyframes: {
              wiggle: {
                  '0%, 100%': { transform: 'rotate(-3deg)' },
                  '50%': { transform: 'rotate(3deg)' },
              },
              throb: {
                  '0%, 100%': { transform: 'scale(1.02)' },
                  '50%': { transform: 'scale(0.98)' },
              }
          },
          animation: {
              wiggle: 'wiggle 1s ease-in-out infinite',
              throb: 'throb 0.8s ease-in-out infinite',
          }
      },
      screens: {
          'sm': '375px',
          'md': '768px',
      }
  },
  plugins: [],
}