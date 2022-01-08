import React from "react";
import { Container } from "./ComponentOverview.styled";

const Index: React.FC<{ style?: React.CSSProperties }> = ({
  children,
  style,
}) => {
  return <Container style={style}>{children}</Container>;
};

export default Index;
