


import DisplayPartOfSkeletonContent from "../../../Skeleton/DisplayPartOfSkeletonContent";
import { PartsOfSkeletonContent } from "../../../Skeleton/PartsOfSkeletonContent/Helpers";
import TableOfContent from "../../TableOfContent";
import AvatarTableOfContent from "../../../common/TableOfContent/Avatar";


const SkeletonContent = () => (
<>
  <div style={{width: '90%'}}>
{
  PartsOfSkeletonContent.map(part=>{
    return <DisplayPartOfSkeletonContent
     title={part.title} description={part.description} 
     CodeSnippet={part.CodeSnippet} 
     ComponentOverview={part.ComponentOverview}  /> }

  )}</div>
   <div style={{ width: "240px" ,margin:'20px' }}>
        <TableOfContent content={AvatarTableOfContent} />
      </div>

  </>

  )

export default SkeletonContent;




