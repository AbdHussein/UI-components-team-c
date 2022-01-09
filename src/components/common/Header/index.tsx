import IconButton from "../IconButton";
import { useTheme } from "styled-components";
import { HeaderLayout, IconContainer } from "./styles";
import GithubIcon from "../IconButton/Icons/GithubIcon";
import DarkThemeIcon from "../IconButton/Icons/DarkThemeIcon";
import LightThemeIcon from "../IconButton/Icons/LightThemeIcon";
import Logo from "../Logo";

interface IProps {
  toggleTheme: (theme: string) => void;
}

const Index = ({ toggleTheme }: IProps) => {
  const theme = useTheme();
  return (
    <HeaderLayout>
      <Logo />
      <IconContainer>
        <IconButton
          component={"a"}
          href="https://github.com/mohammedshamia/UI-components-team-c"
          target="_blank"
        >
          <GithubIcon fill={theme.colors.info} />
        </IconButton>
        {theme.type === "light" ? (
          <IconButton onClick={() => toggleTheme("dark")}>
            <DarkThemeIcon fill={theme.colors.primary} />
          </IconButton>
        ) : (
          <IconButton onClick={() => toggleTheme("light")}>
            <LightThemeIcon fill={theme.colors.primary} />
          </IconButton>
        )}
      </IconContainer>
    </HeaderLayout>
  );
};

export default Index;
