const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const sampleData = ["apple", "banana", "grape", "orange", "pineapple", "mango"];

app.get('/search', (req, res) => {
  const query = req.query.q.toLowerCase();
  const results = sampleData.filter(item => item.includes(query));
  res.json(results);
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
