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
exports.login = (req, res) => {
    const { email, password } = req.body;

    const sql = "SELECT * FROM users WHERE email = ?";

    db.query(sql, [email], async (err, results) => {
        if (err) {
            return res.status(500).json({ message: "Erreur serveur" });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        const user = results[0];

        // comparaison mot de passe
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: "Mot de passe incorrect" });
        }

        res.status(200).json({ message: "Connexion réussie", user });
    });
};