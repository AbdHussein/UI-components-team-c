import { Avatar, AvatarGroup } from "../../../Avatar";
import Typography from "../../../Typography";
import ComponentOverview from "../../ComponentOverview";
import CodeSnippet from "../../CodeSnippet";
import { Code } from "../../CodeSnippet/CodeSnippet.styled";
import {
  Avatar1,
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
  Avatar6,
} from "../../../../assets/avatars";
import Footer from "../../Footer";

import TableOfContent from "../../../common/TableOfContent";
import AvatarTableOfContent from "../../../common/TableOfContent/Avatar";

const AvatarContent = () => {
  return (
    <>
      <div>
        <Typography variant="h1" id="Avatar">
          Avatar
        </Typography>
        <Typography variant="body1" gutterBottom>
          Avatars are found throughout material design with uses in everything
          from tables to dialog menus.
        </Typography>
        <Typography variant="h2" id="Image_avatars">
          Image avatars
        </Typography>
        <Typography variant="body1" gutterBottom>
          Image avatars can be created by passing standard <Code>img</Code>{" "}
          props
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
        <Typography variant="h2" id="Letter_avatars">
          Letter avatars
        </Typography>
        <Typography variant="body1" gutterBottom>
          Avatars containing simple characters can be created by passing a
          string as <Code>children</Code>.
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

        <Typography variant="h2" id="Sizes">
          Sizes
        </Typography>
        <Typography variant="body1" gutterBottom>
          You can change the size of the avatar with the <Code>height</Code> and{" "}
          <Code>width</Code> CSS properties.
        </Typography>
        <ComponentOverview style={{ gap: "5px" }}>
          <Avatar
            alt="avatar1"
            style={{ width: 24, height: 24 }}
            src={Avatar1}
          />
          <Avatar alt="avatar1" src={Avatar1} />
          <Avatar
            alt="avatar1"
            style={{ width: 56, height: 56 }}
            src={Avatar1}
          />
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

        <Typography variant="h2" id="Variants">
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
        <Typography variant="h2" id="Grouped">
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
        <Footer />
      </div>
      <div style={{ width: "240px" }}>
        <TableOfContent content={AvatarTableOfContent} />
      </div>
    </>
  );
};

export default AvatarContent;
