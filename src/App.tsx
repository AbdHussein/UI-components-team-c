import { useState, useEffect, useCallback, lazy, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import SuspenseFallback from "./components/common/SuspenseFallback/SuspenseFallback";
import { lightTheme, darkTheme } from "./helpers/Theme";
import { GlobalStyles } from "./helpers/globalStyle";

const HomePage = lazy(() => import("./screens/HomePage"));
const NotFoundPage = lazy(() => import("./screens/NotFoundPage"));
const ComponentsPage = lazy(() => import("./screens/ComponentsPage"));


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
    <Suspense fallback={<SuspenseFallback />}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles {...(theme === "dark" ? darkTheme : lightTheme)} />
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage toggleTheme={toggleTheme} />} />
            <Route
              path="/components/:name"
              element={<ComponentsPage toggleTheme={toggleTheme} />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
