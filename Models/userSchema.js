// import mongoose 

const mongoose = require('mongoose')
const validators = require('validator')

// define schema 

const userSchema = new mongoose.Schema({
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
    image: {
        type: String
        
    },
    skill: {
        type: String
        
    },
    time: {
        type: String
        
    },
    phone: {
        type: String
       
    },
   
})
const users = mongoose.model('users', userSchema)

module.exports = users