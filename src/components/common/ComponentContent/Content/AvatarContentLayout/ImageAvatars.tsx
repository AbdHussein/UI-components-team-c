import React from "react";
import Typography from "../../../../Typography";
import ComponentOverview from "../../../ComponentOverview";
import CodeSnippet from "../../../CodeSnippet";
import { Code } from "../../../CodeSnippet/CodeSnippet.styled";
import { Avatar } from "../../../../Avatar";
import { Avatar1, Avatar2, Avatar3 } from "../../../../../assets/avatars";

const ImageAvatars = () => {
  return (
    <>
      <Typography variant="h4" id="ImageAvatars">
        Image avatars
      </Typography>
      <Typography variant="body1" gutterBottom>
        Image avatars can be created by passing standard <Code>img</Code> props{" "}
        <Code>src</Code> to the component.
      </Typography>
      <ComponentOverview style={{ gap: "5px" }}>
        <Avatar alt="avatar1" src={Avatar1} />
        <Avatar alt="avatar2" src={Avatar2} />
        <Avatar alt="avatar3" src={Avatar3} />
      </ComponentOverview>
      <CodeSnippet
        full_code={`
        import  Avatar  from "./Avatar";
        import {
          Avatar1,
          Avatar2,
          Avatar3,
        } from "./assets/avatars";
        import ReactDOM from react-dom';
        
        const AvatarDemo = () => (
          <ComponentOverview style={{ gap: "5px" }}>
            <Avatar alt="avatar1" src={Avatar1} />
            <Avatar alt="avatar2" src={Avatar2} />
            <Avatar alt="avatar3" src={Avatar3}/>
          </ComponentOverview>
          );
          
          ReactDOM.render(
            <AvatarDemo />,
            document.getElementById("root")
            );
            `}
        simple_code={`
          <ComponentOverview style={{ gap: "5px" }}>
            <Avatar alt="avatar1" src={Avatar1} />
            <Avatar alt="avatar2" src={Avatar2} />
            <Avatar alt="avatar3" src={Avatar3}/>
          </ComponentOverview>
        `}
      />
      <br />
    </>
  );
};

export default ImageAvatars;
