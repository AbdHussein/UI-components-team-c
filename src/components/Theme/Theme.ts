import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
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
    paper: "#fff",
    default: "#fff",
  },
  common: {
    black: "#000",
    white: "#fff",
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    primary: "#42a5f5",
    secondary: "#ab47bc",
    error: "#d32f2f",
    success: "#1b5e20",
    warning: "#f57c00",
    info: "#0288d1",
  },
  textColors: {
    primary: "#fff",
    secondary: "##FFFFFFB3",
    disabled: "##FFFFFF80",
  },
  background: {
    paper: "#121212",
    default: "#121212",
  },
  common: {
    black: "#000",
    white: "#fff",
  },
};
