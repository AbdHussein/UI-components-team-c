import Typography from "../../../../Typography";
import ComponentOverview from "../../../ComponentOverview";
import CodeSnippet from "../../../CodeSnippet";
import { Code } from "../../../CodeSnippet/CodeSnippet.styled";
import { Avatar } from "../../../../Avatar";
import { Avatar1 } from "../../../../../assets/avatars";

const Sizes = () => {
  return (
    <>
      <Typography variant="h4" id="Sizes">
        Sizes
      </Typography>
      <Typography variant="body1" gutterBottom>
        You can change the size of the avatar with the <Code>height</Code> and{" "}
        <Code>width</Code> CSS properties.
      </Typography>
      <ComponentOverview style={{ gap: "5px" }}>
        <Avatar alt="avatar1" style={{ width: 24, height: 24 }} src={Avatar1} />
        <Avatar alt="avatar1" src={Avatar1} />
        <Avatar alt="avatar1" style={{ width: 56, height: 56 }} src={Avatar1} />
      </ComponentOverview>
      <CodeSnippet
        full_code={`
          import  Avatar  from "./Avatar";
          import {Avatar1} from "./assets/avatars";
          import ReactDOM from react-dom';
          
          const AvatarDemo = () => (
            <ComponentOverview style={{ gap: "5px" }}>

            <Avatar alt="avatar1" 
              style={{ width: 24, height: 24 }} 
              src={Avatar1} />

            <Avatar alt="avatar1" src={Avatar1} />

            <Avatar alt="avatar1" 
              style={{ width: 56, height: 56 }} 
              src={Avatar1} />

            </ComponentOverview>
          );
            
          ReactDOM.render(
            <AvatarDemo />,
            document.getElementById("root")
          );
        `}
        simple_code={`
          <ComponentOverview style={{ gap: "5px" }}>
          <Avatar alt="avatar1" style={{ width: 24, height: 24 }} src={Avatar1} />
          <Avatar alt="avatar1" src={Avatar1} />
          <Avatar alt="avatar1" style={{ width: 56, height: 56 }} src={Avatar1} />
          </ComponentOverview>
        `}
      />

      <br />
    </>
  );
};

export default Sizes;
