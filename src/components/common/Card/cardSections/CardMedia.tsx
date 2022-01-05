import { FC, HTMLProps } from "react";
import { CSSProperties } from "styled-components";
import { StyledCardMedia } from "../style";

interface IProps extends HTMLProps<HTMLImageElement> {
  component?: any;
  sx?: CSSProperties;
  image?: string;
  src?: string;
}

export const CardMedia: FC<IProps> = ({
  component,
  sx,
  image,
  src,
  ...rest
}) => {
  return (
    <StyledCardMedia src={image || src} style={sx} as={component} {...rest} />
  );
};
