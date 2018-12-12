const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./User')
const ExerciseSchema = new Schema({
    userId: {
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
        type: String,
        required: true,
        validate: function (v) {
            return /\w{4}-\w{2}-\w{2}/.test(v)
        },
        message: props => `${props.value} is not a valid date`
    }
})

module.exports = mongoose.model('Exercise', ExerciseSchema)