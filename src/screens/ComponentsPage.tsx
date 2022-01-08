import LeftSideCompoentsPage from "../components/common/LeftSideCompoentsPage";
import ComponentContent from "../components/common/ComponentContent";

export default function ComponentsPage() {
  return (
    <div style={{ display: "flex" }}>
      <LeftSideCompoentsPage />
      <ComponentContent />
    </div>
  );
}
