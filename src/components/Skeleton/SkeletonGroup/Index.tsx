import { Skeleton } from "..";
import { GroupSkeleton } from "./SkeletonGroup.styled";


const Index = () => {
  return (
    <GroupSkeleton>
        <Skeleton variant="rectangular" width={210} height={118} />
        <Skeleton variant="text" width={210}  />
        <Skeleton  width={100} />
       

    </GroupSkeleton>
    
  );
};


export default Index;




