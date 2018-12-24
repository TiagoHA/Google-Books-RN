import Color from "color";

export default {
  white: "#FFF",
  lighter: "#EEE",
  light: "#DDD",
  regular: "#999",
  dark: "#666",
  darker: "#333",
  black: "#000",

  primary: "yellow",
  primaryDark: Color("yellow").darken(0.1),
  secondary: "#6ADC00",
  success: "#9DCA83",
  danger: "#E37A7A",

  transparent: "transparent",
  darkTransparent: "rgba(0, 0, 0, 0.6)",
  whiteTransparent: "rgba(255, 255, 255, 0.3)"
};
