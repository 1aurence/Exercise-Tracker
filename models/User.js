const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    }
})
// UserSchema.pre('save', function (req,res,next) {
//     var self = this;
//     User.find({username : self.username}, function (err, docs) {
//         if (!docs.length){
//             console.log('User does not exist')
//             next();
//         }else{                
//             console.log('User exists: ',self.username);
//             res.json({message:'user exits'})
//             next(new Error("User already exists"));
//         }
//     });
// }) ;

const User = mongoose.model('User', UserSchema)
module.exports = User

