import React from "react";
import AnimationCodeSnippet from "../../../../Skeleton/PartsOfSkeletonContent/AnimationSkeleton/AnimationCodeSnippet";
import AnimationComponentOverview from "../../../../Skeleton/PartsOfSkeletonContent/AnimationSkeleton/AnimationComponentOverview";
import Typography from "../../../../Typography";

const Animations = () => {
  return (
    <>
      <Typography variant="h3" id="Animations">
        Animations
      </Typography>
      <Typography variant="body1" gutterBottom>
        By default, the skeleton pulsates, but you can change the animation to a
        wave or disable it entirely.
      </Typography>
      <AnimationComponentOverview />
      <AnimationCodeSnippet />
      <br />
    </>
  );
};

export default Animations;
