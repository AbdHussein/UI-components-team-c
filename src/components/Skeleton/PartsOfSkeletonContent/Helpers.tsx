import { ReactElement } from "react";
import AnimationCodeSnippet from "./AnimationSkeleton/AnimationCodeSnippet";
import AnimationComponentOverview from "./AnimationSkeleton/AnimationComponentOverview";
import ColorCodeSnippet from "./ColorSkeleton/ColorCodeSnippet";
import ColorComponentOverview from "./ColorSkeleton/ColorComponentOverview";
import InferringdimensionCodeSnippet from "./InferringdimensionsSkeleton/InferringdimensionCodeSnippet";
import { InferringdimensionComponentOverview } from "./InferringdimensionsSkeleton/InferringdimensionComponentOverview";
import PulsateExampleComponentOverview from "./PulsateExampleSkeleton";
import UsageCodeSnippet from "./UsageSkeleton/UsageCodeSnippet";
import VariantsCodeSnippet from "./VariantsSkeleton/VariantsCodeSnippet";
import VariantsComponentOverview from "./VariantsSkeleton/VariantsComponentOverview";

export interface IPartsOfSkeletonContent {
  title: string;
  description: string;
  ComponentOverview: ReactElement;
  CodeSnippet: ReactElement;
}
export const PartsOfSkeletonContent: IPartsOfSkeletonContent[] = [
  {
    title: "Skeleton",
    description:
      "Display a placeholder preview of your content before the data gets loaded to reduce load-time frustration.",
    CodeSnippet: <></>,
    ComponentOverview: <></>,
  },
  {
    title: "Usage",
    description:
      "The component is designed to be used directly in your components. For instance:",
    CodeSnippet: <UsageCodeSnippet />,
    ComponentOverview: <></>,
  },
  {
    title: "Variants",
    description: "The component supports 3 shape variants.",
    CodeSnippet: <VariantsCodeSnippet />,
    ComponentOverview: <VariantsComponentOverview />,
  },
  {
    title: "Animations",
    description:
      "By default, the skeleton pulsates, but you can change the animation to a wave or disable it entirely.",
    CodeSnippet: <AnimationCodeSnippet />,
    ComponentOverview: <AnimationComponentOverview />,
  },
  {
    title: "Pulsate example",
    description: "",
    CodeSnippet: <></>,
    ComponentOverview: <PulsateExampleComponentOverview />,
  },

  {
    title: "Inferring dimensions",
    description:
      "In addition to accepting width and height props, the component can also infer the dimensions.",
    CodeSnippet: <InferringdimensionCodeSnippet />,
    ComponentOverview: <InferringdimensionComponentOverview />,
  },
  {
    title: "Color",
    description:
      "The color of the component can be customized by changing its background-color CSS property. This is especially useful when on a black background (as the skeleton will otherwise be invisible).",
    CodeSnippet: <ColorCodeSnippet />,
    ComponentOverview: <ColorComponentOverview />,
  },
];
