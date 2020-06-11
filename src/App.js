import React, { useContext } from "react";
import Booklist from "./components/Booklist";
import Navbar from "./components/Navbar";
import Bookform from "./components/Bookform";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
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
    <div className="App" style={{ background: design.app }}>
      <Navbar />
      <Booklist />
      <Bookform />
    </div>
  );
};

export default App;
