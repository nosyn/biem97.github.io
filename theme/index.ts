import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

export const bgColor = { light: "gray.200", dark: "gray.900" };

export const color = { light: "black", dark: "white" };

export const theme = extendTheme({
  colors: {
    black: "#16161D",
  },
  fonts,
  breakpoints,
});
