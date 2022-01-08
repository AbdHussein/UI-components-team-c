import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    type: string;
    colors: {
      [key: string]: string;
      primary: string;
      secondary: string;
      error: string;
      success: string;
      warning: string;
      info: string;
    };
    textColors: {
      [key: string]: string;
      primary: string;
      secondary: string;
      disabled: string;
    };
    background: {
      [key: string]: string;
      paper: string;
      default: string;
    };
    common: {
      [key: string]: string;
      black: string;
      white: string;
    };
  }
}

export interface DefaultTheme {
  type: string;
  colors: {
    primary: string;
    secondary: string;
    error: string;
    success: string;
    warning: string;
    info: string;
  };
  textColors: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  background: {
    paper: string;
    default: string;
  };
  common: {
    black: string;
    white: string;
  };
}
