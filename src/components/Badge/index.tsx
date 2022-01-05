import React, { ReactNode } from "react";
import { CSSProperties } from "styled-components";
import { Badge } from "./Badge.styled";

export interface IBadge {
  overlap?: "circular" | "rectangular";
  invisible?: boolean;
  max?: number;
  style?: CSSProperties;
  variant?: "dot" | "standard" | string;
  badgeContent?: ReactNode;
  children?: ReactNode;
  component?: any;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | string;
}

const Index: React.FC<IBadge> = ({ invisible, component }) => {
  return <>{!invisible && <Badge as={component}></Badge>}</>;
};

Index.defaultProps = {
  overlap: "rectangular",
  invisible: false,
  max: 99,
  variant: "standard",
  color: "default",
};

export default Index;
