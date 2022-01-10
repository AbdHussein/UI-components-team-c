import React, {
  ReactNode,
  useEffect,
  useRef,
  useState,
  RefObject,
} from "react";
import Footer from "../../../Footer";
import TableOfContent from "../../../TableOfContent";
import Animations from "./Animations";
import Color from "./Color";
import InferringDimensions from "./InferringDimensions";
import Introduction from "./Introduction";
import PulsateExample from "./PulsateExample";
import Usage from "./Usage";
import Variants from "./Variants";

export interface IContent {
  id: string;
  title: string;
  component: ReactNode;
}

const content: IContent[] = [
  {
    title: "Introduction",
    id: "Introduction",
    component: <Introduction />,
  },
  {
    title: "Usage",
    id: "Usage",
    component: <Usage />,
  },
  {
    title: "Variants",
    id: "Variants",
    component: <Variants />,
  },
  {
    title: "Animations",
    id: "Animations",
    component: <Animations />,
  },
  {
    title: "Pulsate Example",
    id: "Pulsate",
    component: <PulsateExample />,
  },
  {
    title: "InferringDimensions",
    id: "Inferring Dimensions",
    component: <InferringDimensions />,
  },
  {
    title: "Color",
    id: "Color",
    component: <Color />,
  },
];

const SkeletonContent = () => {
  const [current, setCurrent] = useState<string>("");

  const refs = useRef(
    Array.from({ length: content.length }, () =>
      React.createRef<HTMLDivElement>()
    )
  );

  useEffect(() => {
    window.addEventListener("scroll", () => {
      refs.current.map((item: RefObject<HTMLDivElement>) => {
        const i = item as RefObject<HTMLDivElement>;
        const sectionTop = i.current?.offsetTop as number;
        if (window.scrollY >= sectionTop - 200) {
          setCurrent(i.current?.id as string);
        }
        return null;
      });
    });
  }, []);

  return (
    <>
      <div>
        {content.map((element, i) => (
          <div key={element.id} id={element.id} ref={refs.current[i]} style={{width: '93%'}}>
            {element.component}
          </div>
        ))}
        <Footer />
      </div>
      <div style={{ width: "240px" }}>
        <TableOfContent content={content} current={current} />
      </div>
    </>
  );
};

export default SkeletonContent;
