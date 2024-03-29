import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',

        'owc-deep-green-dark': '#3d7757',
        'owc-deep-green': '#4C956C',
        'owc-deep-green-light': '#5cb085',


        'owc-vibrant-leaf-green-dark': '#668138',
        'owc-vibrant-leaf-green': '#88B04B',
        'owc-vibrant-leaf-green-light': '#aade5c',

        'owc-soft-beige-dark': '#daceb2',
        'owc-soft-beige': '#F3E9D2',
        'owc-soft-beige-light': '#efede7',


        'owc-warm-orange-dark': '#cc9851',
        'owc-warm-orange': '#F5B461',
        'owc-warm-orange-light': '#f5b975',

        'owc-soft-coral-dark': '#d27d72',
        'owc-soft-coral': '#E9897E',
        'owc-soft-coral-light': '#fcada1',
      },
    },
  },
  plugins: [],
};

/*
    Deep green (#4C956C) for vegetation and forests.
    Vibrant leaf green (#88B04B) for fresh leaves and grass.
    Soft beige (#F3E9D2) for sandy beaches and trails.
    Warm orange (#F5B461) for sunsets and autumn leaves.
    Soft coral (#E9897E) for flowers and sunrises.
 */


export default config;
