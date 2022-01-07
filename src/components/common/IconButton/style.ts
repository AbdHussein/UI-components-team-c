import styled from "styled-components";

export const StyledIconButton = styled.button<{}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  background-color: transparent;
  outline: 0;
  border: 0;
  margin: 0;
  border-radius: 0;
  padding: 0;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  text-decoration: none;
  color: inherit;
  text-align: center;
  flex: 0 0 auto;
  font-size: 1.5rem;
  padding: 8px;
  border-radius: 50%;
  color: rgba(0, 0, 0, 0.54);
  color: ${(props) => props.theme.textColors.primary};
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transform: rotate(0deg);
  margin-left: auto;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover {
    /* background-color: rgba(255, 255, 255, 0.08); */
    background-color: ${(props) =>
      props.theme.background.default === "#0a1929"
        ? "rgba(255, 255, 255, 0.08)"
        : "rgba(0, 0, 0, 0.4)"};
  }
`;
