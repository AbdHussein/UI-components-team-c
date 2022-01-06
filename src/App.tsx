import React, { Component, useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/Theme/Theme";
import { Route, Routes } from "react-router";
import { NotFoundPage } from "./screens/NotFoundPage";
import ComponentsPage from "./screens/ComponentsPage";
import HomePage from "./screens/HomePage";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/components/:name" element={<ComponentsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
