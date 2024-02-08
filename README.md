# This is a completely ChatGPT product, I just copied-pasted!👹😈

This is a simple RESTful API for a note-taking application built using Node.js, Express.js, and MongoDB. It allows users to perform basic CRUD operations on notes.

## Features

- **Create**: Add a new note with a title.
- **Read**: Retrieve all notes or get a specific note by ID.
- **Update**: Not implemented in this version.
- **Delete**: Remove a note by ID.
- **Clear**: Delete all notes from the database.

## Setup

To run this application locally, follow these steps:

1. Clone this repository to your local machine.
2. Install dependencies by running `npm install`.
3. Create a `.env` file in the root directory and add your MongoDB connection string as `MONGO_DB_URL`.
4. Start the server by running `npm start`.
5. The server will start running on port 3000 by default, or you can specify a different port using the `PORT` environment variable.

## Endpoints

### `GET /`

Returns a simple message indicating that the server is running.

### `GET /notes`

Returns all notes stored in the database.

### `POST /notes`

Adds a new note to the database. Requires a JSON object with a `title` field in the request body.

### `DELETE /notes/:id`

Deletes a note from the database by its ID.

### `POST /notes/clear`

Deletes all notes from the database.

## Dependencies

- [Express.js](https://expressjs.com/): Web application framework for Node.js.
- [Mongoose](https://mongoosejs.com/): MongoDB object modeling tool.
- [body-parser](https://www.npmjs.com/package/body-parser): Middleware for parsing incoming request bodies.
- [dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from a `.env` file.

It is live on render, dont tell anyone!
https://notes-api-cz2h.onrender.com
