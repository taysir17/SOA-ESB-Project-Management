const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = 5000;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'library'
});

app.use(express.json());
connection.connect();

app.post('/books/:cin', (req, res) => {
    const cin = req.params.cin;
    const { bookTitle } = req.body;

    if (!bookTitle || typeof bookTitle !== 'string') {
        return res.status(400).json({ error: 'Veuillez fournir un titre de livre valide' });
    }

    const getQuery = 'SELECT books FROM students WHERE cin = ?';
    const updateQuery = 'UPDATE students SET books = ? WHERE cin = ?';

    connection.query(getQuery, [cin], (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Erreur lors de la récupération des livres' });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: 'Étudiant non trouvé' });
        }

        const currentBooks = results[0].books ? JSON.parse(results[0].books) : [];
        const updatedBooks = [...currentBooks, bookTitle];

        connection.query(updateQuery, [JSON.stringify(updatedBooks), cin], (updateError) => {
            if (updateError) {
                return res.status(500).json({ error: 'Erreur lors de la mise à jour des livres' });
            }

            res.json(updatedBooks);
        });
    });
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
