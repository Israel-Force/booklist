import React, { useContext } from "react";
import { BookContext } from "../context/BooklistContext";
import { ThemeContext } from "../context/ThemeContext";

export default function Book({ title, author, id }) {
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
  const { dispatch } = useContext(BookContext);

  return (
    <div>
      <li
        style={{ background: design.bookBox }}
        onClick={() => dispatch({ type: "REMOVE_BOOK", id })}
      >
        <div className="title">{title}</div>
        <div className="author">{author}</div>
      </li>
    </div>
  );
}
