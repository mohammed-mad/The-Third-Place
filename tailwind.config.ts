import type { Config } from "tailwindcss";

/**
 * Design tokens for The Third Place.
 * Layout, palette and type scale follow the Sarena's Keuken reference:
 * beige page, dark-green text, tomato/orange accents, condensed display
 * headlines, handwritten sub-titles and a geometric sans for body copy.
 */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2.5rem" },
      screens: { "2xl": "1440px" },
    },
    extend: {
      colors: {
        beige: {
          DEFAULT: "#FEFCF5",
          dark: "#F7F1E7",
          deeper: "#EBE7DD",
        },
        green: {
          DEFAULT: "#164B1E",
          olive: "#375E3D",
          light: "#B8C7B5",
        },
        tomato: {
          DEFAULT: "#F25742",
          hover: "#E04A36",
        },
        orange: {
          DEFAULT: "#FFBF44",
          light: "#FFCA65",
        },
        ink: "#2E1E00",
        white: "#FFFFFF",
      },
      fontFamily: {
        display: ["Oswald", '"Hesland Sans Rough"', "Impact", "sans-serif"],
        script: ["Caveat", '"Hesland Regular"', "cursive"],
        sans: ["Manrope", "Ambit", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero-display": ["72px", { lineHeight: "72px", fontWeight: "600" }],
        "card-display": ["41.6px", { lineHeight: "41.6px", fontWeight: "600" }],
        script: ["32px", { lineHeight: "36px", fontWeight: "500" }],
        h2: ["32px", { lineHeight: "36px", fontWeight: "700" }],
        h3: ["24px", { lineHeight: "30px", fontWeight: "700" }],
        h4: ["20.8px", { lineHeight: "24px", fontWeight: "700" }],
        intro: ["20px", { lineHeight: "32px" }],
        body: ["18px", { lineHeight: "28.8px" }],
        label: ["12.8px", { lineHeight: "30px", fontWeight: "700", letterSpacing: "0.04em" }],
        tiny: ["11.2px", { lineHeight: "17.92px", letterSpacing: "1px" }],
      },
      borderRadius: {
        pill: "50px",
        card: "16px",
      },
      boxShadow: {
        card: "0 2px 12px rgba(22, 75, 30, 0.08)",
        float: "0 10px 40px rgba(22, 75, 30, 0.12)",
        arrow: "0 4px 14px rgba(0,0,0,0.18)",
      },
      maxWidth: {
        page: "1440px",
        content: "1360px",
      },
      backgroundImage: {
        dots: "radial-gradient(rgba(22,75,30,0.12) 1px, transparent 1.2px)",
        "dots-light": "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1.2px)",
      },
      backgroundSize: {
        dots: "10px 10px",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
