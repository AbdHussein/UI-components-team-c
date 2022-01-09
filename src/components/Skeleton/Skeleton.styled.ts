import styled, { keyframes } from "styled-components";
import { Animation, Iprops, Variant } from "./Skeleton";

const handleBorderRadius = (Shape: Variant | undefined) => {
  switch (Shape) {
    case "circular":
      return "50%";
    case "rectangular":
      return "0";
    case "text":
      return "4px/6.7px";
    default:
      return "4px/6.7px";
  }
};

const handleAemation = (animation: Animation | undefined) => {
  switch (animation) {
    case "wave":
    case true:
      return changeObacity;
    case false:
      return "";
    default:
      return changeObacity;
  }
};

const handleHeight = (height: string | number | undefined) => {
  switch (typeof height) {
    case "number":
      return height + "px";
    case "string":
      return height;
    default:
      return "15px";
  }
};
const handleWidth = (width: string | number | undefined) => {
  switch (typeof width) {
    case "number":
      return width + "px";
    case "string":
      return width;
    default:
      return "210px";
  }
};

const changeObacity = keyframes`
      0% {opacity:0.2;  }
      50% {opacity:0.35;  }
      100% { opacity: 0.2; }
      `;

export const SkeletonContainer = styled.div<Iprops>`
  width: ${(props) => handleWidth(props.width)};
  height: ${(props) => handleHeight(props.height)};
  background: ${(props) => (props.bgColor ? props.bgColor : "#D3DEDC")};
  border-radius: ${(props) => handleBorderRadius(props.variant)};
  animation: ${(props) => handleAemation(props.animation)} 2s linear 2s infinite;
  margin-top: 10px;
`;
