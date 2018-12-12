const express = require('express')
const router = express.Router();
const Exercise = require('../models/Exercise')

router.post('/', (req, res, next) => {
    let exercise = new Exercise({
        
    })
console.log(req.body)
    next()
})
module.exports = router
