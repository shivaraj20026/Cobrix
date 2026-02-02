/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f39c12',
        secondary: '#333333',
        dark: '#222222',
        light: '#f9f9f9',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 10px 30px rgba(0, 0, 0, 0.1)',
        'custom-hover': '0 15px 35px rgba(0, 0, 0, 0.2)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 5s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(243, 156, 18, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(243, 156, 18, 0.7)' },
        },
      },
    },
  },
  plugins: [],
}
