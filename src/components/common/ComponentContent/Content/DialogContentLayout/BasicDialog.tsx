import Typography from "../../../../Typography";
import SimpleDialog from "../../../../Dialog/DialogUseCases/SimpleDialog";
import ComponentOverview from "../../../ComponentOverview";
import CodeSnippet from "../../../CodeSnippet";

const BasicDialog = () => {
  return (
    <>
      <Typography variant="h3" id="BasicDialog">
        Basic dialog
      </Typography>
      <Typography variant="body1" gutterBottom>
        Simple dialogs can provide additional details or actions about a list
        item. For example, they can display avatars, icons, clarifying subtext,
        or orthogonal actions (such as adding an account).
      </Typography>
      <ComponentOverview style={{ gap: "5px" }}>
        <SimpleDialog />
      </ComponentOverview>
      <CodeSnippet
        full_code={`
            import  { useState } from "react";
            import Button from "./Button";
            import Dialog from "./Dialog";
            import DailogAction from "./DailogAction";
            import DialogContent from ".DialogContent";
            import DialogTitle from ".DialogTitle";
            import ReactDOM from 'react-dom'

            const DialogExample = () => {
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
            ReactDOM.render(<DialogExample />, document.getElementById("root"));
        `}
        simple_code={`
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
      `}
      />
      <br />
    </>
  );
};

export default BasicDialog;
