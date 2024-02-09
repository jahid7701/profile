/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      sm:'640px',
      md:'768px',
      lg:'960px',
      xl:'1200px'
          },
          // colors:{
          //   body:'#e5e5e5',
          //   white:'#fff',
          //   green:{DEFAULT:'#539592',hover:'#40807d'},
          //   black:{DEFAULT:'#273029',hover:'#1b211c'},
          //   gray:'#888888',
          //   outline:'#f1f1f1',
          //   pink:'#ffa5a5',
          //   orange:{
          //     DEFAULT:'#f2994a',
          //     hover:'#da863c'
          //   }
          // },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        'oboto':["Dancing"],
      }
    },
  },
  plugins: [],
};
