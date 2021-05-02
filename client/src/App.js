import React from "react";
import { Header } from "./components/Header";
import { BookList } from "./components/BookList";
import { AddBook } from "./components/AddBook";

import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

function App() {
    return (
        <GlobalProvider>
            <Header />
            <div className="container">
                <BookList />
                <AddBook />
            </div>
        </GlobalProvider>
    );
}

export default App;
