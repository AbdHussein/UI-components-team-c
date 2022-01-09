import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  outline: 0px;
  margin: auto;
  -webkit-box-pack: center;
  padding: 24px;
  background-color: ${({ theme }) => theme.background.default};
  border: 1px solid ${({ theme }) => theme.textColors.secondary};
  border-radius: 0.5em;
  border-image: initial;
  
`;
