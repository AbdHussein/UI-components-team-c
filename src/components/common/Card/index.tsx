import { FC, HTMLProps, ReactNode } from "react";
import { CSSProperties } from "styled-components";
import { CardWrapper } from "./style";

interface IProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  component?: any;
  sx?: CSSProperties;
}

const Card: FC<IProps> = ({ children, component, sx, ...rest }) => {
  return (
    <CardWrapper style={sx} as={component} {...rest}>
      {children}
    </CardWrapper>
  );
};

export default Card;

/*
Using Demo
____________________________________________________________________
const [expanded, setExpanded] = useState<boolean>(false); // to open and close collapse

// handle togle open or close collapse and change arrow deg
const handleExpandClick = () => {
  setExpanded(!expanded);
};
____________________________________________________________________
<Card>
  <CardHeader action={"Header"} />
  <CardMedia src="https://mui.com/static/images/cards/paella.jpg" />
  <CardContent>Content</CardContent>
  <CardActions>
    <button
      style={{
        padding: "8px",
        background: "none",
        border: "none",
        color: "#1976d2",
      }}
    >
      Action
    </button>
    <button
      style={{
        padding: "8px",
        background: "none",
        border: "none",
        color: "#1976d2",
      }}
    >
      Action
    </button>
    <IconButton
      style={expanded ? { transform: "rotate(180deg)" } : {}}
      onClick={handleExpandClick}
    >
      <DownArrow />
    </IconButton>
  </CardActions>
  <Collapse isOpen={expanded}>
    <CardContent>
      <h3>Head</h3>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
      recusandae dolore fugiat quaerat sunt assumenda. Pariatur earum
      quos aliquid ipsam! Laborum debitis consequuntur saepe et unde
      aliquid veniam sit recusandae?
    </CardContent>
  </Collapse>
</Card>
____________________________________________________________________
 */
