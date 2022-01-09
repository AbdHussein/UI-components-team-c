import Typography from "../../../../Typography";
import { GroupSkeleton } from "../SkeletonGroup/SkeletonGroup.styled";
import { Container } from "./PulsateSkeleton.styled";

  interface Iprops{
    srcImg:string
    title1:string
    title2:string
    title3:string

  }
const PulsateSkeleton = ({srcImg,title1,title2,title3}:Iprops) => {
    return (
      <Container>
        <img src={srcImg}  alt=""/>
        <Typography variant="h6" id="Avatar"> {title1}</Typography>
        <Typography variant="body1" gutterBottom>{title2}  </Typography>
 <Typography variant="body1" gutterBottom>{title3}</Typography>

      </Container>
      
    );
  };
  
  
  export default PulsateSkeleton;