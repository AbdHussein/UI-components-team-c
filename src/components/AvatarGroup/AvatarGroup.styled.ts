import styled from "styled-components";

export const Group = styled.div.attrs((props) => ({
  className: props.className,
}))`
  display: flex;
  flex-direction: row;

  &.circular:nth-child(n) {
    border-radius: 50%;
  }

  &.rounded:nth-child(n) {
    border-radius: 5px;
  }

  &.square:nth-child(n) {
    border-radius: 0px;
  }
`;
