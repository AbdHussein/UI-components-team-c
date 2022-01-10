import Card from "../../../../Card";
import CardActions from "../../../../Card/cardSections/CardActions";
import CardContent from "../../../../Card/cardSections/CardContent";
import Typography from "../../../../Typography";
import ComponentOverview from "../../../ComponentOverview";
import CodeSnippet from "../../../CodeSnippet";
import { Button } from "../../../../../screens/HomePage/HomePage.styled";
const BasicCard = () => {
  return (
    <>
      <Typography variant="h3">Basic card</Typography>
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
    </>
  );
};

export default BasicCard;
