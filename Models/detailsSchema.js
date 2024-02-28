const mongoose = require('mongoose')

const detailsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
   
    email: {
        type: String,
        required: true,
        
            
            
    },
    details_image: {
        type: String,
        required:true
        
    },
    skill: {
        type: String,
        required:true
        
    },
    time: {
        type: String,
        required:true
        
    },
    phone: {
        type: String,
        required:true
       
    },
    userId:{
        type:String,
        required:true

    }

})
const details = mongoose.model('details', detailsSchema)

module.exports = details