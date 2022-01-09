import {
  HeaderItem,
  ItemStyle,
  LinkStyle,
  ListComponentsContiner,
  MneuContiner,
} from "../LeftSideCompoentsPage.styled";

export default function ListOfComponents() {
  return (
    <MneuContiner>
      <ListComponentsContiner>
        <ItemStyle>
          <HeaderItem>components</HeaderItem>
        </ItemStyle>
        <ItemStyle>
          <LinkStyle to={"/components/card"}>card </LinkStyle>
        </ItemStyle>
        <ItemStyle>
          <LinkStyle to={"/components/skeleton"}>skeleton </LinkStyle>
        </ItemStyle>
        <ItemStyle>
          <LinkStyle to={"/components/dialog"}>dialog </LinkStyle>
        </ItemStyle>
        <ItemStyle>
          <LinkStyle to={"/components/avatar"}>avatar </LinkStyle>
        </ItemStyle>
        <ItemStyle>
          <LinkStyle to={"/components/typeography"}>typeography </LinkStyle>
        </ItemStyle>
      </ListComponentsContiner>
    </MneuContiner>
  );
}
