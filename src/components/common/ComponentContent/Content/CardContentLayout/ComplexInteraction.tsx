import { useState } from "react";
import Card from "../../../../Card";
import CardActions from "../../../../Card/cardSections/CardActions";
import CardHeader from "../../../../Card/cardSections/CardHeader";
import CardMedia from "../../../../Card/cardSections/CardMedia";
import Collapse from "../../../../Card/cardSections/Collapse";
import IconButton from "../../../IconButton";
import CardContent from "../../../../Card/cardSections/CardContent";
import { DownArrow } from "../../../IconButton/Icons/DownArrow";
import Typography from "../../../../Typography";
import Index from "../../../../Avatar/Avatar/index";
import ComponentOverview from "../../../ComponentOverview";
import CodeSnippet from "../../../CodeSnippet";

const ComplexInteraction = () => {
  const [expanded, setExpanded] = useState<boolean>(false); // to open and close collapse

  // handle togle open or close collapse and change arrow deg
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <Typography variant="h2">Complex Interaction</Typography>
      <Typography variant="body1" gutterBottom>
        On desktop, card content can expand. (Click the downward chevron to view
        the recipe.)
      </Typography>

      <ComponentOverview style={{ gap: "5px" }}>
        <div style={{ width: "400px" }}>
          <Card>
            <CardHeader
              avatar={
                <Index src="https://mui.com/static/images/cards/paella.jpg" />
              }
              action={
                <>
                  <Typography variant="h3">newwwww</Typography>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    animi eos.
                  </p>
                </>
              }
            />
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
        </div>
      </ComponentOverview>
      <CodeSnippet
        full_code={`
        <Card>
          <CardHeader
            avatar={
              <Index src="https://mui.com/static/images/cards/paella.jpg" />
            }
            action={
              <>
                <Typography variant="h3">newwwww</Typography>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. animi
                  eos.
                </p>
              </>
            }
          />
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
        </Card>`}
        simple_code={`
      <Card>
        <CardHeader/>
        <CardMedia src="https://mui.com/static/images/cards/paella.jpg" />
        <CardContent>Content</CardContent>
        <CardActions></CardActions>
        <Collapse isOpen={expanded}>
          <CardContent>
          </CardContent>
        </Collapse>
      </Card>
        `}
      />
    </>
  );
};

export default ComplexInteraction;
