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

const Media = () => {
  return (
    <>
      <Typography variant="h2">Media</Typography>
      <Typography variant="body1" gutterBottom>
        Example of a card using an image to reinforce the content.
      </Typography>

      <ComponentOverview style={{ gap: "5px" }}>
        <div style={{ width: "400px" }}>
          <Card>
            <CardMedia src="https://mui.com/static/images/cards/contemplative-reptile.jpg" />
            <CardContent>
              <Typography variant="h4">Lizard</Typography>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </CardContent>
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
            </CardActions>
          </Card>
        </div>
      </ComponentOverview>
      <CodeSnippet
        full_code={`
      <Card>
        <CardMedia src="https://mui.com/static/images/cards/contemplative-reptile.jpg" />
        <CardContent>
          <Typography variant="h4">Lizard</Typography>
          Lizards are a widespread group of squamate reptiles, with over
          6,000 species, ranging across all continents except Antarctica
        </CardContent>
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
        </CardActions>
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

export default Media;
