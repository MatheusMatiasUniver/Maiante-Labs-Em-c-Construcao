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
        "bg-primary":   "#0F172A",
        "bg-surface":   "#1E293B",
        "bg-elevated":  "#263548",
        "text-primary": "#F8FAFC",
        "text-secondary": "#94A3B8",
        "text-muted":   "#475569",
        accent:         "#3B82F6",
        "accent-bright":"#60A5FA",
        "accent-cyan":  "#06B6D4",
      },
      fontFamily: {
        display: ["var(--font-unbounded)", "sans-serif"],
        mono:    ["var(--font-jetbrains)", "monospace"],
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "draw-line": {
          "0%":   { width: "0%" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0" },
        },
        pulse: {
          "0%, 100%": { opacity: "1",   transform: "scale(1)" },
          "50%":      { opacity: "0.5", transform: "scale(1.4)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.15" },
          "50%":      { opacity: "0.25" },
        },
      },
      animation: {
        "fade-up":    "fade-up 0.7s ease forwards",
        "draw-line":  "draw-line 1s ease forwards",
        blink:        "blink 1.1s step-end infinite",
        "dot-pulse":  "pulse 2s ease-in-out infinite",
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
