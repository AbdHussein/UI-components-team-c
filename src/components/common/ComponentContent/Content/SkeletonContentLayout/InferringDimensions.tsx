import React from "react";
import InferringdimensionCodeSnippet from "../../../../Skeleton/PartsOfSkeletonContent/InferringdimensionsSkeleton/InferringdimensionCodeSnippet";
import { InferringdimensionComponentOverview } from "../../../../Skeleton/PartsOfSkeletonContent/InferringdimensionsSkeleton/InferringdimensionComponentOverview";
import Typography from "../../../../Typography";

const InferringDimensions = () => {
  return (
    <>
      <Typography variant="h3" id="InferringDimensions">
        Inferring dimensions
      </Typography>
      <Typography variant="body1" gutterBottom>
        In addition to accepting width and height props, the component can also
        infer the dimensions.
      </Typography>
      <InferringdimensionComponentOverview />
      <InferringdimensionCodeSnippet />
      <br />
    </>
  );
};

export default InferringDimensions;
