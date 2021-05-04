# Book Collection (MERN)

> Full stack Book collection

## Usage

```
The project does not include env variables.
Create .env file in config folder with variables NODE_ENV, PORT and MONGO_URI
```

## Installation

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
