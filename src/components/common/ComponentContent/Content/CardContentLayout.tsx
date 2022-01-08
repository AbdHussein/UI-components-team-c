import { useState } from "react";
import Card from "../../../Card";
import CardActions from "../../../Card/cardSections/CardActions";
import CardHeader from "../../../Card/cardSections/CardHeader";
import CardMedia from "../../../Card/cardSections/CardMedia";
import Collapse from "../../../Card/cardSections/Collapse";
import IconButton from "../../IconButton";
import CardContent from "../../../Card/cardSections/CardContent";
import { DownArrow } from "../../IconButton/Icons/DownArrow";
import Typography from "../../../Typography";
import Index from "../../../Avatar/Avatar/index";
import ComponentOverview from "../../ComponentOverview";
import CodeSnippet from "../../CodeSnippet";
import { Code } from "../../CodeSnippet/CodeSnippet.styled";
import { Button } from "../../../../screens/HomePage/HomePage.styled";
const CardContentLayout = () => {
  const [expanded, setExpanded] = useState<boolean>(false); // to open and close collapse

  // handle togle open or close collapse and change arrow deg
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <Typography variant="h1">Card</Typography>
      <Typography variant="body1" gutterBottom>
        Cards contain content and actions about a single subject.
      </Typography>
      <Typography variant="h2">Basic card</Typography>
      <Typography variant="body1" gutterBottom>
        Although cards can support multiple actions, UI controls, and an
        overflow menu, use restraint and remember that cards are entry points to
        more complex and detailed information.
      </Typography>

      <ComponentOverview style={{ gap: "5px" }}>
        <div style={{ width: "400px" }}>
          <Card>
            <CardContent>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
              error cumque blanditiis dolorem ad aliquid quae repellendus
              doloremque, debitis rerum optio doloribus nesciunt pariatur?
              Maxime fugit numquam iusto veritatis unde?
            </CardContent>
            <CardActions>
              <Button
                style={{
                  padding: "8px",
                  background: "none",
                  border: "none",
                  color: "#1976d2",
                  fontSize: "12px",
                }}
              >
                Leard More
              </Button>
            </CardActions>
          </Card>
        </div>
      </ComponentOverview>
      <CodeSnippet
        full_code={`
      <Card>
        <CardContent>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
          error cumque blanditiis dolorem ad aliquid quae repellendus
          doloremque, debitis rerum optio doloribus nesciunt pariatur?
          Maxime fugit numquam iusto veritatis unde?
        </CardContent>
        <CardActions>
          <Button
            style={{
              padding: "8px",
              background: "none",
              border: "none",
              color: "#1976d2",
              fontSize: "12px",
            }}
          >
            Leard More
          </Button>
        </CardActions>
      </Card>`}
        simple_code={`
      <Card>
        <CardContent></CardContent>
        <CardActions></CardActions>
      </Card>
        `}
      />
      <br />
      <br />

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
    </div>
  );
};

export default CardContentLayout;
