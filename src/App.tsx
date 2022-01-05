import { useState, lazy, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/Theme/Theme";
import Avatar from "./components/Avatar";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <Suspense fallback={<></>}>
      <ThemeProvider
        theme={theme === "light" ? lightTheme : darkTheme}
      ></ThemeProvider>
    </Suspense>
  );
}

export default App;
