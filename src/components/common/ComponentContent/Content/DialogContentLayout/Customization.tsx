import Typography from "../../../../Typography";
import CustomizeDialog from "../../../../Dialog/DialogUseCases/CustomizeDialog";
import ComponentOverview from "../../../ComponentOverview";
import CodeSnippet from "../../../CodeSnippet";

const Customization = () => {
  return (
    <>
      <Typography variant="h3" id="Customization">
        Customization
      </Typography>
      <Typography variant="body1" gutterBottom>
        Here is an example of customizing the component. You can learn more
        about this in the overrides documentation page. The dialog has a close
        button added to aid usability.
      </Typography>
      <ComponentOverview style={{ gap: "5px" }}>
        <CustomizeDialog />
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
            ReactDOM.render(<DialogExample />, document.getElementById("root"));
        `}
        simple_code={`
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
      `}
      />
      <br />
    </>
  );
};

export default Customization;
