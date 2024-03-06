const mongoose = require('mongoose')


const inboxMessageSchema= new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
   
    message: {
        type: String,
        required: true,
        
            
            
    },
    userId:{
        type:String,
        required:true

    }

})

const inboxMessages = mongoose.model('inboxMessages', inboxMessageSchema)
module.exports = inboxMessages