import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Book = ({ book }) => {
    const { deleteBook } = useContext(GlobalContext);

    return (
        <li className={book.title}>
            <h3>{book.title}</h3>
            <span>{book.author}</span>
            <p>{book.description}</p>
            <button onClick={() => deleteBook(book._id)} className="delete-btn">
                x
            </button>
        </li>
    );
};
