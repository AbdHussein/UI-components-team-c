import React from "react";
import Footer from "../../Footer";
import TableOfContent from "../../../common/TableOfContent";
import AvatarTableOfContent from "../../../common/TableOfContent/Avatar";

const SkeletonContent = () => {
  return (
    <>
      <div>
        skeleton content
        <Footer />
      </div>
      <div style={{ width: "240px" }}>
        <TableOfContent content={[]} />
      </div>
    </>
  );
};

export default SkeletonContent;
