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
          DEFAULT: '#3B82F6', // azul tailwind por defecto
          dark: '#2563EB',
          light: '#93C5FD'
        },
        secondary: {
          DEFAULT: '#10B981', // esmeralda tailwind
          dark: '#059669',
          light: '#6EE7B7'
        }
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'], // Si usas Inter font
      },
      spacing: {
        '128': '32rem', // espacios adicionales
        '144': '36rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // plugin para estilos de formularios
    require('@tailwindcss/typography'), // plugin para tipografía
  ],
}