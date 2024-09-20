/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gray1: "#E2E2E2",
        blue1: "#6C3BAA",
        blue2: "#3e17ff",
        whitebg: "#F6F6F6",
      },
      animation: {
        fadeInLeft2s: "fadeInLeft 2s ease-in-out",
        fadeInLeft: "fadeInLeft 1s ease-in-out",
        fadeInRight2s: "fadeInRight 1s ease-in-out",
        fadeInRight: "fadeInRight 1s ease-in-out",
      },
      keyframes: {
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        "bottom-only": "0 18px 15px -10px rgba(0, 0, 0, 0.1)",
        "bottom-only-mobile": "0 18px 15px -10px rgba(0, 0, 0, 0.1)",
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
