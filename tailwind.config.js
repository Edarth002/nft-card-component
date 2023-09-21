/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        modblue: "hsl(228, 45%, 44%)",
        Verydarkblue: "hsl(217, 20%, 4%)",
        Verydarkblued: "hsl(216, 50%, 16%)",
        Verydarkbluedd: "hsl(216, 50%, 20%)",
        Verydarkblueline: "hsl(215, 32%, 27%)",
        Softblue: "hsl(215, 51%, 70%)",
        Cyan: "hsl(178, 100%, 50%)",
      },
      minWidth: {
        small: "350px"
      }
    },
    fontFamily: {
      Opensans: ('OpenSans')
    },


  },
  plugins: [],
}

