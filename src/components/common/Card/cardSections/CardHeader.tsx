import React, { FC, ReactNode } from "react";
import { CSSProperties } from "styled-components";
import { StyledCardHeader } from "../style";

interface IProps {
  action?: ReactNode;
  avatar?: ReactNode;
  variant?: string;
  component?: any;
  sx?: CSSProperties;
}
export const CardHeader: FC<IProps> = ({ action, avatar }) => {
  return (
    <StyledCardHeader>
      {avatar}
      {action}
    </StyledCardHeader>
  );
};
