import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 70px auto 0;
  box-sizing: border-box;
  padding: 30px 16px 0;
  justify-content: space-between;
  background-color: ${(props) => props.theme.background.default};
  color: ${(props) => props.theme.textColors.primary};
  & > div {
    width: 100%;
  }
  @media (min-width: 1200px) {
    padding-left: 60px;
    padding-right: 60px;
  }
  @media (min-width: 600px) {
    width: calc(100% - 210px);
  }
  @media (min-width: 1200px) {
    padding-left: 64px;
    padding-right: 64px;
  }
  @media (min-width: 900px) {
    padding-left: 16px;
    padding-right: 16px;
  }
  @media (min-width: 600px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const Header = styled.header`
  display: flex;
  position: fixed;
  z-index: 1100;
  top: 0;
  right: 0;
  width: 100%;
  padding: 5px 0px 5px 8px;
  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  flex-direction: column;
  backdrop-filter: blur(20px);
  border-style: solid;
  border-width: 0px 0px thin;
  background: ${(props) => props.theme.background.default}bb;
  border-color: ${(props) =>
    props.theme.background.default === "#ffffff"
      ? "#e7ebf0"
      : "rgba(194, 224, 255, 0.08)"};
  color: ${(props) => props.theme.colors.primary};

  @media (min-width: 1200px) {
    width: calc(100% - 240px);
  }

  & > div {
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    min-height: 48px;
    @media (min-width: 600px) {
      padding-left: 24px;
      padding-right: 24px;
    }
  }
`;
