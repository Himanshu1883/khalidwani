/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'serif'],
        dm: ['"DM Sans"', 'sans-serif'],
      },

      colors: {
        primary: {
          DEFAULT: '#B0E4CC',
          light: '#C8F1DE',
          dim: 'rgba(176, 228, 204, 0.14)',
        },

        ink: {
          DEFAULT: '#080808',
          mid: '#111111',
          soft: '#1C1C1C',
        },

        cream: {
          DEFAULT: '#F4EFE5',
          dim: '#EDE8DC',
        },

        muted: {
          DEFAULT: '#727268',
          light: '#9A9A90',
        },
      },

      animation: {
        'fade-up': 'fadeUp 0.9s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        marquee: 'marquee 32s linear infinite',
        slideBar: 'slideBar 2s 2s infinite',
      },

      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        slideBar: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
      },
    },
  },
  plugins: [],
}