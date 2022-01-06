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
  children?: React.ReactNode;
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
  children,
  badgeContent,
  overlap,
  anchorOrigin,
  color,
}: IBadge) => {
  return (
    <>
      {!invisible && (
        <Badge
          as={component}
          overlap={overlap}
          anchorOrigin={anchorOrigin}
          color={color}
        >
          {React.Children.map(children, (child) =>
            React.cloneElement(
              child as React.ReactElement,
              //@ts-ignore
              { ...child?.props },
              // <BadgeContent>{badgeContent}</BadgeContent>
              badgeContent
            )
          )}
        </Badge>
      )}
    </>
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
