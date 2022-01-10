import Typography from "../../../../Typography";
import OptionalWidth from "../../../../Dialog/DialogUseCases/OptionalWidth";
import ComponentOverview from "../../../ComponentOverview";
import CodeSnippet from "../../../CodeSnippet";

const OptionalSizes = () => {
  return (
    <>
      <Typography variant="h3" id="OptionalSizes">
        Optional Sizes
      </Typography>
      <Typography variant="body1" gutterBottom>
        {" "}
        You can set a dialog maximum width by using the maxWidth enumerable in
        combination with the fullWidth boolean. When the fullWidth prop is true,
        the dialog will adapt based on the maxWidth value.{" "}
      </Typography>
      <ComponentOverview style={{ gap: "5px" }}>
        <OptionalWidth />
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


            const SelectOptions = [
                { key: "false", value: "false" },
                { key: "xs", value: "xs" },
                { key: "sm", value: "sm" },
                { key: "md", value: "md" },
                { key: "lg", value: "lg" },
                { key: "xl", value: "xl" },
              ];

            const DialogExample = () => {
              const [display, setDisplay] = useState<boolean>(false);
              
              return (
                  <>
                  <Button title="Open Dialog" onClickHandler={() => setDisplay(true)} />
                  <Dialog
                        isOpen={display}
                        onClose={() => setDisplay(false)}
                        maxWidth={maxWidth}
                    >
                    <DialogTitle>Optional sizes</DialogTitle>
                    <DialogContent>
                    <h3>You can set my maximum width and whether to adapt or not.</h3>
                    <label style={{ marginRight: "10px" }}>Max Width: </label>
                    <Select value={maxWidth} onChange={(e) => selectChange(e)}>
                        {SelectOptions.map((opt) => (
                        <option key={opt.key} value={opt.value}>
                            {" "}
                            {opt.value}{" "}
                        </option>
                        ))}
                    </Select>
                    </DialogContent>
                    <DailogAction>
                    <Button title="colse" onClickHandler={() => setDisplay(false)} />
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
            maxWidth={maxWidth}
        >
            <DialogTitle>Optional sizes</DialogTitle>
            <DialogContent>
            <h3>You can set my maximum width and whether to adapt or not.</h3>
            <label style={{ marginRight: "10px" }}>Max Width: </label>
            <Select value={maxWidth} onChange={(e) => selectChange(e)}>
                {SelectOptions.map((opt) => (
                <option key={opt.key} value={opt.value}>
                    {" "}
                    {opt.value}{" "}
                </option>
                ))}
            </Select>
            </DialogContent>
            <DailogAction>
            <Button title="colse" onClickHandler={() => setDisplay(false)} />
            </DailogAction>
        </Dialog>
      `}
      />
      <br />
    </>
  );
};

export default OptionalSizes;
