import React, { ReactNode, CSSProperties } from "react";
import Avatar from "../Avatar";
import { RestAvatar } from "../Avatar/Avatar.styled";
import { Group } from "./AvatarGroup.styled";

interface IAvatarGroup {
  children: ReactNode[];
  max?: number;
  total?: number;
  variant?: "circular" | "rounded" | "square" | string;
  style?: CSSProperties;
  spacing?: "medium" | "small" | number;
}

// TODO: Refactor to a pure component.
// TODO: Refactor the inline style.

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
          //@ts-ignore
          {...child?.props}
        />
      ))}
      <RestAvatar variant={variant}>
        {max && `${"+" + (total - (max - 1))}`}
        {total && !max && `${"+" + (total - children.length)}`}
      </RestAvatar>
    </Group>
  );
};

Index.defaultProps = {
  max: 5,
  spacing: "medium",
  variant: "circular",
};

export default Index;
