import { createGlobalStyle } from "styled-components";
import { DefaultTheme } from "./Theme/styled";

export const GlobalStyles = createGlobalStyle<DefaultTheme>`
  body {
    background-color: ${({ theme }) => theme.background.default};
    color: ${({ theme }) => theme.textColors.primary};
  }

`;
