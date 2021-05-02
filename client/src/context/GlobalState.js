import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
    books: [],
    error: null,
    loading: true,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    async function getBooks() {
        try {
            const res = await fetch("/api/books");

            dispatch({
                type: "GET_BOOKS",
                payload: res.data.data,
            });
        } catch (err) {
            dispatch({
                type: "BOOK_ERROR",
                payload: err.response.data.error,
            });
        }
    }

    // Update book

    // Delete book
    async function deleteBook(id) {
        try {
            await fetch(`/api/books/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json",
                },
            });

            dispatch({
                type: "DELETE_BOOK",
                payload: id,
            });
        } catch (err) {
            dispatch({
                type: "BOOK_ERROR",
                payload: err.response.data.error,
            });
        }
    }

    // Add book
    async function addBook(book) {
        const requestOptions = {
            method: "POST",
            headers: { "Content-type": "application" },
            body: book,
        };

        try {
            const res = await fetch("/api/books", requestOptions);

            dispatch({
                type: "ADD_BOOK",
                payload: res.data.data,
            });
        } catch (err) {
            dispatch({
                type: "BOOK_ERROR",
                payload: err.response.data.error,
            });
        }
    }

    return (
        <GlobalContext.Provider
            value={{
                books: state.books,
                error: state.error,
                loading: state.loading,
                getBooks,
                deleteBook,
                addBook,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
