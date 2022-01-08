import styled, { DefaultTheme } from "styled-components";
import { Avatar } from "../Avatar/Avatar.styled";

export const Badge = styled(Avatar)`
  position: absolute;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  ${(props) => {
    //@ts-ignore
    if (props?.anchorOrigin?.vertical === "bottom") return "bottom: 0;";
    else return "top: 0;";
  }}
  ${(props) => {
    //@ts-ignore
    if (props?.anchorOrigin?.horizontal === "left") return "left: 0;";
    else return "right: 0;";
  }}
  bottom: 0;
  right: 0;
  width: 12px;
  height: 12px;
  z-index: 10;
  background: ${({ theme, color }) => theme.colors[color as string]};
  color: ${({ theme, color }) => theme.textColors[color as string]};
  font-size: 8px;

  &.circular {
    border-radius: 50%;
  }

  &.rectangular {
    border-radius: 2px;
    padding-inline: 10px;
  }
`;
