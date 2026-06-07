const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name:{type:String, required:true},
    email:{type:String, required:true, unique: true},
    password:{type:String, required:true},
    phone:{type:String, unique:true},
    address:{type:String},
    city:{type:String},
    state:{type:String},
    pincode:{type:String},
    customer:{type:Boolean, default:false},
    isAdmin:{type:Boolean, default:false},
    orders:{type:Number, default:0}
    



},{timestamps:true})


module.exports = mongoose.model('User', userSchema);