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
      },
    },
  },
  plugins: [],
};
