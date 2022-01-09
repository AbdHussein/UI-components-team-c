import React from "react";
import { Styling } from "./DynamicComponent";

export interface ITypography extends React.HTMLProps<HTMLElement> {
  variant: string;
  gutterBottom?: boolean;
  align?: string;
  children: React.ReactNode;
}

const returnComponent: React.FC<ITypography> = ({
  variant,
  gutterBottom,
  align,
  children,
  id,
}) => {
  if (variant) {
    return (
      <Styling
        variant={variant}
        align={align}
        gutterBottom={gutterBottom}
        id={id}
      >
        {children}
      </Styling>
    );
  } else {
    return <div></div>;
  }
};

const Typography: React.FC<ITypography> = (props) => {
  return <React.Fragment>{returnComponent(props)}</React.Fragment>;
};

export default Typography;
