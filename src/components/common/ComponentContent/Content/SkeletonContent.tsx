


import DisplayPartOfSkeletonContent from "../../../Skeleton/DisplayPartOfSkeletonContent";
import { PartsOfSkeletonContent } from "../../../Skeleton/PartsOfSkeletonContent/Helpers";
import TableOfContent from "../../TableOfContent";
import AvatarTableOfContent from "../../../common/TableOfContent/Avatar";


const SkeletonContent = () => (
<div>
{
  PartsOfSkeletonContent.map(part=>{
    return <DisplayPartOfSkeletonContent
     title={part.title} description={part.description} 
     CodeSnippet={part.CodeSnippet} 
     ComponentOverview={part.ComponentOverview}  /> }

  )}
   <div style={{ width: "240px" }}>
        <TableOfContent content={AvatarTableOfContent} />
      </div>

  </div>

  )

export default SkeletonContent;




