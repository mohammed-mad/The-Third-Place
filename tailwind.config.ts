import type { Config } from "tailwindcss";

/**
 * Design tokens extracted from the reference landing page.
 * Keep colours, type scale, radii and shadows here so components
 * stay consistent and the palette can be tuned in one place.
 */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "3.25rem" },
      screens: { "2xl": "1440px" },
    },
    extend: {
      colors: {
        forest: {
          DEFAULT: "#194B32",
          deep: "#123D29",
          hover: "#14402A",
          soft: "#2C5E43",
        },
        ivory: "#F8F4EB",
        cream: "#F3EEE3",
        parchment: "#EDE6D8",
        ink: {
          DEFAULT: "#24251F",
          muted: "#696A62",
          faint: "#8B8C83",
        },
        clay: "#C97855",
        coral: "#C9524A",
        gold: "#F4AF18",
        line: "#E6DFD1",
      },
      fontFamily: {
        serif: ['"EB Garamond"', "Georgia", '"Times New Roman"', "serif"],
        sans: ['"DM Sans"', "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        eyebrow: ["0.8125rem", { lineHeight: "1rem", letterSpacing: "0.2em", fontWeight: "500" }],
        "display-xl": ["4.5rem", { lineHeight: "1.06", letterSpacing: "0.005em" }],
        "display-lg": ["3.25rem", { lineHeight: "1.08" }],
        "display-md": ["2.75rem", { lineHeight: "1.12" }],
        "display-sm": ["1.5rem", { lineHeight: "1.2" }],
      },
      borderRadius: {
        pill: "9999px",
        card: "14px",
        panel: "18px",
      },
      boxShadow: {
        nav: "0 8px 24px -12px rgba(36, 37, 31, 0.35), 0 1px 0 rgba(255,255,255,0.4) inset",
        card: "0 1px 2px rgba(36,37,31,0.04), 0 10px 24px -18px rgba(36,37,31,0.25)",
        "card-hover": "0 2px 4px rgba(36,37,31,0.05), 0 18px 34px -18px rgba(36,37,31,0.32)",
        panel: "0 24px 60px -24px rgba(36,37,31,0.45)",
      },
      maxWidth: {
        page: "1440px",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
