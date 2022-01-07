import styled from "styled-components";

interface Props{
  fullScreen?: boolean
}

export const DialogChildren = styled('div')<Props>`
  width: 100%;
  margin-bottom:  25px;
`;
