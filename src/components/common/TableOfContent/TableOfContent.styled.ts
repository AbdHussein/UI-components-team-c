import styled from "styled-components";

export const Container = styled.div`
  top: 60px;
  width: 240px;
  right: 0;
  position: fixed;
  height: calc(100vh - 70px);
  overflow-y: auto;
  padding: 16px 32px 16px 0px;
  display: none;
  padding-inline: 50px;
  @media (min-width: 600px) {
    display: block;
  }
`;

export const ContentList = styled.ul`
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0;
  font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 400;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const ContentListItem = styled.ul<{
  active?: boolean;
  current?: boolean;
}>`
  /* background-color: ${(props) => (props.current ? "red" : "")}; */
  & a {
    text-decoration: none;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: 0.8125rem;
    padding: 0px 8px 0px 10px;
    margin: 4px 0px 8px;
    cursor: pointer;
    border-left: 1px solid
      ${({ theme, active }) => (active ? theme.colors.primary : "transparent")};
    box-sizing: border-box;
    font-weight: 500;
    color: ${({ theme, active }) =>
      active ? theme.colors.primary : theme.textColors.secondary};
    color: ${(props) => (props.current ? props.theme.colors.primary : "")};
  }
`;
