import palette from "./palette";
const { primary, secondary, accent } = palette;

export default {
  font: "system-ui, sans-serif",
  monospace: "Menlo, monospace",

  colors: {
    text: primary,
    background: secondary,
    link: accent,
    pre: primary,
    preBackground: secondary,
    codeBackground: primary,
    code: secondary
  },
  css: {
    fontSize: "16px",
    textAlign: "center",
    "@media screen and (min-width:56em)": {
      fontSize: "32px"
    },
    "@media screen and (min-width:64em)": {
      fontSize: "48px"
    },
    "@media print": {
      fontSize: "40px"
    },
    "li > p": {
      margin: 0
    }
  },
  pre: {
    textAlign: "left"
  },
  ol: {
    textAlign: "left"
  },
  ul: {
    textAlign: "left"
  }
};
