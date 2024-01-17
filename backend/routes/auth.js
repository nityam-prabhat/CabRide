const express = require('express');
const router = express.Router();
const User = require('../models/User');

//Create a User using: POST "/auth/"
router.post('/', (req, res)=>{
  const user = User.create({
    userId: req.body.userId,
    username: req.body.username,
    email: req.body.email,
    passwordHash: req.body.passwordHash,
    userType: req.body.userType,
  });

  res.send(req.body);
})

module.exports= router;