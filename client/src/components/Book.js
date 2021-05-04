import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { UpdateModal } from "../components/UpdateModal";

export const Book = ({ book }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showDescription, setShowDescription] = useState(false);
    const { deleteBook } = useContext(GlobalContext);

    if (!showDescription) {
        return (
            <li className={book.title}>
                <h3>{book.title}</h3>
                <span>{book.author}</span>
                <button
                    onClick={() => setShowDescription(true)}
                    className="btn show-btn"
                >
                    Show more
                </button>
            </li>
        );
    }

    return (
        <>
            <li className={book.title}>
                <h3>{book.title}</h3>
                <span>{book.author}</span>
                <p>{book.description}</p>
                <UpdateModal
                    book={book}
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                />
            </li>
            <div className="btn-container">
                <div className="btn-inner-container">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="btn update-btn"
                    >
                        Update
                    </button>
                </div>
                <div className="btn-inner-container">
                    <button
                        onClick={() => deleteBook(book._id)}
                        className="btn delete-btn"
                    >
                        Delete
                    </button>
                </div>
                <div className="btn-inner-container">
                    <button
                        onClick={() => setShowDescription(false)}
                        className="btn close-btn"
                    >
                        Close
                    </button>
                </div>
            </div>
        </>
    );
};
