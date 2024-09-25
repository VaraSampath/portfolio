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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-yellow": "#FBC322",
        "yellow-rings": "#FFCB05",
        "primary-orange": "#FA7527",
        "orange-outline": "#FB9F24",
        facebook: "#4867AA",
        linkedin: "#0077B5",
        twitter: "#000000",
        whatsapp: "#24CC63",
        mail: "#B7081B",
        "orange-text": "#FA8726",
        "primary-bg": "#20202A",
      },
      backgroundImage: {
        "body-bg": "url('/assets/body-bg.png')",
        "content-bg": "url('/assets/right-bg-2.png')",
      },
    },
  },
  plugins: [],
};
export default config;
