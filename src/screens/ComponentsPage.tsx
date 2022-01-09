import React from "react";
import LeftSideCompoentsPage from "../components/common/LeftSideCompoentsPage";
import ComponentContent from "../components/ComponentContent";

export default function ComponentsPage() {
  return (
    <div style={{ display: "flex" }}>
      <LeftSideCompoentsPage />
      <ComponentContent />
    </div>
  );
}
