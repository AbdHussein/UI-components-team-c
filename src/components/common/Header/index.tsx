import IconButton from "../IconButton";
import { useTheme } from "styled-components";
import { HeaderLayout, IconContainer } from "./styles";
import GithubIcon from "../IconButton/Icons/GithubIcon";
import DarkThemeIcon from "../IconButton/Icons/DarkThemeIcon";
// import LightThemeIcon from "../common/Icons/LightThemeIcon";
import Logo from "../Logo";


const Index = () => {
  const theme = useTheme();
  return (
    <HeaderLayout>
      <Logo />
      <IconContainer>
        <IconButton>
          <GithubIcon fill={theme.colors.info} />
        </IconButton>
        <IconButton>
          <DarkThemeIcon fill={theme.colors.info} />
        </IconButton>
        {/* <IconButton>
          <LightThemeIcon />
        </IconButton> */}
      </IconContainer>
    </HeaderLayout>
  );
};

export default Index;
