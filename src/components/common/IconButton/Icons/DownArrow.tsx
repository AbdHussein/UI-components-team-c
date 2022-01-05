import React, { FC } from "react";
import { StyledIcon } from "./style";

export const DownArrow: FC = () => {
  return (
    <StyledIcon
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="ExpandMoreIcon"
    >
      <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
    </StyledIcon>
  );
};
