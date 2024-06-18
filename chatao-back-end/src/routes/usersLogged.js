var express = require('express');
var router = express.Router();
var db = require('../database');

router.get("/all", function(req, res) {
    db.UserLogged.findAll()
        .then( usersLogged => {
            res.status(200).send(JSON.stringify(usersLogged));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        })
});

router.get("/:id", function(req, res) {
    db.UserLogged.findByPk(req.params.id)
        .then( userLogged => {
            res.status(200).send(JSON.stringify(userLogged));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        })
});

router.put("/", function(req, res) {
    db.UserLogged.create({
        userId: req.body.userId,
        })
        .then( userLogged => {
            res.status(200).send(JSON.stringify(userLogged));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        })
});

router.delete("/:id", function(req, res) {
    db.UserLogged.destroy({
        where: {
            userId: req.params.id
        }
        })
        .then( userLogged => {
            res.status(200).send(JSON.stringify(userLogged));
        })
        .catch( err => {
            res.status(200).send(JSON.stringify(err));
        })
});

module.exports = router;
