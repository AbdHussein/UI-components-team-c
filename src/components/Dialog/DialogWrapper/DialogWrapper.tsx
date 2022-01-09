import React from "react";
import { Wrapper } from "./styles";

interface Props extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  component?: any;
  fullScreen?: boolean;
  maxWidth?: string; // By % unit
}

const DialogWrapper: React.FC<Props> = ({ children, component, fullScreen, maxWidth, ...rest }) => {
  return (
    <Wrapper as={component} fullScreen={fullScreen} maxWidth={maxWidth} {...rest}>
      {children}
    </Wrapper>
  );
};

export default DialogWrapper;
