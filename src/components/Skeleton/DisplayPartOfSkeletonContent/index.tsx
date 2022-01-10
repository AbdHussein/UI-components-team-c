import Typography from '../../Typography';
import { IPartsOfSkeletonContent } from '../PartsOfSkeletonContent/Helpers';



 const  DisplayPartOfSkeletonContent= ({ title,description,ComponentOverview, CodeSnippet}:IPartsOfSkeletonContent) => {
 return(
<div>
    <Typography variant="h2" id={title}>
    {title}
       </Typography>
     <Typography variant="body1" gutterBottom>
      {description}
      </Typography>
      {ComponentOverview}
      {CodeSnippet}
      <br/>

      
</div>
)
};

export default DisplayPartOfSkeletonContent;


