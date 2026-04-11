const mysql= require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'marketplace'
});

db.connect((err)=> {
    if(err){
        console.log('Erreur lors de la connexion DB');
    }else{
        console.log('Connecté à MySQL');
    }
    

});
module.exports = db;