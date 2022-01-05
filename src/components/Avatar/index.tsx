import {
  useState,
  ReactNode,
  ElementType,
  HTMLProps,
  CSSProperties,
} from "react";
import { Container } from "./Avatar.styled";

export interface IAvatar extends HTMLProps<HTMLElement> {
  variant?: "circular" | "rounded" | "square" | string;
  alt?: string;
  children?: ReactNode;
  component?: ElementType;
  style?: CSSProperties;
  src?: string;
  srcSet?: string;
  imgProps?: HTMLProps<HTMLImageElement>;
  sizes?: string;
}

const Index = ({
  component,
  variant,
  alt,
  children,
  style,
  src,
  srcSet,
  imgProps,
  sizes,
  ...rest
}: IAvatar): JSX.Element => {
  const [imageError, setImageError] = useState<boolean>(false);
  return (
    <>
      {(src || alt || children) && (
        <Container
          as={component}
          style={{ ...style }}
          className={variant}
          {...rest}
        >
          {src && !imageError && (
            <img
              src={src}
              alt={alt}
              srcSet={srcSet}
              onError={() => setImageError(true)}
            />
          )}
          {(imageError || (!src && alt)) && alt?.charAt(0).toUpperCase()}
          {(imageError || (!src && !alt)) && children}
        </Container>
      )}
    </>
  );
};

Index.defaultProps = {
  variant: "circular",
};

export default Index;
