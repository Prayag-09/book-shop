require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql2/promise');
const PORT = process.env.MYSQL_ADDON_PORT || 3000;

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: process.env.MYSQL_ADDON_HOST,
    user: process.env.MYSQL_ADDON_USER,
    password: process.env.MYSQL_ADDON_PASSWORD,
    database: process.env.MYSQL_ADDON_DB,
    port: process.env.MYSQL_ADDON_PORT
});

app.get('/books', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM books');
        res.json(rows);
    } catch (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/books', async (req, res) => {
    const { title, description, price, cover } = req.body;
    
    const query = "INSERT INTO books (`title`, `description`, `price`, `cover`) VALUES (?, ?, ?, ?)";

    try {
        const [result] = await db.query(query, [title, description, price, cover]);
        res.status(200).json({ message: "Book has been added.", bookId: result.insertId });
    } catch (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.put('/books/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description, price, cover } = req.body;
    const query = 'UPDATE books SET title = ?, description = ?, price = ?, cover = ? WHERE id = ?';
    
    try {
        const [result] = await db.query(query, [title, description, price, cover, id]);
        res.json({ affectedRows: result.affectedRows });
    } catch (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.delete('/books/:id', async (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM books WHERE id = ?';
    
    try {
        const [result] = await db.query(query, [id]);
        res.json({ affectedRows: result.affectedRows });
    } catch (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
