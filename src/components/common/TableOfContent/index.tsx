import { isInViewport } from "../../../helpers";
import Typography from "../../Typography";
import { IContent } from "./Avatar";
import {
  Container,
  ContentList,
  ContentListItem,
} from "./TableOfContent.styled";
import { useLocation } from "react-router-dom";

const Index = ({
  content,
  current,
}: {
  content: IContent[];
  current?: string;
}) => {
  const location = useLocation();

  return (
    <Container>
      {content?.length > 0 && (
        <>
          <Typography gutterBottom variant={"body1"}>
            Content
          </Typography>
          <ContentList>
            {content?.map((c) => (
              <ContentListItem
                active={isInViewport(c.id)}
                key={c.id}
                current={current === c.id}
              >
                <a href={location.pathname + "#" + c.id}>
                  <span>{c.title}</span>
                </a>
              </ContentListItem>
            ))}
          </ContentList>
        </>
      )}
    </Container>
  );
};

export default Index;
