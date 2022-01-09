import { MainBox, MainDiv, HR } from "../../../common/ContentBox/styles";
import SimpleDialog from "../../../Dialog/DialogUseCases/SimpleDialog";
import FormDialog from "../../../Dialog/DialogUseCases/FormDialog";
import CustomizeDialog from "../../../Dialog/DialogUseCases/CustomizeDialog";
import FullScreenDialog from "../../../Dialog/DialogUseCases/FullScreenDialog";
import OptionalWidth from "../../../Dialog/DialogUseCases/OptionalWidth";
import Footer from "../../Footer";

const DialogContent = () => {
  return (
    <div>
      <MainDiv>
        <h1>Dialog</h1>
        <p>
          Dialogs inform users about a task and can contain critical
          information, require decisions, or involve multiple tasks. A Dialog is
          a type of modal window that appears in front of app content to provide
          critical information or ask for a decision. Dialogs disable all app
          functionality when they appear, and remain on screen until confirmed,
          dismissed, or a required action has been taken. Dialogs are
          purposefully interruptive, so they should be used sparingly.
        </p>
      </MainDiv>

      <MainDiv>
        <h2>Basic dialog</h2>
        <p>
          Simple dialogs can provide additional details or actions about a list
          item. For example, they can display avatars, icons, clarifying
          subtext, or orthogonal actions (such as adding an account).
        </p>
        <MainBox>
          <SimpleDialog />
        </MainBox>
      </MainDiv>
      <HR />

      <MainDiv>
        <h2>Form dialogs</h2>
        <p>
          Form dialogs allow users to fill out form fields within a dialog. For
          example, if your site prompts for potential subscribers to fill in
          their email address, they can fill out the email field and touch
          'Submit'.
        </p>
        <MainBox>
          <FormDialog />
        </MainBox>
      </MainDiv>
      <HR />

      <MainDiv>
        <h2>Customization</h2>
        <p>
          Here is an example of customizing the component. You can learn more
          about this in the overrides documentation page. The dialog has a close
          button added to aid usability.
        </p>
        <MainBox>
          <CustomizeDialog />
        </MainBox>
      </MainDiv>
      <HR />

      <MainDiv>
        <h2>Full-screen dialogs</h2>
        <MainBox>
          <FullScreenDialog />
        </MainBox>
      </MainDiv>
      <HR />

      <MainDiv>
        <h2>Optional sizes</h2>
        <p>
          {" "}
          You can set a dialog maximum width by using the maxWidth enumerable in
          combination with the fullWidth boolean. When the fullWidth prop is
          true, the dialog will adapt based on the maxWidth value.{" "}
        </p>
      </MainDiv>
      <MainBox>
        <OptionalWidth />
      </MainBox>
      <Footer />
    </div>
  );
};

export default DialogContent;
