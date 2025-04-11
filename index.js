const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Serve frontend files
app.use(express.static(path.join(__dirname, '../client')));

// Sample API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Swasthya Saarthi backend!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
