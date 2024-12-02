// Create web server
// Create a new web server using express.
const express = require("express");
const app = express();
const PORT = 3000;

// Set up the server to accept JSON data
app.use(express.json());

// Create an array to store the comments
const comments = [];

// Create a new comment
app.post("/comments", (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.status(201).send(comment);
});

// Get all comments
app.get("/comments", (req, res) => {
  res.status(200).send(comments);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
