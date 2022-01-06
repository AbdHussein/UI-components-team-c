import { useState, lazy, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/Theme/Theme";
import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./screens/NotFoundPage";
import ComponentsPage from "./screens/ComponentsPage";
import HomePage from "./screens/HomePage";
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

    // <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    //   <div className="App">
    //     <Routes>
    //       <Route path="/" element={<HomePage />} />
    //       <Route path="/components/:name" element={<ComponentsPage />} />
    //       <Route path="*" element={<NotFoundPage />} />
    //     </Routes>
    //   </div>
    // </ThemeProvider>
  );
}

export default App;
