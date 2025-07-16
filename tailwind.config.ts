import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(150 60% 25%)", // A deep, rich forest green
          foreground: "hsl(0 0% 98%)", // Near white for text on primary
        },
        secondary: {
          DEFAULT: "hsl(210 20% 95%)", // A very light, cool grey
          foreground: "hsl(220 30% 20%)", // A dark grey for text on secondary
        },
        muted: {
          DEFAULT: "hsl(210 20% 90%)", // A slightly darker light grey
          foreground: "hsl(215 15% 35%)", // A medium grey for muted text
        },
        accent: {
          DEFAULT: "hsl(150 60% 30%)", // A slightly lighter version of primary
          foreground: "hsl(220 30% 10%)", // Dark text for accent
        },
        destructive: {
          DEFAULT: "hsl(0 84.2% 60.2%)", // Red for destructive actions
          foreground: "hsl(210 40% 98%)", // Light text on destructive
        },
        popover: {
          DEFAULT: "hsl(0 0% 100%)", // White popover background
          foreground: "hsl(222.2 47.4% 11.2%)", // Dark text on popover
        },
        card: {
          DEFAULT: "hsl(0 0% 100%)", // White card background
          foreground: "hsl(222.2 47.4% 11.2%)", // Dark text on card
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
