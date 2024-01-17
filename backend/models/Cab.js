import mongoose from 'mongoose';
const { Schema } = mongoose;

const CabSchema = new Schema({
  cabId:{
    type:String,
    unique:true
  },
  driverName:{
    type:String,
    unique: true
  },
  licensePlate:{
    type:String,
    require: true,
    unique: true
  },
  cabModel:{
    type:String
  },
  status:{
    type: String    //Available, On Trip, Maintenance
  },
  currentLocation:{
    type: String,
    require: true
  }
  
});


module.exports = mongoose.model('cab', CabSchema);