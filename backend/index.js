require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db');

const PORT = process.env.DB_PORT;

app.use(cors());
app.use(express.json());

app.get('/books', (req, res) => {
  db.query('SELECT * FROM books', (err, rows) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.json(rows);
  });
});

app.post('/books', (req, res) => {
  const { title, description, price, cover } = req.body;
  const query = 'INSERT INTO books (title, description, price, cover) VALUES (?, ?, ?, ?)';

  db.query(query, [title, description, price, cover], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.status(200).json({ message: 'Book has been added.' });
  });
});

app.put('/books/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, price, cover } = req.body;
  const query = 'UPDATE books SET title = ?, description = ?, price = ?, cover = ? WHERE id = ?';
  const values = [title, description, price, cover, id];

  db.query(query, values, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.json({ affectedRows: results.affectedRows });
  });
});

app.delete('/books/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM books WHERE id = ?';

  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.json({ affectedRows: results.affectedRows });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
