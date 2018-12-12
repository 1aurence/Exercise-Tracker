const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Exercise = require('./Exercise')
const UserSchema = new Schema({
      _id: Schema.Types.ObjectId,
    username: {
        type: String,
        required: true,
    },
    workouts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exercise'
      }]})

const User = mongoose.model('User', UserSchema)
module.exports = User

