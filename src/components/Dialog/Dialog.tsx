import React from "react";
import DialogWrapper from "./DialogWrapper/DialogWrapper";
import { Overlay } from "./Overlay/styles";
import { Container } from "./styles";

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  fullScreen?: boolean;
  maxWidth?: string;
}

const Dialog = ({ children, isOpen, onClose, fullScreen, maxWidth }: Props) => {
  return (
    <>
      {isOpen && (
        <Container>
          <DialogWrapper fullScreen={fullScreen} maxWidth={maxWidth}>
            {/* children such as DialogTitle DialogContent DialogActions */}
            {children}
          </DialogWrapper>
          <Overlay onClick={onClose} />
        </Container>
      )}
    </>
  );
};

export default Dialog;
