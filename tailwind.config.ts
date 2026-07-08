import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0F",
        electric: "#3B5BFF",
        ice: "#7DE8FF",
        paper: "#FAFAFC",
        charcoal: "#16161B",
        mist: "#E8EAF5",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(60% 50% at 50% 40%, rgba(59,91,255,0.35) 0%, rgba(10,10,15,0) 70%)",
        "ice-line":
          "linear-gradient(90deg, rgba(59,91,255,0) 0%, #3B5BFF 50%, rgba(125,232,255,0) 100%)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        glowPulse: "glowPulse 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
