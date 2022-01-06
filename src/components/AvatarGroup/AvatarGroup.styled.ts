import styled from "styled-components";

/**
 *
 * 'medium' | 'small'
 */
export const Group = styled.div<{
  variant?: string;
  spacing?: string | number;
}>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: ${({ spacing }) =>
    typeof spacing === "string"
      ? (spacing === "medium" && `5px`) || (spacing === "small" && `2.5px`)
      : `${spacing}px`};

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
      : ""};
`;
