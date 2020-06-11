import React, { useReducer } from "react";
import ThemeList from "./ThemeList";
import { burgerReducer } from "../reducer/reducer";

export default function Burger() {
  const [burger, dispatch] = useReducer(burgerReducer, { isBurger: false });

  const changeBurger = () =>
    dispatch({ type: "CHANGE_BURGER", isBurger: burger.isBurger });

  return (
    <div className="burgerContainer" onClick={changeBurger}>
      <div className="burger"></div>
      {burger.isBurger ? <ThemeList /> : null}
    </div>
  );
}
