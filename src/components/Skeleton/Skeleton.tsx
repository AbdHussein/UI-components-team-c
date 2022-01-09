import { SkeletonContainer } from "./Skeleton.styled";

export type Variant = "text" | "circular" | "rectangular"; //use type becuse type give choose for any one use it but enum dont give choose type and you shoud call object to take chooes from it

export type Animation = boolean | "wave";

export interface Iprops {
  width?: string | number;
  height?: string | number;
  animation?: Animation;
  variant?: Variant;
  bgColor?: string;
}

export const Skeleton = ({
  width,
  height,
  animation,
  variant,
  bgColor,
}: Iprops) => {
  return (
    <SkeletonContainer
      width={width}
      height={height}
      bgColor={bgColor}
      animation={animation}
      variant={variant}
    />
  );
};
