import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: String;
      secondary: String;
      error: String;
      success: String;
      warning: String;
      info: String;
    };
    textColors: {
      primary: String;
      secondary: String;
      disabled: String;
    };
    background: {
      paper: String;
      default: String;
    };
    common: {
      black: String;
      white: String;
    };
  }
}
