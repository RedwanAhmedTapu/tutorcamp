// ThemeContext.js
import  { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("default");

  const themes = {
    default: {
      primary: "#007bff",
      secondary: "#6c757d",
      success: "#28a745",
      danger: "#dc3545",
      warning: "#ffc107",
      info: "#17a2b8",
      light: "#f8f9fa",
      dark: "#343a40",
    },
    dark: {
      primary: "#375a7f",
      secondary: "#6c757d",
      success: "#4caf50",
      danger: "#f44336",
      warning: "#ff9800",
      info: "#2196f3",
      light: "#f8f9fa",
      dark: "#343a40",
    },
  };

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, themes, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
