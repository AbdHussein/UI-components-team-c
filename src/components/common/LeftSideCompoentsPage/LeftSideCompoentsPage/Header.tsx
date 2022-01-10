import Logo from "../../Logo";
import { HeaderContiner, SpanStyle } from "../LeftSideCompoentsPage.styled";

export default function Header() {
  return (
    <HeaderContiner>
      <Logo />
      <SpanStyle>v1.0.0</SpanStyle>
    </HeaderContiner>
  );
}
