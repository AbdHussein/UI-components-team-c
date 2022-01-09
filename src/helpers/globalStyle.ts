import { createGlobalStyle, DefaultTheme } from "styled-components";

export const GlobalStyles = createGlobalStyle<DefaultTheme>`
  body {
    background-color: ${({ theme }) => theme.background.default};
    color: ${({ theme }) => theme.textColors.primary};
  }

`;
