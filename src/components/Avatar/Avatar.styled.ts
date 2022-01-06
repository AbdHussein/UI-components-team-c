import styled from "styled-components";

export const Container = styled.div.attrs((props) => ({
  className: props?.className,
  //@ts-ignore
  badge: props?.badge,
}))`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  user-select: none;
  box-sizing: content-box;
  background-color: ${(props) => props?.style?.backgroundColor || "#ccc"};
  color: ${(props) => props?.style?.color};
  height: ${(props) => props?.style?.height || "40px"};
  width: ${(props) => props?.style?.width || "40px"};

  &.circular {
    border-radius: 50%;
  }

  &.rounded {
    border-radius: 5px;
  }

  &.square {
    border-radius: 0px;
  }

  & img {
    width: inherit;
    height: inherit;
    object-fit: contain;
  }
  ${(props) =>
    props?.badge &&
    `
  &::after {
    content: "";
    position: absolute;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    left: 0;
    bottom: 0;
    transform: translate(50%, -50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    z-index: 1;
    background: #ff1885;
    color: #f9f9f9;
    font-size: 8px;
  }
  `}
`;
