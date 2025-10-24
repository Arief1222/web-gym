import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EC0606", // Merah
        bg: "#161616", // Background Primary (hitam abu)
        dark: "#0F0F0F", // Background Secondary (hitam gelap)
        text: {
          white: "#FFFFFF", // Text Primary Putih
          grey: "#909090", // Text Tertiary Abu-abu
        },
      },
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

module.exports = config;