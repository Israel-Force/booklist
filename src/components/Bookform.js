import React, { useContext, useState } from "react";
import { BookContext } from "../context/BooklistContext";
import { ThemeContext } from "../context/ThemeContext";

export default function Bookform() {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_BOOK",
      book: {
        title,
        author,
      },
    });
    setTitle("");
    setAuthor("");
  };

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ background: design.formText }}
      />
      <input
        type="text"
        placeholder="book author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        style={{ background: design.formText }}
        required
      />
      <input type="submit" placeholder="book title" value="Add book" />
    </form>
  );
}
