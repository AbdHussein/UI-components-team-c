import ComponentOverview from '../../../common/ComponentOverview'
import PulsateSkeleton from './PulsateSkeleton/PulsateSkeleton'
import Index from './SkeletonGroup/Index'
import skeleton3 from "../../../../assets/skeleton/skeleton3.jpg";
import skeleton1 from "../../../../assets/skeleton/skeleton1.jpg";
import skeleton2 from "../../../../assets/skeleton/skeleton2.jpg";

export default function PulsateExampleComponentOverview() {
    return (
        <ComponentOverview style={{ flexDirection: "column" }}>
        <div style={{ display: "flex" }}>
          <Index />
          <Index />
          <Index />
        </div>
        <div style={{ display: "flex", marginTop: "45px" , marginLeft:'39px' }}>
          <PulsateSkeleton
            srcImg={skeleton2}
            title1={"Don Diablo @ Tomorrowland"}
            title2={"Don Diablo"}
            title3={"396 k views • a week ago"}
          />
          <PulsateSkeleton
            srcImg={skeleton3}
            title1={"Queen - Greatest Hits"}
            title2={"Queen Official"}
            title3={"40 M views • 3 years ago"}
          />
          <PulsateSkeleton
            srcImg={skeleton1}
            title1={"Calvin Harris, Sam Smith - Promises (Official Video)"}
            title2={"Calvin Harris"}
            title3={"130 M views • 10 months ago"}
          />
        </div>
      </ComponentOverview>
    )
}
