<<<<<<< HEAD
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
=======
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
>>>>>>> development
  ],
  theme: {
    extend: {
      backgroundImage: {
<<<<<<< HEAD
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
=======
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
<<<<<<< HEAD
>>>>>>> development
=======

>>>>>>> Card
      },
      colors:{
        customRed:{
          DEFAULT:'#FC5B3F',
          light:'#f3816d'
        } ,
        customGrey: '#8C897D',
        customBlue: '#1A4F63',
        customGreen: '#6FB07F'
      },
      borderColor:{
        customRed: '#FC5B3F'
      },
      
    },
  },
  plugins: [],
<<<<<<< HEAD
};
export default config;
=======
}
<<<<<<< HEAD
export default config
>>>>>>> development
=======
export default config
>>>>>>> Card
