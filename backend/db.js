const mongoose = require('mongoose')


const mongoURI = "mongodb://localhost:27017"

const connectToMongo = () =>{
  mongoose.connect(mongoURI).then(
    () =>{console.log("connected successfully")},
    () => {console.log("couldn't connect to mongoose")}
  )
}

module.exports = connectToMongo;