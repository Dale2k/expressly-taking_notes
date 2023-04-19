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
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

// GET * should return the index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

//GET /api/notes should read the db.json file and return all saved notes as JSON.
app.get("/api/notes", (req, res) => {
  fs.readFile(path.join(__dirname, "./db/db.json"), (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

// POST /api/notes

//  Port
app.listen(PORT, () =>
  console.log(`The server is now listening on PORT ${PORT}`)
);
