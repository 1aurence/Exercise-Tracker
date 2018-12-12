const express = require('express')
const router = express.Router();
const Exercise = require('../models/Exercise')
const User = require('../models/User')
router.post('/', async (req, res, next) => {
    const {user, description, duration, date} = req.body
    let exercise = new Exercise({
        description,
        duration,
        date,
        user
    })
   await exercise.save()
   Exercise.findOne({user})
   .populate('User')
   .exec((err, doc) => {
       res.send(doc)
   })

   

})
module.exports = router
