/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background_primary: '#FFFFFF',
        backgroung_secondary: '#F4F4F4',
        texte_secondary: '#252525',
      },
      fontFamily: {
        ubuntu: ['"Ubuntu Sans"'],
        montserrat: ['Montserrat', 'sans-serif'], // Ajout de la police Montserrat
      },
      fontSize: {
        navbar_base: ['18px', '21.6px'], 
      },
      fontWeight: {
        navbar_bold: 700, 
      },
    },
  },
  plugins: [
   
  ],
}

