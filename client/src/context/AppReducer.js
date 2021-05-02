// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case "GET_BOOKS":
            return {
                ...state,
                loading: false,
                books: action.payload,
            };
        case "DELETE_BOOK":
            return {
                ...state,
                books: state.books.filter(
                    (book) => book._id !== action.payload
                ),
            };
        case "BOOK_ERROR":
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};
