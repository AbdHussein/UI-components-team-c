import Typography from "../../../../Typography";
import FormDialogs from "../../../../Dialog/DialogUseCases/FormDialog";
import ComponentOverview from "../../../ComponentOverview";
import CodeSnippet from "../../../CodeSnippet";

const FormDialog = () => {
  return (
    <>
      <Typography variant="h3" id="FormDialog">
        Form Dialog
      </Typography>
      <Typography variant="body1" gutterBottom>
        Form Dialog allow users to fill out form fields within a dialog. For
        example, if your site prompts for potential subscribers to fill in their
        email address, they can fill out the email field and touch 'Submit'.
      </Typography>
      <ComponentOverview style={{ gap: "5px" }}>
        <FormDialogs />
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
            
            ReactDOM.render(<DialogExample />, document.getElementById("root"));
        `}
        simple_code={`
        <Dialog isOpen={display} onClose={() => setDisplay(false)}>
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
      `}
      />
      <br />
    </>
  );
};

export default FormDialog;
