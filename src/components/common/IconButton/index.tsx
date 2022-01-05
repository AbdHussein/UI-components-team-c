
import { FC, HTMLProps, ReactNode } from "react";
import { StyledIconButton } from "./style";

interface IProps extends HTMLProps<HTMLButtonElement> {
  children: ReactNode;
  component?: any;
}

export const IconButton: FC<IProps> = ({ children, component, ...rest }) => {
  return (
    <StyledIconButton as={component} {...rest}>
      {children}
    </StyledIconButton>
  );
};
