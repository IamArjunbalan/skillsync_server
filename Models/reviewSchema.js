const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
   
    review: {
        type: String,
        required: true,
        
            
            
    },
    userId:{
        type:String,
        required:true

    }

})
const reviews = mongoose.model('reviews', reviewSchema)
module.exports = reviews
