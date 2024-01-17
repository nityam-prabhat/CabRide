import mongoose from 'mongoose';
const { Schema } = mongoose;

const TripSchema = new Schema({
  tripId:{
    type:String,
    unique:true
  },
  userId:{
    type: mongoose.Schema.Types.ObjectId, ref: 'User'
  },
  cabId:{
    type: mongoose.Schema.Types.ObjectId, ref: 'Cab'
  },
  startLocation:{
    type:String
  },
  endLocation:{
    type: String
  },
  startTime: Date,
  endTime: Date,
  tripStatus: String, // Scheduled, In Progress, Completed, Cancelled
  feedback: String
  
});


module.exports = mongoose.model('trip', TripSchema);