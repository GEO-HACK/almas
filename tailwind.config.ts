import type { Config } from "tailwindcss";

// Al-Mas Advisory palette: deep royal blue and icy sapphire teal (the diamond),
// paired with white and cool metallic silver. White dominates, deep navy carries
// headings and dark bands, royal blue is for emphasis and calls to action.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#1D3FAF", // royal blue
          hover: "#16318A",
        },
        sapphire: "#3FB4C6", // icy sapphire teal
        silver: "#C3CAD4", // metallic silver
        ink: "#0A1230", // deep navy, used for text and dark bands
        paper: "#FFFFFF",
        surface: "#F3F5F8",
        muted: "#5B6474",
        line: "#DDE2E9",
        danger: "#B42318", // form errors only
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(10, 18, 48, 0.04), 0 10px 30px rgba(10, 18, 48, 0.07)",
        lift: "0 2px 4px rgba(10, 18, 48, 0.06), 0 24px 48px rgba(10, 18, 48, 0.14)",
      },
      maxWidth: {
        site: "72rem",
      },
    },
  },
};

export default config;
