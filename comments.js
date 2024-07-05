// create a web server
const express = require('express');
const app = express();
const port = 3000;
// use the express middleware to parse the request body
app.use(express.json());
// create a global array to store the comments
let comments = [];
// create a GET route for the comments
app.get('/comments', (req, res) => {
  res.json(comments);
});
// create a POST route for the comments
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.status(201).send();
});
// start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});