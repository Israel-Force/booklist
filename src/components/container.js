import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import App from "../App";

export default function Container() {
  const { theme } = useContext(ThemeContext);
  const {
    isPurple,
    purple,
    isDark,
    dark,
    isRed,
    red,
    isGreen,
    green,
    isBrown,
    brown,
  } = theme;

  const design = isPurple
    ? purple
    : isDark
    ? dark
    : isRed
    ? red
    : isGreen
    ? green
    : isBrown
    ? brown
    : purple;
  return (
    <div
      className="container"
      style={{ height: "100vh", paddingTop: "20px", background: design.bg }}
    >
      <App />
    </div>
  );
}
