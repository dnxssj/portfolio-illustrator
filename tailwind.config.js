/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // ⬅️ esto permite alternar noche/día con una clase
  theme: {
    extend: {
      colors: {
        fondo: '#121212', // fondo noche
        crema: '#EEDBBF',

        rojo: {
          primario: '#C93631',   // Persian Red
          acento: '#8E020A',     // Sangria
          secundario: '#AB3130', // Scarlet
        },

        // Colores para modo día (puedes ajustar a tu gusto)
        claro: {
          fondo: '#EEDBBF',         // fondo claro general
          texto: '#1E1E1E',         // texto principal
          crema: '#fdf5e6',         // una crema más clara si lo deseas
          rojo: '#d64545',          // rojo para acento claro si quieres
        },
      },
    },
  },
  plugins: [],
};
