import Typography from "../../../../Typography";
import FullScreenDialog from "../../../../Dialog/DialogUseCases/FullScreenDialog";
import ComponentOverview from "../../../ComponentOverview";
import CodeSnippet from "../../../CodeSnippet";

const FullScreenDialogs = () => {
  return (
    <>
      <Typography variant="h3" id="FullScreenDialog">
        Full-screen dialogs
      </Typography>
      <br />
      <ComponentOverview style={{ gap: "5px" }}>
        <FullScreenDialog />
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
                  <Dialog
                    isOpen={display}
                    onClose={() => setDisplay(false)}
                    fullScreen={true}
                    >
                    <DialogTitle>Full screen Mode</DialogTitle>
                    <DialogContent>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, corporis. Quod aut ullam, 
                            doloremque at officiis optio ab! Sapiente et velit distinctio nobis ut quisquam dolore dignissimos rerum exercitationem obcaecati.
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
        <Dialog
          isOpen={display}
          onClose={() => setDisplay(false)}
          fullScreen={true}
        >
          <DialogTitle>Full screen Mode</DialogTitle>
          <DialogContent>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, corporis. Quod aut ullam, 
                doloremque at officiis optio ab! Sapiente et velit distinctio nobis ut quisquam dolore dignissimos rerum exercitationem obcaecati.
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

export default FullScreenDialogs;
