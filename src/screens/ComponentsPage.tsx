import LeftSideCompoentsPage from "../components/common/LeftSideCompoentsPage";
import ComponentContent from "../components/common/ComponentContent";

export default function ComponentsPage({
  toggleTheme,
}: {
  toggleTheme: (theme: string) => void;
}) {
  return (
    <div style={{ display: "flex" }}>
      <LeftSideCompoentsPage />
      <ComponentContent toggleTheme={toggleTheme} />
    </div>
  );
}
