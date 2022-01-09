import IconButton from "../IconButton";
import { useTheme } from "styled-components";
import { HeaderLayout, IconContainer } from "./styles";
import GithubIcon from "../IconButton/Icons/GithubIcon";
import DarkThemeIcon from "../IconButton/Icons/DarkThemeIcon";
// import LightThemeIcon from "../common/Icons/LightThemeIcon";
import Logo from "../Logo";
import LightThemeIcon from "../IconButton/Icons/LightThemeIcon";

interface IProps {
  themee: string;
  toggleTheme: () => void;
}

const Index = ({ themee, toggleTheme }: IProps) => {
  const theme = useTheme();
  return (
    <HeaderLayout>
      <Logo />
      <IconContainer>
        <IconButton>
          <GithubIcon fill={theme.colors.info} />
        </IconButton>
        {themee === "light" ? (
          <IconButton onClick={toggleTheme}>
            <DarkThemeIcon fill={theme.colors.primary} />
          </IconButton>
        ) : (
          <IconButton onClick={toggleTheme}>
            <LightThemeIcon />
          </IconButton>
        )}
      </IconContainer>
    </HeaderLayout>
  );
};

export default Index;
