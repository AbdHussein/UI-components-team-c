import { ElementType, FC, HTMLProps, ReactNode } from "react";
import { CSSProperties } from "styled-components";
import { CardWrapper } from "./style";

interface IProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  component?: ElementType;
  sx?: CSSProperties;
}

const Card: FC<IProps> = ({ children, component, sx, ...rest }) => {
  return (
    <CardWrapper style={sx} as={component} {...rest}>
      {children}
    </CardWrapper>
  );
};

export default Card;
