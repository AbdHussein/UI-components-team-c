import styled from "styled-components";

export const MUIBOXSection = styled.div`
  //display
  display: flex;
  justify-content: space-around;

  height: 100vh;
`;

export const MUIFeatures = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* background-color: rgb(0, 30, 60); */
  background-color: ${(props) => props.theme.background.default};
  color: ${(props) => props.theme.textColors.primary};
  width: 100%;
`;

export const MUIComponents = styled.div`
  /* background-color: rgb(10, 25, 41); */
  background-color: ${(props) => props.theme.background.paper};

  width: 100%;
`;

export const MUIFeaturesContainer = styled.div`
  margin: auto 100px;
`;

export const Heading = styled.h1`
  font-size: 70px;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 16px;
  color: rgb(178, 186, 194);

  margin-bottom: 20px;
`;

export const Span = styled.span`
  color: rgb(51, 153, 255);
`;

export const Button = styled.button`
  color: white;
  padding: 20px;
  border-radius: 10px;
  background-color: rgb(51, 153, 255);
  border: 0px none;
  border-color: rgb(51, 153, 255);
  color: white;
  cursor: pointer;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0px;
  line-height: 1.3125;
  font-size: 16px;
  outline: currentcolor none 0px;

  &:hover {
    box-shadow: none;
    text-decoration: none;
    background-color: rgb(0, 89, 178);
  }
`;
