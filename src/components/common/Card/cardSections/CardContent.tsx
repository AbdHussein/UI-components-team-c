import { FC, ReactNode } from "react";
import { CSSProperties } from "styled-components";
import { StyledCardContent } from "../style";

interface IProps {
  children: ReactNode;
  component?: any;
  sx?: CSSProperties;
}

const CardContent: FC<IProps> = ({ children }) => {
  return <StyledCardContent>{children}</StyledCardContent>;
};

export default CardContent;
