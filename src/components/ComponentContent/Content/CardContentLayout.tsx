import { useState } from "react";
import Card from "../../Card";
import CardActions from "../../Card/cardSections/CardActions";
import CardHeader from "../../Card/cardSections/CardHeader";
import CardMedia from "../../Card/cardSections/CardMedia";
import Collapse from "../../Card/cardSections/Collapse";
import IconButton from "../../common/IconButton";
import CardContent from "../../Card/cardSections/CardContent";
import { DownArrow } from "../../common/IconButton/Icons/DownArrow";
import Typography from "../../Typography";
import Index from "../../Avatar/index";
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

      <div>
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
        </Card>
      </div>
    </div>
  );
};

export default CardContentLayout;
