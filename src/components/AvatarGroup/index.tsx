import { ReactNode, CSSProperties } from "react";
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
  total = 10,
}: IAvatarGroup) => {
  return (
    <Group style={{ ...style }} className={variant}>
      {children.slice(0, max - 1)}
      <Avatar
        variant={variant}
        style={{ marginLeft: "-8px", border: "1px solid #000" }}
      >
        +{total - max}
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
