import styled from "styled-components";

interface Props {
  styles?: {};
}
export const Title = styled("h2")<Props>`
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 600;
  /* font-size: 20px; */
  line-height: 1.6;
  letter-spacing: 0.0075em;
  padding-bottom: 7px;
  width: 100%;
  border-bottom: 1px solid gray;
`;
