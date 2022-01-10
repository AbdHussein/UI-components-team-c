import CardContent from "../../../../Card/cardSections/CardContent";
import ComponentOverview from "../../../ComponentOverview";
import CodeSnippet from "../../../CodeSnippet";
import Card from "../../../../Card";
import CardActions from "../../../../Card/cardSections/CardActions";
import CardHeader from "../../../../Card/cardSections/CardHeader";
import CardMedia from "../../../../Card/cardSections/CardMedia";
import Collapse from "../../../../Card/cardSections/Collapse";
import IconButton from "../../../IconButton";
import Typography from "../../../../Typography";
import { DownArrow } from "../../../IconButton/Icons/DownArrow";
import { Avatar } from "../../../../Avatar";
import LoveHeart from "../../../IconButton/Icons/LoveHeart";
import ShareIcon from "../../../IconButton/Icons/ShareIcon";
import { useState } from "react";

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
              avatar={<Avatar style={{ backgroundColor: "red" }}>M</Avatar>}
              action={
                <>
                  <Typography variant="body1">
                    Shrimp and Chorizo Paella
                  </Typography>
                  <Typography variant="body1">September 14, 2016</Typography>
                </>
              }
            />
            <CardMedia src="https://mui.com/static/images/cards/paella.jpg" />
            <CardContent>
              <Typography variant="body2">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions>
              <div>
                <IconButton>
                  <LoveHeart />
                </IconButton>
                <IconButton>
                  <ShareIcon />
                </IconButton>
              </div>

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
                <Typography variant="body1">
                  Method: Heat 1/2 cup of the broth in a pot until simmering,
                  add saffron and set aside for 10 minutes.
                </Typography>
                <br />
                <Typography variant="body1">
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep
                  skillet over medium-high heat. Add chicken, shrimp and
                  chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes. Transfer shrimp to a large plate and
                  set aside, leaving chicken and chorizo in the pan. Add
                  pimentón, bay leaves, garlic, tomatoes, onion, salt and
                  pepper, and cook, stirring often until thickened and fragrant,
                  about 10 minutes. Add saffron broth and remaining 4 1/2 cups
                  chicken broth; bring to a boil.
                </Typography>
                <br />
                <Typography variant="body1">
                  Add rice and stir very gently to distribute. Top with
                  artichokes and peppers, and cook without stirring, until most
                  of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                  medium-low, add reserved shrimp and mussels, tucking them down
                  into the rice, and cook again without stirring, until mussels
                  have opened and rice is just tender, 5 to 7 minutes more.
                  (Discard any mussels that don’t open.)
                </Typography>
                <br />
                <Typography variant="body1">
                  Set aside off of the heat to let rest for 10 minutes, and then
                  serve.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      </ComponentOverview>
      <CodeSnippet
        full_code={`
      import Card from "../../../../Card";
      import CardActions from "../../../../Card/cardSections/CardActions";
      import CardHeader from "../../../../Card/cardSections/CardHeader";
      import CardMedia from "../../../../Card/cardSections/CardMedia";
      import Collapse from "../../../../Card/cardSections/Collapse";
      import IconButton from "../../../IconButton";
      import Typography from "../../../../Typography";
      import { DownArrow } from "../../../IconButton/Icons/DownArrow";
      import { Avatar } from "../../../../Avatar";
      import LoveHeart from "../../../IconButton/Icons/LoveHeart";
      import ShareIcon from "../../../IconButton/Icons/ShareIcon";
      import { useState } from "react";



      
      <Card>
        <CardHeader
          avatar={<Avatar style={{ backgroundColor: "red" }}>M</Avatar>}
          action={
            <>
              <Typography variant="body1">
                Shrimp and Chorizo Paella
              </Typography>
              <Typography variant="body1">September 14, 2016</Typography>
            </>
          }
        />
        <CardMedia src="https://mui.com/static/images/cards/paella.jpg" />
        <CardContent>
          <Typography variant="body2">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along
            with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions>
          <div>
            <IconButton>
              <LoveHeart />
            </IconButton>
            <IconButton>
              <ShareIcon />
            </IconButton>
          </div>

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
            <Typography variant="body1">
              Method: Heat 1/2 cup of the broth in a pot until simmering,
              add saffron and set aside for 10 minutes.
            </Typography>
            <br />
            <Typography variant="body1">
              Heat oil in a (14- to 16-inch) paella pan or a large, deep
              skillet over medium-high heat. Add chicken, shrimp and
              chorizo, and cook, stirring occasionally until lightly
              browned, 6 to 8 minutes. Transfer shrimp to a large plate and
              set aside, leaving chicken and chorizo in the pan. Add
              pimentón, bay leaves, garlic, tomatoes, onion, salt and
              pepper, and cook, stirring often until thickened and fragrant,
              about 10 minutes. Add saffron broth and remaining 4 1/2 cups
              chicken broth; bring to a boil.
            </Typography>
            <br />
            <Typography variant="body1">
              Add rice and stir very gently to distribute. Top with
              artichokes and peppers, and cook without stirring, until most
              of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
              medium-low, add reserved shrimp and mussels, tucking them down
              into the rice, and cook again without stirring, until mussels
              have opened and rice is just tender, 5 to 7 minutes more.
              (Discard any mussels that don’t open.)
            </Typography>
            <br />
            <Typography variant="body1">
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>

        `}
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
