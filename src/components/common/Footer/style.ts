import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledFooter = styled.footer`
  margin-top: 96px;
`;
export const StyledLine = styled.hr`
  margin: 0px;
  flex-shrink: 0;
  border-width: 0px 0px thin;
  border-style: solid;
  border-color: ${(props) =>
    props.theme.background.default === "#ffffff"
      ? "rgb(231, 235, 240)"
      : "rgb(19, 47, 76)"};
`;
export const StyledFooterContent = styled.div`
  margin: 24px 0px 32px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

export const StyledFooterCenterContent = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: auto;
  color: ${(props) =>
    props.theme.background.default === "#ffffff"
      ? "rgb(62, 80, 96)"
      : "rgb(178, 186, 194)"}; ;
`;
export const StyledFooterLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  background-color: transparent;
  outline: 0px;
  border: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  letter-spacing: 0px;
  font-size: 0.875rem;
  line-height: 1.75;
  min-width: 64px;
  padding: 6px 8px;
  border-radius: 10px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: none;
  text-transform: none;
  font-weight: 500;
  color: rgb(0, 127, 255);
  color: ${(props) => props.theme.colors.primary};
`;
