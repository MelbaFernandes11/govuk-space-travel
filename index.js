// Import express
const express = require('express');

// Create an instance of express
const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Set the port
const port = process.env.PORT || 3000;

// Define a basic route for the start page
app.get('/', (req, res) => {
  res.send(`
    <h1>Space Travel Service</h1>
    <form action="/submit" method="POST">
      <label for="name">Your Name:</label>
      <input type="text" id="name" name="name" required>
      
      <label for="address">Your Address:</label>
      <input type="text" id="address" name="address" required>
      
      <label for="destination">Choose your destination:</label>
      <select id="destination" name="destination">
        <option value="Moon">Moon</option>
        <option value="Mars">Mars</option>
      </select>
      
      <button type="submit">Submit</button>
    </form>
  `);
});

// Define route for form submission
app.post('/submit', (req, res) => {
  const { name, address, destination } = req.body;
  res.send(`
    <h1>Check Your Answers</h1>
    <p>Name: ${name}</p>
    <p>Address: ${address}</p>
    <p>Destination: ${destination}</p>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
