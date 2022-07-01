const bcrypt = require('bcrypt')
const express= require('express')
const sessions= express.Router()
const User = require('../models/userSchema.js')

sessions.post('/', (req,res)=>{

  User.findOne({username:req.body.username}, (error, foundUser)=> {
    if (error){
      console.log('error');
      res.status(400).json('oops we had a problem')
    }if (!foundUser){
      res.json('Sorry no user found')
    }else{
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        res.json(foundUser)
      }else{
        res.json('password does not match')
      }
    }
  })
})

module.exports = sessions
