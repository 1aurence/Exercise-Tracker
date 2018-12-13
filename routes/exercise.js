const express = require('express')
const router = express.Router();
const Exercise = require('../models/Exercise')
const User = require('../models/User')
router.post('/', async (req, res, next) => {
    const {
        userId,
        description,
        duration,
        date
    } = req.body
    let exercise = new Exercise({
        description,
        duration,
        date,
        userId
    })
    try {
        await exercise.save()
    } catch (error) {
        res.json({
            message: error.message
        })
    }
    Exercise.findOne({
            userId
        })
        .populate('User')
        .select('-userId')
        .exec((err, doc) => {
            res.send(doc)
        })

})
router.get('/log/:userId', (req, res) => {
    const {
        userId
    } = req.params;
    Exercise.findOne({
            userId
        })
        .then(doc => res.send(doc))
})
module.exports = router