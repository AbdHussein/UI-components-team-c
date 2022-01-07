import React from "react";
import Typography from "../../Typography";

const CardContent = () => {
  return (
    <>
      <Typography variant="h1">Card</Typography>
      <Typography variant="body1" gutterBottom>
        Cards contain content and actions about a single subject.
      </Typography>
      <Typography variant="h2">Basic card</Typography>
      <Typography variant="body1" gutterBottom>
        Although cards can support multiple actions, UI controls, and an
        overflow menu, use restraint and remember that cards are entry points to
        more complex and detailed information.
      </Typography>
    </>
  );
};

export default CardContent;
