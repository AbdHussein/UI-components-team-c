import Typography from "../../../../Typography";

const Introduction = () => {
  return (
    <>
      <Typography variant="h3" id="Introduction">
        Dialog
      </Typography>
      <Typography variant="body1" gutterBottom>
        Dialogs inform users about a task and can contain critical information,
        require decisions, or involve multiple tasks. A Dialog is a type of
        modal window that appears in front of app content to provide critical
        information or ask for a decision. Dialogs disable all app functionality
        when they appear, and remain on screen until confirmed, dismissed, or a
        required action has been taken. Dialogs are purposefully interruptive,
        so they should be used sparingly.
      </Typography>
    </>
  );
};

export default Introduction;
