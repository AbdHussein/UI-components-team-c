import ComponentContent from "../components/common/ComponentContent";
import LeftSideCompoentsPage from "../components/common/LeftSideCompoentsPage";

export default function ComponentsPage() {
  return (
    <div style={{ display: "flex" }}>
      <LeftSideCompoentsPage />
      <ComponentContent   />
    </div>
  );
}


