import React, { useContext } from "react";
import { BookContext } from "../context/BooklistContext";
import Book from "./Book";

const Booklist = () => {
  const { books } = useContext(BookContext);

  return books.length ? (
    <div className="bookcontainer">
      <ul>
        {books.map((book) => (
          <Book key={book.id} {...book} />
        ))}
      </ul>
    </div>
  ) : (
    <div className="empty">No books to read at the moment.</div>
  );
};

export default Booklist;
