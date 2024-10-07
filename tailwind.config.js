/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondColor: "#e3083d",
        mbNavBg: "#fff",
        mbNavDarkBg: "#9f9f9f2e",
        darkBg: "#0f172a",
        lightBg: "#fff",
        mbClickColor: "#808080",
      },
      fontFamily: {
        montserrat: ["'Montserrat'", "sans-serif"],
        poppins: ["'Poppins'", "sans-serif"],
      },
      screens: {
        esm: "380px",
        sm: "480px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

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
