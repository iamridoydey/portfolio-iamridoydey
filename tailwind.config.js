/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        secondary: "#fff",
        tertiary: "#e3083d",
        quaternary: "",
        transparentGray: "#9f9f9f2e",
        fadeGray: "#808080",
        darkGray: "#A9A9A9",
        btnGray: "#504d4d"
      },
      fontFamily: {
        montserrat: ["'Montserrat'", "sans-serif"],
        poppins: ["'Poppins'", "sans-serif"],
      },
      screens: {
        esm: "380px",
        sm: "480px",
        // => @media (min-width: 640px) { ... }
        smd: "560px",
        md: "768px",
        // => @media (min-width: 768px) { ... }
        xmd: "850px",

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
