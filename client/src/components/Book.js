import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { UpdateModal } from "../components/UpdateModal";

export const Book = ({ book }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { deleteBook } = useContext(GlobalContext);

    return (
        <li className={book.title}>
            <h3>{book.title}</h3>
            <span>{book.author}</span>
            <p>{book.description}</p>
            <button onClick={() => setIsOpen(true)} className="btn update-btn">
                Update
            </button>
            <UpdateModal open={isOpen} onClose={() => setIsOpen(false)} />

            <button
                onClick={() => deleteBook(book._id)}
                className="btn delete-btn"
            >
                Delete
            </button>
        </li>
    );
};
