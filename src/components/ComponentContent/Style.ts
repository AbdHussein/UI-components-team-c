import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin-left: auto;
  box-sizing: border-box;
  margin-right: auto;
  display: block;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 100px;
  font-family: Arial;
  max-width: 105ch;
  position: relative;

  height: 10000px;
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
  /* background-color: #fff; */
  color: #1a2027;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  background-color: #fff;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  position: fixed;
  z-index: 1100;
  top: 0;
  left: auto;
  right: 0;
  background-color: #007fff;
  color: #fff;
  padding: 5px 0px 5px 8px;
  -webkit-transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: none;
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border-style: solid;
  border-color: #e7ebf0;
  border-width: 0;
  border-bottom-width: thin;
  background: rgba(255, 255, 255, 0.7);
  color: #2d3843;

  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  flex-shrink: 0;
  position: fixed;
  z-index: 1100;
  top: 0px;
  left: auto;
  right: 0px;
  padding: 5px 0px 5px 8px;
  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: none;
  backdrop-filter: blur(20px);
  border-style: solid;
  /* border-color: rgba(194, 224, 255, 0.08); */
  border-color: ${(props) => props.theme.background.default} 70%;
  border-width: 0px 0px thin;
  /* background: rgba(10, 25, 41, 0.7); */
  /* color: rgb(160, 170, 180); */
  color: ${(props) => props.theme.textColors.secondary};

  @media (min-width: 1200px) {
    width: calc(100% - 240px);
  }

  & > div {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
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
