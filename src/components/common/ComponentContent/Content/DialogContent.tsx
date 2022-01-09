import React from "react";
import Footer from "../../Footer";
import TableOfContent from "../../../common/TableOfContent";
import Typography from "../../../Typography";
import ComponentOverview from "../../ComponentOverview";
import DialogEx from "../../../Dialog/DialogExample";

const DialogContent = () => {
  return (
    <>
      <div>
        <Typography variant="h1" id="Dialog">
          Dialog
        </Typography>
        <br />
        <Typography variant="body1" gutterBottom>
          Dialogs inform users about a task and can contain critical
          information, require decisions, or involve multiple tasks.
        </Typography>
        <Typography variant="h2" id="Basic_dialog">
          Basic dialog
        </Typography>
        <br />
        <Typography variant="body1" gutterBottom>
          Simple dialogs can provide additional details or actions about a list
          item. For example, they can display avatars, icons, clarifying
          subtext, or orthogonal actions (such as adding an account). Touch
          mechanics: <br />
          - Choosing an option immediately commits the option and closes the
          menu. <br />- Touching outside of the dialog, or pressing Back,
          cancels the action and closes the dialog
        </Typography>
        <br />
        <ComponentOverview style={{ gap: "5px" }}>
          <DialogEx />
        </ComponentOverview>
        <Footer />
      </div>
      <div style={{ width: "240px" }}>
        <TableOfContent content={[]} />
      </div>
    </>
  );
};

export default DialogContent;
