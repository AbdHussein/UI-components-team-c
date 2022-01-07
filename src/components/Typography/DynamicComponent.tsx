import styled from "styled-components";

interface IAttributes {
  align?: string;
  gutterBottom?: boolean;
}

export const H1 = styled.h1<IAttributes>`
  margin-bottom: ${(props) => (props.gutterBottom ? "30px" : "0px")};
  text-align: ${(props) => props.align};
`;

export const H2 = styled.h2<IAttributes>`
  margin-bottom: ${(props) => (props.gutterBottom ? "30px" : "0px")};
  text-align: ${(props) => props.align};
`;

export const H3 = styled.h3<IAttributes>`
  margin-bottom: ${(props) => (props.gutterBottom ? "30px" : "0px")};
  text-align: ${(props) => props.align};
`;

export const H4 = styled.h4<IAttributes>`
  margin-bottom: ${(props) => (props.gutterBottom ? "30px" : "0px")};
  text-align: ${(props) => props.align};
`;

export const H5 = styled.h5<IAttributes>`
  margin-bottom: ${(props) => (props.gutterBottom ? "30px" : "0px")};
  text-align: ${(props) => props.align};
`;

export const H6 = styled.h6<IAttributes>`
  margin-bottom: ${(props) => (props.gutterBottom ? "30px" : "0px")};
  text-align: ${(props) => props.align};
`;

export const Button = styled.button<IAttributes>`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75rem;
  letter-spacing: 0.02857em;
  text-transform: uppercase;

  margin-bottom: ${(props) => (props.gutterBottom ? "30px" : "0px")};
  text-align: ${(props) => props.align};
`;

export const SubTitle1 = styled.h6<IAttributes>`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.75rem;
  letter-spacing: 0.009383em;

  margin-bottom: ${(props) => (props.gutterBottom ? "30px" : "0px")};
  text-align: ${(props) => props.align};
`;

export const SubTitle2 = styled.h6<IAttributes>`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.57rem;
  letter-spacing: 0.00174em;

  margin-bottom: ${(props) => (props.gutterBottom ? "30px" : "0px")};
  text-align: ${(props) => props.align};
`;

export const Body1 = styled.p<IAttributes>`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.00938em;

  margin-bottom: ${(props) => (props.gutterBottom ? "30px" : "0px")};
  text-align: ${(props) => props.align};
`;
export const Body2 = styled.p<IAttributes>`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.01071em;

  margin-bottom: ${(props) => (props.gutterBottom ? "30px" : "0px")};
  text-align: ${(props) => props.align};
`;

export const Caption = styled.span<IAttributes>`
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.66;
  letter-spacing: 0.03333em;

  margin-bottom: ${(props) => (props.gutterBottom ? "30px" : "0px")};
  text-align: ${(props) => props.align};
`;

export const Overline = styled.span<IAttributes>`
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 2.66;
  letter-spacing: 0.08333em;
  text-transform: uppercase;

  margin-bottom: ${(props) => (props.gutterBottom ? "30px" : "0px")};
  text-align: ${(props) => props.align};
`;
