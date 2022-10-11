/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    backgroundColor: {
      primary: "var(--primary-background-color)",
      sidebar: "var(--sideBar-background-color)",
      linearOne: "var(--card-linear-bg-one)",
      linearTwo: "var(--card-linear-bg-two)",
    },
    colors: {
      textBlack: "var(--text-color-black-one)",
      grayOne: "var(--gray-color-one)",
      grayTwo: "var(--gray-color-two)",
      accentPrimary: "var(--primary-accent-color)",
      accentSecondary: "var(--secondary-accent-color)",
      cardBox: "var(--card-box-color)",
      boxIcon: "var(--box-icon-color)",
      mainBoxIcon: "var(--main-box-icon-color)",
      inputGray: "var(--input-chart-gray-color)",
      inputIcon: "var(--input-icon-color)",
      cardDate: "var(--card-date-color)",
      secondaryGreen: "var(--secondary-green-color)",
      successColor: "var(--green-success-color)",
      errorColor: "var(--red-error-color)",
    },
    screens: {
      xl: { max: "1300px" },
      lg: { max: "1200px" },
      md: { max: "880px" },
      sm: { max: "600px" },
    },
  },
  plugins: [],
};
