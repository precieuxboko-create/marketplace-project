const app = require('./app');
require('./config/db');
const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`serveur lancé sur le port ${PORT}`);
})