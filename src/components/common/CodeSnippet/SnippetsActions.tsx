import React from "react";
import { useTheme } from "styled-components";
import IconButton from "../IconButton";
import CodeIcon from "../IconButton/Icons/CodeIcon";
import { Actions } from "./CodeSnippet.styled";

interface IActions {
  showFullCode: boolean;
  setShowFullCode: (showFullCode: boolean) => void;
}

const SnippetsActions = ({ showFullCode, setShowFullCode }: IActions) => {
  const theme = useTheme();
  return (
    <Actions>
      <IconButton onClick={() => setShowFullCode(!showFullCode)}>
        <CodeIcon fill={theme.colors.info} />
      </IconButton>
    </Actions>
  );
};

export default SnippetsActions;
