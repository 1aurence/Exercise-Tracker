const express = require('express')
const router = express.Router();
const User = require('../models/User')

router.post('/',  (req, res, next) => {
    const { username } = req.body;
    let user = new User({
        username
     })
     //Check if username exists
        User.findOne({username})
        .then(doc => {
            if(doc) {
                next(new Error('User exists'))
            }else {
                user.save()
                .then(savedUser => console.log(savedUser))
                next()
            }            
        }).catch(err => console.log(err.message))

        

   
    next()
})
module.exports = router
