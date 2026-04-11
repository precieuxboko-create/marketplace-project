const express = require('express');
const app = express();

app.use(express.json());

// IMPORT ROUTES
const userRoutes = require('./routes/userRoutes');

// UTILISATION ROUTES
app.use('/api/users', userRoutes);

module.exports = app;