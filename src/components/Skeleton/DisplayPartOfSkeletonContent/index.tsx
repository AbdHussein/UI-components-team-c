import React, { FC } from 'react';
import { IPartsOfSkeletonContent } from '../../common/ComponentContent/Content/SkeletonContent';
import Typography from '../../Typography';



 const  DisplayPartOfSkeletonContent= ({ title,description,ComponentOverview, CodeSnippet}:IPartsOfSkeletonContent) => {
 return(
<div>
   {title &&  <Typography variant="h2" id={title}>
    {title}
       </Typography>}
     { description&&<Typography variant="body1" gutterBottom>
      {description}
      </Typography>}
      { ComponentOverview && {ComponentOverview}}
      {ComponentOverview&&{CodeSnippet}}
</div>
)
};

export default DisplayPartOfSkeletonContent;


