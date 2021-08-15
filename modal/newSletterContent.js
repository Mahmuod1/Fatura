const {
    model,
    Schema
} = require('mongoose')

const Content = new Schema(

    {
        content: {
            type: String,
            require: true
        },
    }, {
        timestamps: true,
    }
)


module.exports = model('newSletterContent', Content)