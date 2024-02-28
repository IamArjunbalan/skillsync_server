// import mongoose 

const mongoose = require('mongoose')
const validators = require('validator')

// define schema 

const adminschema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate:[validators.isEmail,'Invalid Email']
            
            
    },
  
   
})
const admins = mongoose.model('admins', adminschema)

module.exports = admins