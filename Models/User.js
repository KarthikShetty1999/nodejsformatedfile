const mongoose = require("mongoose");
const dotenv = require('dotenv').config();
const bcrypt = require("bcryptjs");
mongoose.connect(process.env.MONGODB_URI+process.env.USER_NAME,{useNewUrlParser:true, useUnifiedTopology:true});
const userSchema = mongoose.Schema({
    
    name : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    }
}, {timestamps : true});

module.exports = mongoose.model("User", userSchema);
userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});
module.exports = mongoose.model("user", userSchema);