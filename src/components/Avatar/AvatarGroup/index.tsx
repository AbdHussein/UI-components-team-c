import React, { ReactNode, CSSProperties } from "react";
import Avatar from "../Avatar";
import { Group } from "./AvatarGroup.styled";

interface IAvatarGroup {
  children: ReactNode[];
  max?: number;
  total?: number;
  variant?: "circular" | "rounded" | "square" | string;
  style?: CSSProperties;
  spacing?: "medium" | "small" | number;
}

const Index = ({
  children,
  style,
  variant,
  max = 5,
  total = children.length,
  spacing,
}: IAvatarGroup) => {
  return (
    <Group style={{ ...style }} className={variant} spacing={spacing}>
      {children.slice(0, max - 1).map((child, index) => (
        <Avatar
          key={index}
          className={variant}
          style={{ marginLeft: "-8px" }}
          //@ts-ignore
          {...child?.props}
        />
      ))}
      <Avatar
        variant={variant}
        style={{ marginLeft: "-8px", backgroundColor: "#ccc" }}
      >
        {max && `${"+" + (total - (max - 1))}`}
        {total && !max && `${"+" + (total - children.length)}`}
      </Avatar>
    </Group>
  );
};

Index.defaultProps = {
  max: 5,
  spacing: "medium",
  variant: "circular",
};

export default Index;
