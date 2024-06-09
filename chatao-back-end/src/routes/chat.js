var express = require('express');
var router = express.Router();
var db = require('../database');

router.get("/all", function(req, res) {
    db.Chat.findAll()
        .then( chats => {
            res.status(200).send(JSON.stringify(chats));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        })
});

router.get("/:id", function(req, res) {
    db.Chat.findByPk(req.params.id)
        .then( chat => {
            res.status(200).send(JSON.stringify(chat));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        })
});

router.put("/", function(req, res) {
    db.Chat.create({
        userId_1: req.body.userId_1,
        userId_2: req.body.userId_2,
        })
        .then( chat => {
            res.status(200).send(JSON.stringify(person));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        })
});

router.delete("/:id", function(req, res) {
    db.Chat.destroy({
        where: {
            id: req.params.id
        }
        })
        .then( chat => {
            res.status(200).send(JSON.stringify(chat));
        })
        .catch( err => {
            res.status(200).send(JSON.stringify(err));
        })
});

module.exports = router;
