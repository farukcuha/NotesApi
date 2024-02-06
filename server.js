// app.js
const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

let Schema = mongoose.Schema
let ObjectId = Schema.ObjectId;

const noteSchema = new Schema({
  id: ObjectId,
  title: String,
  createdTime: { type: Date, default: Date.now() }
}, {
  versionKey: false
});

const Note = mongoose.model('Note', noteSchema);

const corsOpts = {
  origin: '*',
  credentials: true,
  methods: ['GET','POST','HEAD','PUT','PATCH','DELETE'],
  allowedHeaders: ['Content-Type'],
  exposedHeaders: ['Content-Type']
};
app.use(cors(corsOpts))

// Middleware
app.use(bodyParser.json());

app.get('/', async (req, res) => {
  res.status(200).json({ message: "Server running!" })
})

// Get all notes
app.get('/notes', async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(
      {
        size: notes.length,
        data: notes
      }
    );
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Insert a new note
app.post('/notes', async (req, res) => {
  try {
    const { title } = req.body;
    const newNote = new Note({ title });
    await newNote.save();
    res.status(201).send()
  } catch (error) {
    res.status(500).json({ error });
  }
});

// Delete a note
app.delete('/notes/:id', async (req, res) => {
  try {
    const noteId = req.params.id;
    await Note.findByIdAndDelete(noteId);
    res.send('Note deleted successfully!');
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Clear all notes
app.post('/notes/clear', async (req, res) => {
  try {
    await Note.deleteMany({});
    res.send('All notes deleted successfully!');
  } catch (error) {
    res.status(500).json({ error });
  }
});

// Start the server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
