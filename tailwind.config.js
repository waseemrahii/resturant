/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

const colors = {
  ...defaultTheme.colors,
  primary: {
    900: "#267ffd",
    800: "#418dff",
    700: "#589bff",
    600: "#6ea9ff",
    500: "#83b6ff",
    400: "#97c2ff",
    300: "#accfff",
    200: "#c1dbff",
    100: "#d5e7ff",
  },
  ground: "#f0f0f0", // Add your custom color here
};

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      spacing: {
        '18': '4.5rem',  // example custom spacing
      },
      
        green: '#28A745',

      screens: {
        sm: '100%',
        md: '100%',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    extend: {
      colors: colors,
        
      spacing: {
        '18': '4.5rem',  // example custom spacing
      },
      
      scrollbar: {
        hide: {
          /* Hide scrollbar for Chrome, Safari and Opera */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          /* Hide scrollbar for IE, Edge and Firefox */
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      },
    },
  },
  plugins: [
    // Add the plugin to use the custom utilities
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* Hide scrollbar for Chrome, Safari and Opera */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          /* Hide scrollbar for IE, Edge and Firefox */
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      });
    },
  ],
}