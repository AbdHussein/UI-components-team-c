import React, { ElementType, FC, ReactNode } from "react";
import { CSSProperties } from "styled-components";
import { StyledCardHeader } from "../style";

interface IProps {
  action?: ReactNode;
  avatar?: ReactNode;
  variant?: string;
  component?: ElementType;
  sx?: CSSProperties;
}
const CardHeader: FC<IProps> = ({ action, avatar }) => {
  return (
    <StyledCardHeader>
      <div style={{ marginRight: "16px" }}>{avatar}</div>
      <div>{action}</div>
    </StyledCardHeader>
  );
};

export default CardHeader;
