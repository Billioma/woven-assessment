module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  content: ["./src/**/*.{html,js,vue}"],
  darkMode: false,
  theme: {
    extend: {
      fontSize: {
        10: "10px",
        11: "11px",
      },
      height: {
        "500px": "500px",
      },
      margin: {
        "20px": "-20px",
        "10px": "-5px",
        "12px": "-12px",
      },
      padding: {
        11: "11px",
        "10px": "10px",
        "30px": "30px",
        "18px": "18px",
      },
      fontFamily: {
        Avenir: ["Avenir"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(241deg, rgba(204, 255, 250, 0.25) -2.96%, rgba(255, 252, 245, 0.25) 44.27%, rgba(255, 229, 233, 0.25) 89.58%), #FFF",
      },
      borderRadius: {
        4: "4px",
      },
      width: {
        fit: "fit-content",
        700: "700px",
      },
      colors: {
        orange: "#EB8B1E",
        red: "#79242F",
        "red-100": "#FFE5E9",
        "red-200": "#C94A5A",
        "red-300": "#A63241",
        "white-100": "#F4F6F8",
        "grey-100": "#D4D6D8",
        "gray-100": "#646668",
        "gray-200": "#A4A6A8",
        "gray-300": "#4E4E4E",
        "gray-400": "#EEF0F1",
        "gray-500": "#848688",
        "gray-600": "#4F4F4F",
        "gray-700": "#F9FAFB",
        "gray-800": "#343434",
        "gray-900": "#E4E6E8",
        "dark-green": "#0D4840",
        "green-100": "#188475",
        "green-200": "#0B3C35",
        "green-300": "#4BDECA",
        "light-green": "#E4F7F5",
      },
      screens: {
        sm: "240px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
