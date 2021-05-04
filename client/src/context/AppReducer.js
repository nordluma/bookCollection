// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "GET_BOOKS":
            return {
                ...state,
                loading: false,
                books: payload,
            };
        case "UPDATE_BOOK":
            const updatedBook = payload;
            const updatedBooks = state.books.map((book) => {
                if (book._id === updatedBook._id) {
                    return updatedBook;
                }
                return state;
            });
            return {
                ...state,
                books: updatedBooks,
            };
        case "DELETE_BOOK":
            return {
                ...state,
                books: state.books.filter((book) => book._id !== payload),
            };
        case "ADD_BOOK":
            return {
                ...state,
                books: [...state.books, payload],
            };
        case "BOOK_ERROR":
            return {
                ...state,
                error: payload,
            };
        default:
            return state;
    }
};
