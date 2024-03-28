/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Robotic : ["Smooch Sans", 'sans-serif'],
        Zuhayer : ["Jost", "sans-serif"],
        Poppins : ["Poppins", "sans-serif"]
      },
      backgroundImage: {
        'hero': "url('../Untitled design (1).png')",
        'abstract' : "url('../ab.png')",
        'abstracted' : "url('../ab2.png')",
        'about' : "url(../wtf.png)"
      }
    },
  },
  plugins: [],
}
