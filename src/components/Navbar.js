import React, { useContext } from "react";
import { BookContext } from "../context/BooklistContext";
import Burger from "./Burger";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { books } = useContext(BookContext);

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
    <div className="navbar" style={{ background: design.nav }}>
      <Burger />
      <h1>Your Reading List</h1>
      <p>Currently you have {books.length} books to get through</p>
    </div>
  );
}
