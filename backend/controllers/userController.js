const db = require('../config/db');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
    const { nom, email, password } = req.body;

    try {
        // hash du mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        const sql = "INSERT INTO users (nom, email, password) VALUES (?, ?, ?)";

        db.query(sql, [nom, email, hashedPassword], (err, result) => {
            if (err) {
                return res.status(500).json({ message: "Erreur serveur" });
            }

            res.status(201).json({ message: "Utilisateur créé avec succès" });
        });

    } catch (error) {
        res.status(500).json({ message: "Erreur hash password" });
    }
};