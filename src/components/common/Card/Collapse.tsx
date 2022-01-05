import React, { FC, ReactNode } from "react";
import { CSSProperties } from "styled-components";
import { StyledCollapse } from "./style";

interface IProps {
  children: ReactNode;
  variant?: string;
  component?: any;
  sx?: CSSProperties;
  collapsedSize?: string | number;
  orientation?: orientation;
  isOpen: boolean;
}

enum orientation {
  horizontal = "horizontal",
  vertical = "vertical",
}

export const Collapse: FC<IProps> = ({ children, isOpen }) => {
  return <StyledCollapse isOpen={isOpen}>{children}</StyledCollapse>;
};
