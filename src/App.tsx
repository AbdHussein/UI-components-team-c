import { useState, lazy, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/Theme/Theme";
import AvatarGroup from "./components/AvatarGroup";
import Avatar from "./components/Avatar";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <Suspense fallback={<></>}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <AvatarGroup variant="rounded">
          <Avatar>1</Avatar>
          <Avatar>2</Avatar>
          <Avatar>3</Avatar>
          <Avatar>4</Avatar>
          <Avatar>5</Avatar>
          <Avatar>6</Avatar>
          <Avatar>7</Avatar>
        </AvatarGroup>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
