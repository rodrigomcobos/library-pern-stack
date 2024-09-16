// DEPENDENCIES
// import express and create an instance of it
// import Sequelize which is an ORM for SQL databases
// import path to help with file paths
// import cors to enable cross-origin resource sharing
const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
const path = require('path');
const cors = require('cors');

// CONFIGURATION / MIDDLEWARE
// load environment variables from .env file
// enable cross-origin resource sharing
// enable JSON and urlencoded request bodies
// serve static files from the build folder
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../build')));

// CONTROLLERS
// import the books controller which handles requests to /api/books
const booksController = require('./controllers/books_controller');
app.use('/api/books', booksController);

// LISTEN
// start the server on the specified port
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

// CATCH ALL
// for any other requests, send the index.html file from the build folder
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});
