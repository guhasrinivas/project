const { required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose=require("passport-local-mongoose");

// no need to define password as passport-local-mongoose will do all the heavy work like storing password,salting,hashing
const userSchema=new Schema({
    email:{
        type:String,
        required:true,
    }
});
userSchema.plugin(passportLocalMongoose);
module.exports=mongoose.model("User",userSchema);