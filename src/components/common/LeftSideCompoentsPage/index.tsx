import { IndexContiner } from "./LeftSideCompoentsPage.styled";
import Header from "./LeftSideCompoentsPage/Header";
import ListOfComponents from "./LeftSideCompoentsPage/ListOfComponents";

export default function Index() {
  return (
    <>
      <IndexContiner style={{ position: "static" }} />
      <IndexContiner>
        <Header />
        <ListOfComponents />
      </IndexContiner>
    </>
  );
}


