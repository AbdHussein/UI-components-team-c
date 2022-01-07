import React from "react";
import { Badge } from "./Badge.styled";

export interface IOrigin {
  vertical: "bottom" | "top";
  horizontal: "right" | "left";
}

export interface IBadge {
  overlap?: "circular" | "rectangular";
  anchorOrigin?: IOrigin;
  invisible?: boolean;
  max?: number;
  style?: React.CSSProperties;
  variant?: "dot" | "standard" | string;
  badgeContent?: React.ReactNode;
  component?: React.ElementType;
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

const Index = ({
  invisible,
  component,
  badgeContent,
  overlap,
  anchorOrigin,
  color,
  variant,
  style,
  max = 99,
}: IBadge) => {
  return (
    <Badge
      as={component}
      overlap={overlap}
      anchorOrigin={anchorOrigin}
      color={color}
      invisible={invisible}
      variant={variant}
      style={style}
    >
      {(badgeContent as number) > max ? `+${max}` : badgeContent}
    </Badge>
  );
};

Index.defaultProps = {
  overlap: "rectangular",
  invisible: false,
  max: 99,
  variant: "standard",
  color: "default",
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "left",
  },
};

export default Index;
