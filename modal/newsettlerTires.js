const {model,Schema} = require('mongoose')

const newSletter = new Schema({
    tire:{
        type:String,
        require:true,
        unique:true
    },
    price:{
        type:Number,
        require:true,
        
    }
    
})


module.exports = model('newSlettersTires',newSletter)