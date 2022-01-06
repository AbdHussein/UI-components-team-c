import styled from "styled-components";

export const Group = styled.div<{ variant?: string }>`
  display: flex;
  flex-direction: row;
  ${({ variant }) =>
    variant === "circular"
      ? `&.circular:nth-child(n) {
        border-radius: 50%;
      }`
      : variant === "rounded"
      ? `&.rounded:nth-child(n) {
        border-radius: 5px;
      }`
      : variant === "square"
      ? `&.square:nth-child(n) {
        border-radius: 0px;
      }`
      : ""}
`;
