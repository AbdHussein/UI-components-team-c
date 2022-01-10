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
import ImageAvatars from "./ImageAvatars";
import LetterAvatars from "./LetterAvatars";
import Sizes from "./Sizes";
import Variants from "./Variants";
import Grouped from "./Grouped";

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
    title: "Image Avatars",
    id: "ImageAvatars",
    component: <ImageAvatars />,
  },
  {
    title: "Letter Avatars",
    id: "LetterAvatars",
    component: <LetterAvatars />,
  },
  {
    title: "Sizes",
    id: "Sizes",
    component: <Sizes />,
  },
  {
    title: "Variants",
    id: "Variants",
    component: <Variants />,
  },
  {
    title: "Grouped",
    id: "Grouped",
    component: <Grouped />,
  },
];

const AvatarContent = () => {
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
          <div key={element.id} id={element.id} ref={refs.current[i]}>
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

export default AvatarContent;
