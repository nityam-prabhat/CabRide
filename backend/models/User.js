// import mongoose from 'mongoose';
const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
  userId:{
    type:String,
    unique:true
  },
  username:{
    type:String,
    unique: true
  },
  email:{
    type:String,
    require: true,
    unique: true
  },
  passwordHash:{
    type:String,
    require: true
  },
  userType:{
    type: String,   //Employee, Cabdriver
    require: true
  }
  
});

module.exports = mongoose.model('user', UserSchema);
