var express = require('express');
var router = express.Router();
var db = require('../database');
const { Op } = require('sequelize');

router.get("/all", function(req, res) {
    db.User.findAll()
        .then( users => {
            res.status(200).send(JSON.stringify(users));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        })
});

router.get("/:id", function(req, res) {
    db.User.findByPk(req.params.id)
        .then( user => {
            res.status(200).send(JSON.stringify(user));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        })
});

router.put("/login", function(req, res) {
    db.User.findOne({ where: { email: req.body.email } })
        .then(user => {
            if(user === undefined || user === null || user.email != req.body.email || user.password != req.body.password) {
                console.log(user);
                console.log(req.body);
                res.status(401).send(JSON.stringify({ res: "Login not found" }));
            }
            else {
                db.UserLogged.create({
                    userId: user.id,
                });
                res.status(200).send(JSON.stringify({ res: "Successfully authenticated", userId: user.id }));
            }
        })
        .catch( err => {
            console.log(err);
            res.status(500).send(JSON.stringify(err));
        })
});

router.put("/contacts", function(req, res) {
    db.User.findAll({ where: { id: { [Op.not]: req.body.userId } } })
        .then( users => {
            res.status(200).send(JSON.stringify(users));
        })
        .catch( err => {
            console.log(err);
            res.status(500).send(JSON.stringify(err));
        })
});

router.put("/", function(req, res) {
    db.User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        })
        .then( user => {
            db.UserLogged.create({
                userId: user.id,
            });
            res.status(200).send(JSON.stringify({ res: "User signed up", userId: user.id }));
        })
        .catch( err => {
            console.log(err);
            res.status(500).send(JSON.stringify(err));
        })
});

router.post("/:id", function(req, res) {
    const userToUpdate = {};
    if(req.body.name !== null || req.body.name !== undefined) {
        userToUpdate.name = req.body.name;
    }
    if(req.body.email !== null || req.body.email !== undefined) {
        userToUpdate.email = req.body.email;
    }
    if(req.body.password !== null || req.body.email !== undefined) {
        userToUpdate.password = req.body.password;
    }
    console.log(userToUpdate);
    db.User.update(
        userToUpdate,
        { where: { id: req.params.id } }
    )
    .then( user => {
        res.status(200).send(JSON.stringify(user));
    })
    .catch( err => {
        console.log(err);
        res.status(500).send(JSON.stringify(err));
    })
});



router.delete("/:id", function(req, res) {
    db.User.destroy({
        where: {
            id: req.params.id
        }
        })
        .then( user => {
            res.status(200).send(JSON.stringify(user));
        })
        .catch( err => {
            res.status(200).send(JSON.stringify(err));
        })
});

module.exports = router;
