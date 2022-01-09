import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  transition: height 3000ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-block: 10px;
`;

export const CodeWrapper = styled.pre`
  padding: 16px;
  background-color: rgb(0, 30, 60);
  color-scheme: dark;
  direction: ltr;
  border-radius: 10px;
  border: 1px solid rgb(19, 47, 76);
  color: rgb(255, 255, 255);
  overflow: auto;
  max-width: calc(100vw - 32px);
  width: 100%;
`;

export const Code = styled.code`
  direction: ltr;
  display: inline-block;
  font-size: 0.8125rem;
  line-height: 1.5;
  letter-spacing: 0px;
  color: rgb(255, 255, 255);
  font-family: Consolas, Menlo, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  font-weight: 400;
  -webkit-font-smoothing: subpixel-antialiased;
  border-radius: 5px;
`;
