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
  -webkit-transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  transform: rotate(0deg);
  margin-left: auto;
  -webkit-transition: -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;
