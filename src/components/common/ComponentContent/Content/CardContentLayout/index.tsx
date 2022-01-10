import React, {
  ReactNode,
  useEffect,
  useRef,
  useState,
  RefObject,
} from "react";
import Footer from "../../../Footer";
import TableOfContent from "../../../TableOfContent";
import Introduction from "./Introduction";
import BasicCard from "./BasicCard";
import ComplexInteraction from "./ComplexInteraction";
import Media from "./Media";

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
    title: "Basic card",
    id: "Basic_card",
    component: <BasicCard />,
  },
  {
    title: "Complex Interaction",
    id: "Complex_Interaction",
    component: <ComplexInteraction />,
  },
  {
    title: "Media",
    id: "Media",
    component: <Media />,
  },
];

const CardContentLayout = () => {
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
        if (window.scrollY >= sectionTop - 60) {
          setCurrent(i.current?.id as string);
        }
        return null;
      });
    });
  }, []);

  return (
    <>
      <div>
        {content.map((eliment, i) => (
          <div key={eliment.id} id={eliment.id} ref={refs.current[i]}>
            {eliment.component}
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

export default CardContentLayout;
