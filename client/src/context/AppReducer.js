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
            return state.books.map((book) => {
                if (book._id === payload._id) {
                    return {
                        ...book,
                        ...payload,
                    };
                } else {
                    return state;
                }
            });

        case "GET_BOOK":
            return {
                ...state,
                loading: false,
                books: payload,
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
