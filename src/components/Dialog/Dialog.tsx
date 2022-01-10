import React from "react";
import DialogWrapper from "./DialogWrapper/DialogWrapper";
import { Overlay } from "./Overlay/styles";
import { Container } from "./styles";

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  component?: any;
  fullScreen?: boolean;
  maxWidth?: string;
}

const Dialog = ({
  children,
  component,
  isOpen,
  onClose,
  fullScreen,
  maxWidth,
  ...rest
}: Props) => {
  return (
    <>
      {isOpen && (
        <Container as={component} {...rest}>
          <DialogWrapper fullScreen={fullScreen} maxWidth={maxWidth}>
            {children}
          </DialogWrapper>
          <Overlay onClick={onClose} />
        </Container>
      )}
    </>
  );
};

export default Dialog;
