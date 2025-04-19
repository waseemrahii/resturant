// /** @type {import('tailwindcss').Config} */
// import defaultTheme from 'tailwindcss/defaultTheme';

// const colors = {
//   ...defaultTheme.colors,
//   primary: {
//     900: "#267ffd",
//     800: "#418dff",
//     700: "#589bff",
//     600: "#6ea9ff",
//     500: "#83b6ff",
//     400: "#97c2ff",
//     300: "#accfff",
//     200: "#c1dbff",
//     100: "#d5e7ff",
//   },
//   ground: "#f0f0f0", // Add your custom color here
// };

// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     container: {
//       center: true,
//       padding: {
//         DEFAULT: '2rem',
//         sm: '2rem',
//         md: '3rem',
//         lg: '4rem',
//         xl: '5rem',
//         '2xl': '6rem',
//       },
//       spacing: {
//         '18': '4.5rem',  // example custom spacing
//       },
      
//         green: '#28A745',

//       screens: {
//         sm: '100%',
//         md: '100%',
//         lg: '1024px',
//         xl: '1280px',
//         '2xl': '1536px',
//       },
//     },
//     extend: {
//       colors: colors,
        
//       spacing: {
//         '18': '4.5rem',  // example custom spacing
//       },
      
//       scrollbar: {
//         hide: {
//           /* Hide scrollbar for Chrome, Safari and Opera */
//           '&::-webkit-scrollbar': {
//             display: 'none',
//           },
//           /* Hide scrollbar for IE, Edge and Firefox */
//           '-ms-overflow-style': 'none',
//           'scrollbar-width': 'none',
//         },
//       },
//     },
//   },
//   plugins: [
//     // Add the plugin to use the custom utilities
//     function ({ addUtilities }) {
//       addUtilities({
//         '.scrollbar-hide': {
//           /* Hide scrollbar for Chrome, Safari and Opera */
//           '&::-webkit-scrollbar': {
//             display: 'none',
//           },
//           /* Hide scrollbar for IE, Edge and Firefox */
//           '-ms-overflow-style': 'none',
//           'scrollbar-width': 'none',
//         },
//       });
//     },
//   ],
// }



/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme"

const colors = {
  ...defaultTheme.colors,
  primary: {
    900: "#FF6637",
    800: "#FF7A51",
    700: "#FF8E6B",
    600: "#FFA285",
    500: "#FFB69F",
    400: "#FFCAB9",
    300: "#FFDED3",
    200: "#FFF2ED",
    100: "#FFF9F6",
  },
  ground: "#f0f0f0", // Add your custom color here
}

module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        ...colors,
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      spacing: {
        18: "4.5rem", // example custom spacing
      },

      scrollbar: {
        hide: {
          /* Hide scrollbar for Chrome, Safari and Opera */
          "&::-webkit-scrollbar": {
            display: "none",
          },
          /* Hide scrollbar for IE, Edge and Firefox */
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
