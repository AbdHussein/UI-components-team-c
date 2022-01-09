import { ElementType, FC, HTMLProps } from "react";
import { CSSProperties } from "styled-components";
import { StyledCardMedia } from "../style";

interface IProps extends HTMLProps<HTMLImageElement> {
  component?: ElementType;
  sx?: CSSProperties;
  image?: string;
  src?: string;
}

const CardMedia: FC<IProps> = ({ component, sx, image, src, ...rest }) => {
  return (
    <StyledCardMedia src={image || src} style={sx} as={component} {...rest} />
  );
};

export default CardMedia;
