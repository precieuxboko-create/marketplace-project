const db = require('../config/db');

exports.register = (req, res) => {
    const { nom, email, password } = req.body;

    const sql = "INSERT INTO users (nom, email, password) VALUES (?, ?, ?)";

    db.query(sql, [nom, email, password], (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Erreur serveur" });
        }

        res.status(201).json({ message: "Utilisateur créé avec succès" });
    });
};