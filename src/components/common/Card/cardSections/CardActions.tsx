import { FC, ReactNode } from "react";
import { CSSProperties } from "styled-components";
import { StyledCardActions } from "../style";

interface IProps {
  children: ReactNode;
  sx?: CSSProperties;
}

export const CardActions: FC<IProps> = ({ children }) => {
  return <StyledCardActions>{children}</StyledCardActions>;
};
