/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '900px',
      xl: '1200px',
    },
  	extend: {
  		colors: {
        bgLight: "#e5e9ec",
        bgDark: "#080f0f",
        bgNavLight: "#d4c5c7",
        bgNavDark: "#393d3f",
  		},
      keyframes: {
        'slide-up': {
          '0%'  : { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fadeIn': {
          '0%'  : { opacity: '0', transform: 'translateY(150px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fadeOut': {
          '0%'  : { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(150px)' },
        },
      },
      animation: {
        'slide-up': 'slide-up 0.8s ease-out',
        'fadeIn'  : 'fadeIn 1.2s ease-out',
        'fadeOut' : 'fadeOut 1.2s ease-out forwards',
      },
  	}
  },
  plugins: [],
};
