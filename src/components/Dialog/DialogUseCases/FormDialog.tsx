import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../common/Button/Button";
import Dialog from "../Dialog";
import DailogAction from "../DialogAction/DailogAction";
import DialogContent from "../DialogContent/DialogContent";
import DialogTitle from "../DialogTitle/DialogTitle";



const Input= styled.input`
margin: 10px 0;
  width: 100%;
  height: 40px;
  border: none;
  background: none;
  border-bottom: 1px solid gray;
  font-size: 18px;

  &::placeholder{
    color: white;
  }
`
const DialogEx = () => {
  const [display, setDisplay] = useState<boolean>(false);

  return (
    <>
      <Button title="Open Dialog" onClickHandler={() => setDisplay(true)} />
      <Dialog
        isOpen={display}
        onClose={() => setDisplay(false)}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <p>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </p>
        <form>
          <Input placeholder="Email Address" />
        </form>
        </DialogContent>
        <DailogAction>
          <Button title="submit" onClickHandler={() => setDisplay(false)} />
        </DailogAction>
      </Dialog>
    </>
  );
};

export default DialogEx;
