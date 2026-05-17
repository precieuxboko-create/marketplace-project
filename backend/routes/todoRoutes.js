const express = require('express');
const router = express.Router()

router.get("/", (req, res) => {
    res.send( "Voici les données");
});

router.post("/", (req, res) =>{
    const {nom, prix} = req.body;
    res.json({
        nom,
        prix
    });
});

router.put("/:id", (req, res) => {
    res.json({todo : req.params.id});
})


module.exports = router;