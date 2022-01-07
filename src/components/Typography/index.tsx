import React from "react";
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Button,
  SubTitle1,
  SubTitle2,
  Body1,
  Body2,
} from "./DynamicComponent";

export interface ITypography {
  variant?: string;
  gutterBottom?: boolean;
  align?: string;
  children: React.ReactNode;
}

const returnComponent: React.FC<ITypography> = ({
  variant,
  gutterBottom,
  align,
  children,
}) => {
  switch (variant) {
    case "h1":
      return (
        <H1 align={align} gutterBottom={gutterBottom}>
          {children}
        </H1>
      );
    case "h2":
      return (
        <H2 align={align} gutterBottom={gutterBottom}>
          {children}
        </H2>
      );
    case "h3":
      return (
        <H3 align={align} gutterBottom={gutterBottom}>
          {children}
        </H3>
      );
    case "h4":
      return (
        <H4 align={align} gutterBottom={gutterBottom}>
          {children}
        </H4>
      );
    case "h5":
      return (
        <H5 align={align} gutterBottom={gutterBottom}>
          {children}
        </H5>
      );
    case "h6":
      return (
        <H6 align={align} gutterBottom={gutterBottom}>
          {children}
        </H6>
      );
    case "subtitle1":
      return (
        <SubTitle1 align={align} gutterBottom={gutterBottom}>
          {children}
        </SubTitle1>
      );
    case "subtitle2":
      return (
        <SubTitle2 align={align} gutterBottom={gutterBottom}>
          {children}
        </SubTitle2>
      );
    case "body1":
      return (
        <Body1 align={align} gutterBottom={gutterBottom}>
          {children}
        </Body1>
      );
    case "body2":
      return (
        <Body2 align={align} gutterBottom={gutterBottom}>
          {children}
        </Body2>
      );
    case "button":
      return (
        <Button align={align} gutterBottom={gutterBottom}>
          {children}
        </Button>
      );

    default:
      return <></>;
  }
};

const Typography: React.FC<ITypography> = (props) => {
  return <React.Fragment>{returnComponent(props)}</React.Fragment>;
};

export default Typography;
