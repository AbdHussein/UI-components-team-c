import { IndexContiner } from "../LeftSideCompoentsPage.style";
import Header from "./Header";
import ListOfComponents from "./ListOfComponents";


export default function Index() {
    return (
    <IndexContiner style={{ overflowY: "scroll" }}>
        <Header/>
        <ListOfComponents/>
    </IndexContiner>
      
    )
}
