import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      nf1: {
        fundo: '#0B1829',
        fundohead: '#3B758D',
        corpo: '#022326',
        titulo: '#30BFA5',
        detalhe: '#F23D3D',
        destaque: '#13f2f2',
        success: '#4F592C',
        alert: '#BF2642',
        branco:'#F2F2F2',
        dark:'#022326',
        cinza: '#B0B0B0',
        rodape:'#022326',
      },
    },
    fontFamily: {
      body: ['Roboto', 'sans-serif'],
      title: ['Poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: (utilities: any, variants?: any) => void }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke': '2px white',
        },
        '.text-stroke-sm': {
          '-webkit-text-stroke': '1px white',
        },
        '.text-stroke-lg': {
          '-webkit-text-stroke': '3px white',
        },
        '.text-fill-transparent': {
          '-webkit-text-fill-color': 'transparent',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },

  ],
};
export default config;
