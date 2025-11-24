export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          50: "var(--color-orange-50)",
          100: "var(--color-orange-100)",
          200: "var(--color-orange-200)",
          300: "var(--color-orange-300)",
          400: "var(--color-orange-400)",
          500: "var(--color-orange-500)",
          600: "var(--color-orange-600)",
          700: "var(--color-orange-700)",
          800: "var(--color-orange-800)",
          900: "var(--color-orange-900)",
          950: "var(--color-orange-950)",
        },
        green: {
          50: "var(--color-green-50)",
          100: "var(--color-green-100)",
        },
        white: "var(--color-white)",
        black: "var(--color-black)",
        gray: {
          50: "var(--color-gray-50)",
          100: "var(--color-gray-100)",
        },
      },
      screens: {
        xs: "var(--breakpoint-xs)",
      },
    },
  },
  plugins: [],
};
