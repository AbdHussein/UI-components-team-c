import IconButton from "../common/IconButton";
import { HeaderLayout, IconContainer } from "./styles";
import GithubIcon from "../common/Icons/GithubIcon";
import DarkThemeIcon from "../common/Icons/DarkThemeIcon";
// import LightThemeIcon from "../common/Icons/LightThemeIcon";

import Logo from "../common/Logo/Logo";

const Header = () => {
  return (
    <HeaderLayout>
      <Logo />

      <IconContainer>
        <IconButton>
          <GithubIcon />
        </IconButton>

        <IconButton>
          <DarkThemeIcon />
        </IconButton>
        {/* <IconButton>
          <LightThemeIcon />
        </IconButton> */}
      </IconContainer>
      
    </HeaderLayout>
  );
};

export default Header;
