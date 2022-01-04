import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
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
    colors: {
      primary: String;
      secondary: String;
      error: String;
      success: String;
      warning: String;
      info: String;
    };
  }
}
