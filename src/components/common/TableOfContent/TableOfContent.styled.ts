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
  @media (min-width: 600px) {
    display: block;
  }
`;

export const ContentList = styled.ul`
  font-size: 1rem;
  list-style: none;
`;

export const ContentListItem = styled.ul<{
  active?: boolean;
  current?: boolean;
}>`
  & a {
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    font-size: 0.8125rem;
    padding: 0px 8px 0px 10px;
    margin: 4px 0px 8px;
    white-space: nowrap;
    cursor: pointer;
    border-left: 1px solid
      ${(props) => (props.current ? props.theme.colors.primary : "transparent")};
    box-sizing: border-box;
    font-weight: 500;
    color: ${({ theme, current }) =>
      current ? theme.colors.primary : theme.textColors.secondary};
    color: ${(props) => (props.current ? props.theme.colors.primary : "")};
  }
`;
