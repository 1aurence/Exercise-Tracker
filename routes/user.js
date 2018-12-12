const express = require('express')
const router = express.Router();
const User = require('../models/User')
const mongoose = require('mongoose')
router
    .post('/', (req, res, next) => {
        const {
            username
        } = req.body;
        let user = new User({
            _id: new mongoose.Types.ObjectId(),
            username
        })
        //Check if username exists
        User.findOne({
                username
            })
            .then(doc => {
                if (doc) {
                    res.json({
                        message: 'User already exists'
                    })
                } else {
                    user.save()
                        .then(savedUser => res.send(savedUser))
                }
            }).catch(err => console.log(err.message))
    })

router.get('/', (req, res, next) => {
    User.find({})
        .then(users => res.send(users))
    console.log('get made')
})
module.exports = router