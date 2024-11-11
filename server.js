const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from the current directory (without a 'public' folder)
app.use(express.static(path.join(__dirname)));

// Route for the root URL ('/')
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Serve index.html from root
});

// Handle form submission at /submit-form
app.post('/submit-form', express.urlencoded({ extended: true }), (req, res) => {
    const formData = req.body;
    console.log('Form data received:', formData);
    res.send('Form submission successful!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});