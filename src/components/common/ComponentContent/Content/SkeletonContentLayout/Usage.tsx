import React from "react";
import Typography from "../../../../Typography";
import UsageCodeSnippet from "../../../../Skeleton/PartsOfSkeletonContent/UsageSkeleton/UsageCodeSnippet";

const Usage = () => {
  return (
    <>
      <Typography variant="h3" id="Usage">
        Usage
      </Typography>
      <Typography variant="body1" gutterBottom>
        The component is designed to be used directly in your components. For
        instance:
      </Typography>
      <UsageCodeSnippet />
      <br />
    </>
  );
};

export default Usage;
