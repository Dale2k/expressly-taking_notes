// configuration
const express = require("express");
const uuid = require("./public/uuid");
const fs = require("fs");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3001;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

// GET /notes should return the notes.html file

// GET * should return the index.html file.

//GET /api/notes should read the db.json file and return all saved notes as JSON.

// Delete route

// POST /api/notes

//  Port
app.listen(PORT, () =>
  console.log(`The server is now listening on PORT ${PORT}`)
);
