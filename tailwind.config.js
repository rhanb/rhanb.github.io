module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  target: "relaxed",
  prefix: "",
  important: false,
  separator: ":",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    /* boxShadow: {
      default: "var(--box-shadow)",
    }, */
    boxShadow: {
      xs: "0 0 0 1px var(--box-shadow-dark)",
      sm: "0 1px 2px 0 var(--box-shadow-dark)",
      pressed:
        "inset 0px 2px 6px var(--box-shadow-light-pressed), inset -6px -3px 6px var(--box-shadow-dark-pressed)",
      default:
        "-3.88889px -3.88889px 10px var(--box-shadow-light), 3.88889px 3.88889px 10px var(--box-shadow-dark)",
      md:
        "0 4px 6px -1px var(--box-shadow-dark), 0 2px 4px -1px var(--box-shadow-light)",
      lg:
        "0 10px 15px -3px var(--box-shadow-dark), 0 4px 6px -2px var(--box-shadow-light)",
      xl:
        "0 20px 25px -5px var(--box-shadow-dark), 0 10px 10px -5px var(--box-shadow-light)",
      "2xl": "0 25px 50px -12px var(--box-shadow-secondary)",
      inner: "inset 0 2px 4px 0 var(--box-shadow-dark)",
      outline: "0 0 0 3px var(--box-shadow-dark)",
      none: "none",
    },
    colors: {
      background: {
        primary: "var(--bg-background-primary)",
        secondary: "var(--bg-background-secondary)",
        ternary: "var(--bg-background-primary)",
      },
      font: {
        primary: "var(--font-primary)",
        secondary: "var(--font-secondary)"
      },
      transparent: "transparent",
      current: "currentColor",
    },
  },
};
