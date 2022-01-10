import React from "react";
import Typography from "../../../../Typography";
import ComponentOverview from "../../../ComponentOverview";
import CodeSnippet from "../../../CodeSnippet";
import { Code } from "../../../CodeSnippet/CodeSnippet.styled";
import { Avatar, AvatarGroup } from "../../../../Avatar";
import {
  Avatar1,
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
  Avatar6,
} from "../../../../../assets/avatars";

const Grouped = () => {
  return (
    <>
      <Typography variant="h4" id="Grouped">
        Grouped
      </Typography>
      <Typography variant="body1" gutterBottom>
        <Code>AvatarGroup</Code> renders its children as a stack. Use the{" "}
        <Code>max</Code> prop to limit the number of avatars.
      </Typography>
      <ComponentOverview style={{ gap: "5px" }}>
        <AvatarGroup max={4}>
          <Avatar alt="avatar1" src={Avatar1} />
          <Avatar alt="avatar2" src={Avatar2} />
          <Avatar alt="avatar3" src={Avatar3} />
          <Avatar alt="avatar4" src={Avatar4} />
          <Avatar alt="avatar5" src={Avatar5} />
          <Avatar alt="avatar6" src={Avatar6} />
        </AvatarGroup>
      </ComponentOverview>
      <CodeSnippet
        full_code={`
          import  Avatar  from "./Avatar";

          import {Avatar1, Avatar2, Avatar3,
          Avatar4, Avatar5, Avatar6} 
          from "./assets/avatars";

          import ReactDOM from react-dom';
          
          const AvatarDemo = () => (
            <ComponentOverview style={{ gap: "5px" }}>
              <AvatarGroup max={4}>
                <Avatar alt="avatar1" src={Avatar1} />
                <Avatar alt="avatar2" src={Avatar2} />
                <Avatar alt="avatar3" src={Avatar3} />
                <Avatar alt="avatar4" src={Avatar4} />
                <Avatar alt="avatar5" src={Avatar5} />
                <Avatar alt="avatar6" src={Avatar6} />
              </AvatarGroup>
            </ComponentOverview>
          );
            
          ReactDOM.render(
            <AvatarDemo />,
            document.getElementById("root")
          );
        `}
        simple_code={`
          <ComponentOverview style={{ gap: "5px" }}>
            <AvatarGroup max={4}>
              <Avatar alt="avatar1" src={Avatar1} />
              <Avatar alt="avatar2" src={Avatar2} />
              <Avatar alt="avatar3" src={Avatar3} />
              <Avatar alt="avatar4" src={Avatar4} />
              <Avatar alt="avatar5" src={Avatar5} />
              <Avatar alt="avatar6" src={Avatar6} />
            </AvatarGroup>
          </ComponentOverview>
        `}
      />
      <br />
    </>
  );
};

export default Grouped;
