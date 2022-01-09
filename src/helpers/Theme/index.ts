import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  type: "light",
  colors: {
    primary: "#42a5f5",
    secondary: "#ba68c8",
    error: "#ef5350",
    success: "#4caf50",
    warning: "#ff9800",
    info: "#03a9f4",
  },
  textColors: {
    primary: "#000000DE",
    secondary: "#00000099",
    disabled: "#00000061",
  },
  background: {
    paper: "#ffffff",
    default: "#ffffff",
  },
  common: {
    black: "#000000",
    white: "#ffffff",
  },
};

export const darkTheme: DefaultTheme = {
  type: "dark",
  colors: {
    primary: "#42a5f5",
    secondary: "#ab47bc",
    error: "#d32f2f",
    success: "#1b5e20",
    warning: "#f57c00",
    info: "#0288d1",
  },
  textColors: {
    primary: "#e7ebf0",
    secondary: "#b2bac2",
    disabled: "##FFFFFF80",
  },
  background: {
    paper: "#1e1e1e",
    default: "#0a1929",
  },
  common: {
    black: "#000000",
    white: "#ffffff",
  },
};
