var express = require('express');
var router = express.Router();
var db = require('../database');

router.get("/all", function(req, res) {
    db.Message.findAll()
        .then( messages => {
            res.status(200).send(JSON.stringify(messages));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        })
});

router.get("/:id", function(req, res) {
    db.Message.findByPk(req.params.id)
        .then( message => {
            res.status(200).send(JSON.stringify(message));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        })
});

router.put("/", function(req, res) {
    db.Message.create({
        chatId: req.body.chatId,
        userId_whosent: req.body.userId_whosent,
        message: req.body.message,
        })
        .then( message => {
            res.status(200).send(JSON.stringify(person));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        })
});

router.delete("/:id", function(req, res) {
    db.Message.destroy({
        where: {
            id: req.params.id
        }
        })
        .then( message => {
            res.status(200).send(JSON.stringify(message));
        })
        .catch( err => {
            res.status(200).send(JSON.stringify(err));
        })
});

module.exports = router;
