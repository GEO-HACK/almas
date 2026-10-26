import type { Config } from "tailwindcss";

// Al-Mas Advisory palette: red, white and black, plus neutral grays.
// White dominates, black carries headings and dark bands, red is for
// emphasis and calls to action only.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#E4002B",
          hover: "#C10024",
        },
        ink: "#0E0E0E",
        paper: "#FFFFFF",
        surface: "#F5F5F5",
        muted: "#6B6B6B",
        line: "#E3E3E3",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(14, 14, 14, 0.04), 0 10px 30px rgba(14, 14, 14, 0.06)",
        lift: "0 2px 4px rgba(14, 14, 14, 0.06), 0 24px 48px rgba(14, 14, 14, 0.12)",
      },
      maxWidth: {
        site: "72rem",
      },
    },
  },
};

export default config;
