/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // alternar noche/día con una clase
  theme: {
      extend: {
        colors: {
          fondo: '#121212',
          crema: '#EEDBBF',
          rootbeer: '#270202',
          vividred: '#FA0D18',
          rojo: {
            primario: '#C93631',
            acento: '#8E020A',
            secundario: '#AB3130',
          },
          claro: {
            fondo: '#EEDBBF',
            texto: '#1E1E1E',
            crema: '#fdf5e6',
            rojo: '#d64545',
          },
        },
      },
  },
  plugins: [],
};
