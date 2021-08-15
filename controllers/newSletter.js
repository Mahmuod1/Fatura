const NewSletterTires = require('../modal/newsettlerTires')
const NewSletterContent = require('../modal/newSletterContent')

const   getTire = (req, res) => {

    const tire = req.body.tire
    NewSletterTires.find({
            tire: tire
        })
        .then(foundTire => {

            res.status(200).json({
                result: foundTire
            }).catch(error => {

                res.status(404).json({
                    message: 'there is an error when get Tire by Tire Name',
                    error: error
                })
            })
        })

}


exports.getTire = getTire