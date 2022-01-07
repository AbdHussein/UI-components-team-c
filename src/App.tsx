import { useState, useEffect, useCallback, lazy, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./helpers/Theme";
import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./screens/NotFoundPage";
import ComponentsPage from "./screens/ComponentsPage";
import HomePage from "./screens/HomePage";
import avatar from "./assets/avatar.jpg";
import "./App.css";
import Avatar from "./components/Avatar";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = useCallback(() => {
    if (theme === "dark") {
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  }, [theme]);

  useEffect(() => {
    let theme_ = localStorage.getItem("theme");
    if (theme_) {
      setTheme(theme_);
    }
  }, []);

  return (
    <Suspense fallback={<></>}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Avatar variant="circular" src={avatar}>
          7
        </Avatar>
        {/* <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/components/:name" element={<ComponentsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div> */}
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
