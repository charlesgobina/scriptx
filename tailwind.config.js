/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        primary: {
          100: '#f0f9ff',
          200: '#cfe7fd',
          300: '#accbfa',
          400: '#7daaf6',
          500: '#4c87f1',
          600: '#256ce4',
          700: '#1652b0',
          800: '#0d3a75',
          900: '#092c5a',
        },
        secondary: {
          100: '#f8f8f8',
          200: '#f1f1f1',
          300: '#e9e9e9',
          400: '#dcdcdc',
          500: '#cccccc',
          600: '#b2b2b2',
          700: '#8c8c8c',
          800: '#5f5f5f',
          900: '#3d3d3d',
        },
        electricblue: {
          100: '007bff'
        }
      },
    },
  },
  plugins: [],
}