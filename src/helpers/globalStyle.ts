import { createGlobalStyle, DefaultTheme } from "styled-components";

export const GlobalStyles = createGlobalStyle<DefaultTheme>`

@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;200;300;400;500;600;700&family=Open+Sans:wght@300;400&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: all 0.2s, background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
  scroll-behavior: smooth;
  font-family: "IBM Plex Sans", sans-serif;
  font-family: "Open Sans", sans-serif;
}

body {
  background-color: ${({ theme }) => theme.background.default};
  color: ${({ theme }) => theme.textColors.primary};
}
`;
