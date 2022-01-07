import styled from "styled-components";

interface Props {
  fontS?: string;
  padding?: string;
}

export const CustomButton = styled("button")<Props>`
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ fontS }) => (fontS ? fontS : "16px")};
  font-weight: 600;
  border: 2px solid gray;
  background-color: white;
  transition: all 0.2s;
  padding: ${({ padding }) => (padding ? padding : "10px 16px")};
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background-color: rgba(232, 232, 232, 1);
  }
`;
