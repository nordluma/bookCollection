import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddBook = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");

    const { addBook } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newBook = {
            title,
            author,
            description,
        };

        addBook(newBook);
    };

    return (
        <>
            <h3>Add new book</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter title"
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="author">Author</label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        placeholder="Enter author"
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter description"
                        cols="30"
                        rows="10"
                    ></textarea>
                </div>
                <button className="btn">Add book</button>
            </form>
        </>
    );
};
