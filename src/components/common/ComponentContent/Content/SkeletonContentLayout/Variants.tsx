import React from "react";
import Typography from "../../../../Typography";
import ComponentOverview from "../../../ComponentOverview";
import CodeSnippet from "../../../CodeSnippet";
import { Code } from "../../../CodeSnippet/CodeSnippet.styled";
import VariantsComponentOverview from "../../../../Skeleton/PartsOfSkeletonContent/VariantsSkeleton/VariantsComponentOverview";
import VariantsCodeSnippet from "../../../../Skeleton/PartsOfSkeletonContent/VariantsSkeleton/VariantsCodeSnippet";

const Variants = () => {
  return (
    <>
      <Typography variant="h4" id="Variants">
        Variants
      </Typography>
      <Typography variant="body1" gutterBottom>
        The component supports 3 shape variants.
      </Typography>
      <VariantsComponentOverview />
      <VariantsCodeSnippet />
      <br />
    </>
  );
};

export default Variants;
