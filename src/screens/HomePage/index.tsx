import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/common/Header";

//styled components
import {
  MUIBOXSection,
  MUIFeatures,
  MUIComponents,
  Heading,
  Description,
  MUIFeaturesContainer,
  Span,
  Button,
} from "./HomePage.styled";

export default function Index() {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Header />

      <MUIBOXSection>
        <MUIFeatures>
          <MUIFeaturesContainer>
            <Heading>
              The React <br /> <Span>UI Library</Span> you
              <br /> always wanted
            </Heading>
            <Description>
              MUI provides a robust, customizable, and accessible library of
              foundational and advanced components, enabling you to build your
              own design system and develop React applications faster.
            </Description>
            <Button
              onClick={() => {
                navigate(`/components/avatar`);
              }}
            >
              Get Started
            </Button>
          </MUIFeaturesContainer>
        </MUIFeatures>
        <MUIComponents></MUIComponents>
      </MUIBOXSection>
    </React.Fragment>
  );
}
