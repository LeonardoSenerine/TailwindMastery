const { keyframes } = require('framer-motion');
const { transform } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: "minmax(18rem, 20rem) 1fr",
        profile: "max-content 1fr min-content",
        form: "minmax(7.5rem, 17.5rem) minmax(25rem,1fr) minmax(0,15rem)",
      },
      borderWidth: {
        6: "6px",
      },
      maxWidth: {
        app: "700px",
      },
      colors: {
        violet: {
          25: "#fcfaff",
        },
      },
      animation:{

slideDownAndFade:'slideDownAndFade 0.4s cubic-bezier(0.16, 1, 0.3, 1) ',
      },
      keyframes: {
        slideDownAndFade:{
          from:{
            opacity: 0,transform: "translateY(-2px)",
          },
          to:{
            opacity: 1,transform: "translateY(0px)",
          }
        },
        slideUpAndFade:{
          from:{
            opacity: 1,
          },
          to:{
            opacity: 0,
          }
        }
        },
    },
  },
  plugins: [],
};
