
import Typography from "../../../Typography";
import ComponentOverview from "../../ComponentOverview";
import CodeSnippet from "../../CodeSnippet";
import { Skeleton } from "../../../Skeleton/Skeleton";
import Index from "../../../Skeleton/SkeletonGroup/Index";
import PulsateSkeleton from "../../../Skeleton/PulsateSkeleton/PulsateSkeleton";
import  skeleton3 from '../../../../assets/skeleton/skeleton3.jpg';
import  skeleton1 from '../../../../assets/skeleton/skeleton1.jpg';
import  skeleton2 from '../../../../assets/skeleton/skeleton2.jpg';
import  skeleton4 from '../../../../assets/skeleton/skeleton4.jpg';
import  skeleton5 from '../../../../assets/skeleton/skeleton5.jpg';

const SkeletonContent = () => {
  return (
    <div>
      <Typography variant="h1" id="Skeleton">Skeleton</Typography>
      <Typography variant="body1" gutterBottom>
        Display a placeholder preview of your content before the data gets loaded to reduce load-time frustration.
      </Typography>
      <Typography variant="h1" id="Usage">Usage</Typography>
      <Typography variant="body1" gutterBottom>
       The component is designed to be used  directly in your components. For instance:
      </Typography>
      <CodeSnippet
        full_code={`
        {
          item ? (
            <img
              style={{
                width: 210,
                height: 118,
              }}
              alt={item.title}
              src={item.src}
            />
          ) : (
            <Skeleton variant="rectangular" width={210} height={118} />
          );
        }
            `}
        simple_code={`
        {
          item ? (
            <img
              style={{
                width: 210,
                height: 118,
              }}
              alt={item.title}
              src={item.src}
            />
          ) : (
            <Skeleton variant="rectangular" width={210} height={118} />
          );
        }
        `}
      />
      <Typography variant="h2" id="Variants">Variants</Typography>
      <Typography variant="body1" gutterBottom>the component supports 3 shape variants.</Typography>
      <ComponentOverview style={{ flexDirection:'column'}}>
        <Skeleton variant="text" />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={118} />
      </ComponentOverview>
      <CodeSnippet
        full_code={`
        import ReactDOM from react-dom';
        const SkeletonDemo = () => (

          <ComponentOverview style={{ background:'red'}}>
          <Skeleton variant="text" />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={210} height={118} />
          </ComponentOverview>

          );
          
          ReactDOM.render(
            <SkeletonDemo />,
            document.getElementById("root")
            );
            `}
        simple_code={`
        <Skeleton variant="text" />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={118} />
        </
        `}
      />
      <Typography variant="h2" id="Animations">Animations</Typography>
      <Typography variant="body1" gutterBottom>
        By default, the skeleton pulsates, but you can change the animation to a wave or disable it entirely.
      </Typography>
      <ComponentOverview style={{ flexDirection:'column',border:'0.1px solid gray' }}>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
     </ComponentOverview>
      <CodeSnippet
        full_code={`
          import  Avatar  from "./Avatar";
          import ReactDOM from react-dom';
          
          const SkeletonDemo = () => (
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
          );
            
          ReactDOM.render(
            <SkeletonDemo />,
            document.getElementById("root")
          );
        `}
        simple_code={`
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
        `}
      />
      <Typography variant="h2" id="Pulsate example"> Pulsate example </Typography>
      <ComponentOverview style={{ flexDirection:'column'}}>
        <div  style={{display:'flex'}}>
          <Index/>
          <Index/>
          <Index/>
       </div>
       <div  style={{display:'flex' , marginTop:'45px'}} >
          <PulsateSkeleton srcImg={skeleton2} title1={"Don Diablo @ Tomorrowland"} title2={"Don Diablo"} title3={"396 k views • a week ago"}/>
          <PulsateSkeleton srcImg={skeleton3} title1={"Queen - Greatest Hits"} title2={"Queen Official"} title3={"40 M views • 3 years ago"}/>
          <PulsateSkeleton srcImg={skeleton1}title1={"Calvin Harris, Sam Smith - Promises (Official Video)"} title2={"Calvin Harris"} title3={'130 M views • 10 months ago'}/>
       </div>
      </ComponentOverview>
     <Typography variant="h2" id=" Wave example">  Wave example</Typography>
     <ComponentOverview style={{ flexDirection:'column', backgroundColor:'#F7F7F7' ,padding:'40px'}}>
      <div style={{ flexDirection:'column', padding:'10px ' , width:'260px' ,  background:'white'}}>
      <div  style={{display:'flex'}}>
        <Skeleton variant="circular" width={40} height={40} />  
        <div style={{flexDirection:'column'}}>
         <Skeleton  width={200} height={5} />
         <Skeleton width={150} height={5}  />
       </div>
     </div>
    <Skeleton variant="rectangular" width={250} height={118} />
    <Skeleton width={200} height={5} />
    <Skeleton variant="text" width={160} height={5} />
    </div>
    <div style={{ flexDirection:'column', padding:'10px ' , width:'260px' ,  background:'white', marginTop:'20px'}}>
    <div  style={{display:'flex' }}>
     <img src={skeleton4} width={40} height={40} style={{borderRadius:'20px'}} />  
    <div style={{flexDirection:'column'}}>
      <Typography variant="h5"> Ted  </Typography>
      <Typography variant="h5"> 5 hours ago  </Typography>
   </div>
  </div>
  <img src={skeleton5} width={250} height={118} />
   <Typography variant="h5" >
     Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:
    </Typography>
   </div>
  </ComponentOverview>
  <Typography variant="h3" >Inferring dimensions</Typography>
  <Typography variant="h4" >In addition to accepting width and height props, the component can also infer the dimensions.</Typography>
  <Typography variant="h4" >It works well when it comes to typography as its height is set using em units.</Typography>
  <CodeSnippet
        full_code={`
        <Typography variant="h1">{loading ? <Skeleton /> : 'h1'}</Typography>
        `}
        simple_code={`
        <Typography variant="h1">{loading ? <Skeleton /> : 'h1'}</Typography>
        `}/>
  <ComponentOverview style={{ flexDirection:'column'}}>
    <ComponentOverview style={{border:'none'}}>
        <Skeleton  height={50}/>
        <Typography variant="h1" >  h1  </Typography>
    </ComponentOverview>
    <ComponentOverview style={{border:'none'}}>
         <Skeleton  height={30}/>
         <Typography variant="h2" > h3  </Typography>
          </ComponentOverview>
          <ComponentOverview style={{border:'none'}}>
          <Skeleton  height={16}/>
          <Typography variant="h5" > body1 </Typography>
          </ComponentOverview>
          <ComponentOverview style={{border:'none'}}>
          <Skeleton/>
          <Typography variant="h6" > caption </Typography>
          </ComponentOverview>
      </ComponentOverview>
   
      <Typography variant="h2" id="Color">Color </Typography>
      <Typography variant="body1" gutterBottom>
      The color of the component can be customized by changing its background-color CSS property.This is especially useful when on a black background (as the skeleton will otherwise be invisible).
      </Typography>
      <ComponentOverview style={{padding:'20px 10px'}} >
      <Skeleton  bgColor='black'variant="rectangular"width={210}height={118}/></ComponentOverview>
      <CodeSnippet
        full_code={`
          import ReactDOM from react-dom';
          const SkeletonDemo = () => (
            <Skeleton  bgColor='black'
            variant="rectangular"
            width={210}
            height={118} />
         
          );
            
          ReactDOM.render(
            <SkeletonDemo />,
            document.getElementById("root")
          );
        `}
        simple_code={`
        <Skeleton 
         bgColor='black'
         variant="rectangular"
          width={210}
         height={118} />
        
        `}
      />

    </div>
      <div style={{ width: "240px" }}>
        <TableOfContent content={[]} />
      </div>
      </div>
  );
};

export default SkeletonContent;
