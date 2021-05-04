# Book Collection (MERN)

> Full stack Book collection

## Usage

A single page application for users see and add information about books to a collection. All users are able to see, add new ones, update and delete all books in the database.

## Installation

```
The project does not include env variables.
Create .env file in config folder with variables NODE_ENV, PORT and MONGO_URI
```

```
 npm install
 cd client install
 cd ..

 # Run whole project (Front and Backend)
 npm run dev

 # Backend only
 npm run server

 # Frontend only
 npm run client

```

## API Documentation

### Routes

-   /api/books

    -   GET - Returns all books
    -   POST - Creates a new book

-   /api/books/:id

    -   PATCH - Update book
    -   DELETE - Delete book
