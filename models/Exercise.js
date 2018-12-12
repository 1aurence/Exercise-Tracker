const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./User')
const ExerciseSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    date: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Exercise', ExerciseSchema)