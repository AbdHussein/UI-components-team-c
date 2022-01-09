import React, { useState } from "react";
import Button from "../../common/Button/Button";
import Dialog from "../Dialog";
import DailogAction from "../DialogAction/DailogAction";
import DialogContent from "../DialogContent/DialogContent";
import DialogTitle from "../DialogTitle/DialogTitle";

const DialogEx = () => {
  const [display, setDisplay] = useState<boolean>(false);

  return (
    <>
      <Button title="Open Dialog" onClickHandler={() => setDisplay(true)} />
      <Dialog isOpen={display} onClose={() => setDisplay(false)}>
        <DialogTitle>Moda Title</DialogTitle>
        <DialogContent>
          <h2 style={{ marginBottom: "15px" }}>
            You can add Dialog Contetnt as components here.
          </h2>
          <h3 style={{ marginBottom: "15px", color: "pink" }}>
            You can customize components you want via style.
          </h3>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
            vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia
            bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla
          </p>
        </DialogContent>
        <DailogAction>
          <Button
            style={{ border: "none", background: "none", color: "white" }}
            title="DISAGREE"
            onClickHandler={() => setDisplay(false)}
          />
          <Button
            style={{ border: "none", background: "none", color: "white" }}
            title="AGREE"
            onClickHandler={() => setDisplay(false)}
          />
        </DailogAction>
      </Dialog>
    </>
  );
};

export default DialogEx;
