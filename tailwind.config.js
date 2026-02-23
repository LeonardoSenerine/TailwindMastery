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
        error: {
          25: "#FFFBFA",
          50: "#FEF3F2",
          100: "#FEE4E2",
          200: "#FECDCA",
          300: "#FDA29B",
          400: "#F97066",
          500: "#F04438",
          600: "#D92D20",
          700: "#B42318",
        },
        animation: {
          slideDownAndFade:
            "slideDownAndFade 0.4s cubic-bezier(0.16, 1, 0.3, 1) ",
        },
        keyframes: {
          slideDownAndFade: {
            from: {
              opacity: 0,
              transform: "translateY(-2px)",
            },
            to: {
              opacity: 1,
              transform: "translateY(0px)",
            },
          },
          slideUpAndFade: {
            from: {
              opacity: 1,
            },
            to: {
              opacity: 0,
            },
          },
        },
      },
    },
    plugins: [],
  },
};
