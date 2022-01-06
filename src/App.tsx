import React, { useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/Theme/Theme";
import DialogEx from "./components/Dialog/DialogEx";


function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div className="App"> App
        <DialogEx />
      </div>
    </ThemeProvider>
  );
}

export default App;
