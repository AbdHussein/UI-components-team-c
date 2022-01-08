import React from "react";
import { Actions } from "./styles";

const DailogAction = ({ children }: { children: React.ReactNode }) => {
  return <Actions>{children}</Actions>;
};

export default DailogAction;
