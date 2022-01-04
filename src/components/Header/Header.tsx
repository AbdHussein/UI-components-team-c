import IconButton from "../common/IconButton";
import { HeaderLayout, IconContainer } from "./styles";
import Github from "../common/Icons/Github";
import DarkTheme from "../common/Icons/DarkTheme";
// import LightTheme from "../common/Icons/LitheTheme";

import Logo from "../common/Logo/Logo";

const Header = () => {
  return (
    <HeaderLayout>
      <Logo />

      <IconContainer>
        <IconButton>
          <Github />
        </IconButton>

        <IconButton>
          <DarkTheme />
        </IconButton>
        {/* <IconButton>
          <LightTheme />
        </IconButton> */}
      </IconContainer>
      
    </HeaderLayout>
  );
};

export default Header;
