import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0f0e0c",
          2: "#3a3830",
          3: "#6b6860",
          4: "#9e9b94",
        },
        paper: {
          DEFAULT: "#f7f4ee",
          2: "#eeeadf",
          3: "#e5e0d3",
        },
        gold: {
          DEFAULT: "#c8922a",
          light: "#f0d9a8",
          dark: "#8a610f",
        },
        teal: {
          DEFAULT: "#1a6b5a",
        },
      },
      fontFamily: {
        serif: ["var(--font-instrument-serif)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};
export default config;
