/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        palm: {
          blush: "#ff7aa2",
          coral: "#ff6f61",
          sunset: "#ff9d42",
          aqua: "#17c7c3",
          cream: "#fff6e6",
          sand: "#eed7b8",
          ink: "#1c2930",
        },
      },
      boxShadow: {
        glow: "0 24px 90px rgba(255, 111, 97, 0.28)",
        glass: "0 28px 80px rgba(89, 53, 38, 0.16)",
        aqua: "0 20px 70px rgba(23, 199, 195, 0.24)",
      },
      backgroundImage: {
        "sunset-radial":
          "radial-gradient(circle at 20% 20%, rgba(255, 122, 162, .38), transparent 28%), radial-gradient(circle at 82% 12%, rgba(23, 199, 195, .28), transparent 24%), linear-gradient(135deg, #fff6e6 0%, #ffe2bd 35%, #ffd5c7 62%, #e8fbf8 100%)",
      },
    },
  },
  plugins: [],
};
