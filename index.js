const express = require('express');
const app = express();
const PORT = 3000;

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
    console.log(`Server is running on http://localhost:${PORT}`);
});
