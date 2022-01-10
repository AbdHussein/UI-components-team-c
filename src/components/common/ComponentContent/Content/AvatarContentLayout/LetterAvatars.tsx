import Typography from "../../../../Typography";
import ComponentOverview from "../../../ComponentOverview";
import CodeSnippet from "../../../CodeSnippet";
import { Code } from "../../../CodeSnippet/CodeSnippet.styled";
import { Avatar } from "../../../../Avatar";

const LetterAvatars = () => {
  return (
    <>
      <Typography variant="h4" id="LetterAvatars">
        Letter avatars
      </Typography>
      <Typography variant="body1" gutterBottom>
        Avatars containing simple characters can be created by passing a string
        as <Code>children</Code>.
      </Typography>
      <ComponentOverview style={{ gap: "5px" }}>
        <Avatar style={{ backgroundColor: "violet" }}>A</Avatar>
        <Avatar style={{ backgroundColor: "red" }}>B</Avatar>
        <Avatar style={{ backgroundColor: "blue", color: "#fff" }}>C</Avatar>
      </ComponentOverview>
      <CodeSnippet
        full_code={`
          import  Avatar  from "./Avatar";
          import ReactDOM from react-dom';
          
          const AvatarDemo = () => (
            <ComponentOverview style={{ gap: "5px" }}>
              <Avatar style={{ backgroundColor: "violet" }}>A</Avatar>
              <Avatar style={{ backgroundColor: "red" }}>B</Avatar>
              <Avatar style={{ backgroundColor: "blue", color: "#fff" }}>C</Avatar>
            </ComponentOverview>
          );
            
          ReactDOM.render(
            <AvatarDemo />,
            document.getElementById("root")
          );
        `}
        simple_code={`
          <ComponentOverview style={{ gap: "5px" }}>
            <Avatar style={{ backgroundColor: "violet" }}>A</Avatar>
            <Avatar style={{ backgroundColor: "red" }}>B</Avatar>
            <Avatar style={{ backgroundColor: "blue", color: "#fff" }}>C</Avatar>
          </ComponentOverview>
        `}
      />
      <br />
    </>
  );
};

export default LetterAvatars;
