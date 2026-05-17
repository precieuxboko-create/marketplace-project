const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

// app.get("/todo", (req, res) => {
//     res.send("Bonjour Precieux L'api fonctionne correctement");
// });


app.use("/todo", require("./routes/todoRoutes.js"));

//Lancer le serveur
app.listen(PORT, () =>{
    console.log(`serveur lancé sur le port : ${PORT}`);

    
});