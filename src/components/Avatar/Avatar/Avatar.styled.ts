import styled from "styled-components";

export const Avatar = styled.div.attrs((props) => ({
  className: props?.className,
  //@ts-ignore
  variant: props?.variant,
}))`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  box-sizing: border-box;
  background-color: ${(props) => props?.style?.backgroundColor || "#ccc"};
  color: ${(props) => props?.style?.color};
  height: ${(props) => props?.style?.height || "40px"};
  width: ${(props) => props?.style?.width || "40px"};
  z-index: 10;
  background-color: transparent;

  ${({ variant }) =>
    variant === "circular"
      ? "border-radius: 50% !important;"
      : variant === "rounded"
      ? "border-radius: 5px;"
      : variant === "square"
      ? "border-radius: 0px;"
      : ""}

  & img {
    width: inherit;
    height: inherit;
    object-fit: contain;
    ${({ variant }) =>
      variant === "circular"
        ? "border-radius: 50% !important;"
        : variant === "rounded"
        ? "border-radius: 5px;"
        : variant === "square"
        ? "border-radius: 0px;"
        : ""}
  }
`;
