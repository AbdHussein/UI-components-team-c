import styled from "styled-components";

export const Group = styled.div.attrs((props) => ({
  className: props.className,
}))`
  display: flex;
  flex-direction: row-reverse;

  &.circular {
    border-radius: 50%;
  }

  &.rounded {
    border-radius: 5px;
  }

  &.square {
    border-radius: 0px;
  }
`;
