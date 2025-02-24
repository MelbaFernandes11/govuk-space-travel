// Import express
const express = require('express');

// Create an instance of express
const app = express();

// Set the port
const port = 3000;

// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello, welcome to the GOVUK Space Travel app!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});



