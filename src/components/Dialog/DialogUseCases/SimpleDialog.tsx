import { useState } from "react";
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
        <DialogTitle>Use Google's location service?</DialogTitle>
        <DialogContent>
          <p>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </p>
        </DialogContent>
        <DailogAction>
          <Button title="DISAGREE" onClickHandler={() => setDisplay(false)} />
          <Button title="AGREE" onClickHandler={() => setDisplay(false)} />
        </DailogAction>
      </Dialog>
    </>
  );
};

export default DialogEx;
