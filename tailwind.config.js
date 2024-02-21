/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-light-pattern': "url('/images/hero-light-pattern.png')",
        'hero-dark-pattern': "url('/images/hero-dark-pattern.png')",
      },
      colors: {
        light: "#FDF8F8",
        primary: "#B7D2E2",
        dark: "#4D4D4D",
        secondary: "#E3B7B5",
        secondaryDark: "#656565",
      },
      fontSize: {
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '1.25rem',
        '2xl': '100px',
      },
      fontWeight: {
        light: "300",
        regular: "400",
        medium: "500",
        semibold: "600",
      },
      boxShadow: {
        'box-sh5': ' 5px 5px 20px 0px rgba(77, 77, 77, 0.25)',
        'buttonShadow': ' 2px 8px 8px 0px rgba(255, 255, 255, 0.6)'
      }
    },
  },
  plugins: [],
};
