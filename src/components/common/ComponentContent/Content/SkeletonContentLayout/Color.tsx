import React from "react";
import ColorCodeSnippet from "../../../../Skeleton/PartsOfSkeletonContent/ColorSkeleton/ColorCodeSnippet";
import ColorComponentOverview from "../../../../Skeleton/PartsOfSkeletonContent/ColorSkeleton/ColorComponentOverview";
import Typography from "../../../../Typography";

const Color = () => {
  return (
    <>
      <Typography variant="h3" id="Color">
        Color
      </Typography>
      <Typography variant="body1" gutterBottom>
        The color of the component can be customized by changing its
        background-color CSS property. This is especially useful when on a black
        background (as the skeleton will otherwise be invisible).
      </Typography>
      <ColorComponentOverview />
      <ColorCodeSnippet />
      <br />
    </>
  );
};

export default Color;
