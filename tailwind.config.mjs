/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        purple: {
          main: '#3b065e',
        },
        blue: {
          bluee: '#00CCFF',
          b1dark:'#1C82B1',
        }
      },
      fontFamily: {
        osans: ["var(--font-opensans)"],
        custom: ['CustomFont','Infomin'],
      },
      textShadow: {
        default: '2px 0px #d9a1ff, 0px 2px #d9a1ff, -2px 0px #d9a1ff, 0px -2px #d9a1ff',
      },
      clipPath: {
        star: 'polygon(50% 0%, 100% 100%, 0% 100%)',
      },
      animation: {
        space: 'space-animation 1s linear infinite',
      },
      keyframes: {
        'space-animation': {
          '0%': { transform: 'rotate(-30deg) translateY(calc(-52% * var(--i)))' },
          '100%': { transform: 'rotate(-30deg) translateY(calc(52% * var(--i)))' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('tailwind-clip-path'),
  ],
};
