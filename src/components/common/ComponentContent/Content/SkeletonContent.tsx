import DisplayPartOfSkeletonContent from "../../../Skeleton/DisplayPartOfSkeletonContent";
import { PartsOfSkeletonContent } from "../../../Skeleton/PartsOfSkeletonContent/Helpers";
import TableOfContent from "../../TableOfContent";
import AvatarTableOfContent from "../../../common/TableOfContent/Avatar";
import Footer from "../../Footer";

const SkeletonContent = () => (
  <div>
    <div style={{ width: "86%" }}>
      {PartsOfSkeletonContent.map((part) => {
        return (
          <DisplayPartOfSkeletonContent
            title={part.title}
            description={part.description}
            CodeSnippet={part.CodeSnippet}
            ComponentOverview={part.ComponentOverview}
          />
        );
      })}
    </div>
    <Footer />
    <div style={{ width: "240px", margin: "20px" }}>
      <TableOfContent content={AvatarTableOfContent} />
    </div>
  </div>
);

export default SkeletonContent;
