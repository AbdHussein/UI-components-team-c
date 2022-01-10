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
import BasicDialog from "./BasicDialog";
import FormDialog from "./FormDialog";
import Customization from "./Customization";
import FullScreenDialogs from "./FullScreenDialogs";
import OptionalSizes from "./OptionalSizes";

export interface IContent {
  id: string;
  title: string;
  component: ReactNode;
}

const DialogContentLayout = () => {
  const [current, setCurrent] = useState<string>("");

  const content: IContent[] = [
    {
      title: "Introduction",
      id: "Introduction",
      component: <Introduction />,
    },
    {
      title: "Basic Dialog",
      id: "BasicDialog",
      component: <BasicDialog />,
    },
    {
      title: "Form Dialog",
      id: "FormDialog",
      component: <FormDialog />,
    },
    {
      title: "Customization",
      id: "Customization",
      component: <Customization />,
    },
    {
      title: "FullScreen Dialog",
      id: "FullScreenDialog",
      component: <FullScreenDialogs />,
    },
    {
      title: "Optional Sizes Dialog",
      id: "OptionalSizes",
      component: <OptionalSizes />,
    },
  ];

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
        <TableOfContent
          content={content}
          current={current}
          style={{ paddingInline: "50px" }}
        />
      </div>
    </>
  );
};

export default DialogContentLayout;
