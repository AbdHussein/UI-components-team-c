import React, { ElementType, FC, ReactNode } from "react";
import { CSSProperties } from "styled-components";
import { StyledCollapse } from "../style";

interface IProps {
  children: ReactNode;
  variant?: string;
  component?: ElementType;
  sx?: CSSProperties;
  collapsedSize?: string | number;
  orientation?: orientation;
  isOpen: boolean;
}

enum orientation {
  horizontal = "horizontal",
  vertical = "vertical",
}

const Collapse: FC<IProps> = ({ children, isOpen }) => {
  return <StyledCollapse isOpen={isOpen}>{children}</StyledCollapse>;
};

export default Collapse;
