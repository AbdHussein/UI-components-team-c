import React from "react";
import Typography from "../../../../Typography";
import ComponentOverview from "../../../ComponentOverview";
import CodeSnippet from "../../../CodeSnippet";
import { Code } from "../../../CodeSnippet/CodeSnippet.styled";
import { Avatar } from "../../../../Avatar";
import { Avatar1, Avatar2, Avatar3 } from "../../../../../assets/avatars";

const Variants = () => {
  return (
    <>
      <Typography variant="h4" id="Variants">
        Variants
      </Typography>
      <Typography variant="body1" gutterBottom>
        If you need square or rounded avatars, use the <Code>variant</Code>{" "}
        prop.
      </Typography>
      <ComponentOverview style={{ gap: "5px" }}>
        <Avatar alt="avatar1" src={Avatar1} variant="circular" />
        <Avatar alt="avatar2" src={Avatar2} variant="rounded" />
        <Avatar alt="avatar3" src={Avatar3} variant="square" />
      </ComponentOverview>
      <CodeSnippet
        full_code={`
          import  Avatar  from "./Avatar";

          import {Avatar1, Avatar2, Avatar3} 
          from "./assets/avatars";

          import ReactDOM from react-dom';
          
          const AvatarDemo = () => (
            <ComponentOverview style={{ gap: "5px" }}>
              <Avatar alt="avatar1" src={Avatar1} variant="circular" />
              <Avatar alt="avatar2" src={Avatar2} variant="rounded" />
              <Avatar alt="avatar3" src={Avatar3} variant="square" />
            </ComponentOverview>
          );
            
          ReactDOM.render(
            <AvatarDemo />,
            document.getElementById("root")
          );
        `}
        simple_code={`
          <ComponentOverview style={{ gap: "5px" }}>
            <Avatar alt="avatar1" src={Avatar1} variant="circular" />
            <Avatar alt="avatar2" src={Avatar2} variant="rounded" />
            <Avatar alt="avatar3" src={Avatar3} variant="square" />
          </ComponentOverview>
        `}
      />
      <br />
    </>
  );
};

export default Variants;
