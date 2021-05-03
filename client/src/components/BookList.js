import React, { useContext, useEffect } from "react";
import { Book } from "./Book";

import { GlobalContext } from "../context/GlobalState";

export const BookList = () => {
    const { books, getBooks } = useContext(GlobalContext);

    useEffect(() => {
        getBooks();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <h3>Books</h3>
            <ul className="list">
                {books.map((book) => (
                    <Book key={book._id} book={book} />
                ))}
            </ul>
        </>
    );
};
