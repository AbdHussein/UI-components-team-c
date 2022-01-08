import styled from "styled-components";

interface Props{
  fullScreen?: boolean
}

export const DialogChildren = styled('div')<Props>`
  width: 100%;
  margin:  25px 0;
  max-height: 70vh;
  overflow: auto;
  /* overflow-y: scroll; */
`;
