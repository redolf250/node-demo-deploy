const express = require('express');
const app = express();
const PORT = 4000;
let envFilePath = process.env.NODE_ENV 
  ? `./environment/.env.${process.env.NODE_ENV}` 
  : `./environment/.env`;

require('dotenv').config({path: envFilePath});

const env = process.env.NODE_ENV


// Middleware to parse JSON
app.use(express.json());

// Sample data
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
];

// GET route
app.get('/api/users', (req, res) => {
    res.json(users);
});

// POST route
app.post('/api/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.status(201).json(newUser);
});

// Server listening
app.listen(PORT, () => {
    console.log('Currect env: ' + env)
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
