import React, { createContext, useReducer, useEffect } from "react";
import { themeReducer } from "../reducer/reducer";

export const ThemeContext = createContext();

export function ThemeContextProvider(props) {
  const [theme, dispatch] = useReducer(
    themeReducer,
    {
      isPurple: true,
      purple: {
        bg: "#553055",
        app: "#4c2a4c",
        nav: "#6d3d6d",
        themeBox: "#3c1f3c",
        bookBox: "#6d3d6d",
        formText: "#3c1f3c",
        h3: "#6d3d6d",
      },
      isDark: false,
      dark: {
        bg: "#333333",
        app: "#252526",
        nav: "#383838",
        themeBox: "#1e1e1e",
        bookBox: "#383838",
        formText: "#1e1e1e",
        h3: "#3838338",
      },
      isBrown: false,
      brown: {
        bg: "#362712",
        app: "#221a0f",
        nav: "#453928",
        themeBox: "#19130c",
        bookBox: "#453928",
        formText: "#19130c",
        h3: "#453928",
      },
      isRed: false,
      red: {
        bg: "#770000",
        app: "#580000",
        nav: "#431919",
        themeBox: "#300000",
        bookBox: "#431919",
        formText: "#300000",
        h3: "#431919",
      },
      isGreen: false,
      green: {
        bg: "#005a6f",
        app: "#003847",
        nav: "#1a343c",
        themeBox: "#00212b",
        bookBox: "#1a343c",
        formText: "#00212b",
        h3: "#1a343c",
      },
    },
    () => {
      const themeData = localStorage.getItem("theme");
      return JSON.parse(themeData);
    }
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
