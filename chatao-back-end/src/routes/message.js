var express = require('express');
var router = express.Router();
var db = require('../database');
const { Op } = require("sequelize");

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

router.put("/chat", function(req, res) {
    db.Chat.findOne({ where: { 
        [Op.or]: [{
            userId_1: req.body.userId_1,
            userId_2: req.body.userId_2 
        }, {
            userId_1: req.body.userId_2, 
            userId_2: req.body.userId_1 
        }] 
    }})
        .then((chat) => {
            if(chat === null || chat === undefined) {
                db.Chat.create({
                    userId_1: req.body.userId_1,
                    userId_2: req.body.userId_2
                })
                    .then( chat => {
                        res.status(200).send(JSON.stringify([]));
                    })
                    .catch( err => {
                        console.log(err);
                        res.status(500).send(JSON.stringify(err));
                    })
            } else {
                db.Message.findAll({ where: {
                    chatId: chat.id
                    }
                })
                .then( messages => {
                    res.status(200).send(JSON.stringify({ chatId: chat.id, messages: messages }));
                })
                .catch( err => {
                    console.log(err);
                    res.status(500).send(JSON.stringify(err));
                })
            }
        })
});



router.put("/", function(req, res) {
    db.Message.create({
        chatId: req.body.chatId,
        userId_whosent: req.body.userId_whosent,
        message: req.body.message,
        })
        .then( message => {
            res.status(200).send(JSON.stringify(message));
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
