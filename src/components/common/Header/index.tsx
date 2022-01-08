import IconButton from "../IconButton";
import { useTheme } from "styled-components";
import { HeaderLayout, IconContainer } from "./styles";
import GithubIcon from "../IconButton/Icons/GithubIcon";
import DarkThemeIcon from "../IconButton/Icons/DarkThemeIcon";
import LightThemeIcon from "../IconButton/Icons/LightThemeIcon";
import Logo from "../Logo";

const Index = ({ toggleTheme }: { toggleTheme: (theme: string) => void }) => {
  const theme = useTheme();
  return (
    <HeaderLayout>
      <Logo />
      <IconContainer>
        <IconButton>
          <GithubIcon fill={theme.colors.info} />
        </IconButton>
        <IconButton>
          {theme.type === "light" ? (
            <DarkThemeIcon
              fill={theme.colors.info}
              onClick={() => toggleTheme("dark")}
            />
          ) : (
            <LightThemeIcon
              fill={theme.colors.info}
              onClick={() => toggleTheme("light")}
            />
          )}
        </IconButton>
      </IconContainer>
    </HeaderLayout>
  );
};

export default Index;
