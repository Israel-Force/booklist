import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeList() {
  const { theme, dispatch } = useContext(ThemeContext);
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

  const changeRed = () => dispatch({ type: "CHANGE_RED", isRed });
  const changeDark = () => dispatch({ type: "CHANGE_DARK", isDark });
  const changePurple = () => dispatch({ type: "CHANGE_PURPLE", isPurple });
  const changeBrown = () => dispatch({ type: "CHANGE_BROWN", isBrown });
  const changeGreen = () => dispatch({ type: "CHANGE_GREEN", isGreen });

  return (
    <div className="themeContainer" style={{ background: design.themeBox }}>
      <h5 className="themeTitle" style={{ borderColor: design.h3 }}>
        Change Theme
      </h5>
      <div className="themeSelection">
        <p onClick={changeRed}>Got a lot</p>
        <p onClick={changeDark}>Night consumption</p>
        <p onClick={changePurple}>Adding value</p>
        <p onClick={changeGreen}>Life</p>
        <p onClick={changeBrown}>Interesting</p>
      </div>
    </div>
  );
}
