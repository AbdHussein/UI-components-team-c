import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
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
}
