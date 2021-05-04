import React, { useState } from "react";
import { Header } from "./components/Header";
import { BookList } from "./components/BookList";
import { AddBook } from "./components/AddBook";

import { GlobalProvider } from "./context/GlobalState";
import "./App.css";

function App() {
    const [showAddModal, setShowAddModal] = useState(false);
    return (
        <GlobalProvider>
            <Header />
            <div className="container">
                <button
                    onClick={() => setShowAddModal(true)}
                    className="btn main-btn"
                >
                    Add New book
                </button>
                <AddBook
                    open={showAddModal}
                    onClose={() => setShowAddModal(false)}
                />
                <BookList />
            </div>
        </GlobalProvider>
    );
}

export default App;
