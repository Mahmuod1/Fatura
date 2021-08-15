const {
    Schema,
    model
} = require('mongoose')

const User = new Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    subscription: {
        type: String,
        require: true
    },
    paymentMethod: {
        type: String,
        require: true
    },
    balance: {
        type: Number,
        require: true,
    }
},
{
    timestamps:true
})


module.exports = model('Users',User)