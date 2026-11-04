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
        // Sampled from the logo: navy wordmark, slate "Local", teal arc and star.
        ink: {
          DEFAULT: "#0c2442",
          2: "#33414f",
          3: "#526072",
          4: "#64748b",
        },
        paper: {
          DEFAULT: "#ffffff",
          2: "#f1f6f8",
          3: "#dbe5ea",
        },
        // DEFAULT is a deeper cut of the logo teal so small text passes contrast on white.
        // "bright" is the logo teal lifted for use on navy backgrounds.
        accent: {
          DEFAULT: "#0f7480",
          light: "#d6eef0",
          dark: "#0b5a63",
          bright: "#4cc4c4",
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
