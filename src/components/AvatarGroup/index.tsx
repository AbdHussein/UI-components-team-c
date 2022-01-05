import { FC, ReactElement, ReactNode, createElement } from "react";
import { CSSProperties } from "styled-components";
import Avatar, { IAvatar } from "../Avatar";
import { Group } from "./AvatarGroup.styled";

interface IAvatarGroup {
  children: ReactElement[];
  max?: number;
  total?: number;
  variant?: "circular" | "rounded" | "square" | string;
  style?: CSSProperties;
  spacing?: "medium" | "small" | number;
}

const Index: FC<IAvatarGroup> = ({
  children,
  style,
  variant,
  max = 5,
  total = children.length,
}) => {
  const generateAvatars = () =>
    children
      .slice(0, max)
      .map((child: ReactElement<IAvatar>) => (
        <Avatar variant={variant} {...child.props} />
      ))
      .push(<Avatar variant={variant}>+{total - max}</Avatar>);
  return (
    <Group style={{ ...style }} className={variant}>
      {generateAvatars()}
    </Group>
  );
};

Index.defaultProps = {
  max: 5,
  spacing: "medium",
  variant: "circular",
};

export default Index;
