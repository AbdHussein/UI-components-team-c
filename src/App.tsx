import React, { useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/Theme/Theme";
import Typography from "./components/Typography";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div className="App"></div>
    </ThemeProvider>
  );
}

export default App;
