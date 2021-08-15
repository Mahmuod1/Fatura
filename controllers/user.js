const User = require('../modal/user')
const newSletterTires = require('../modal/newsettlerTires')
const {
    payWithCredit,
    getDiscount
} = require('../helpers/subscription')
const newSubscription = (req, res, next) => {

    const email = req.body.email,
        tire = req.body.tire,
        paymentMethod = req.body.paymentMethod
    balance = Math.floor(Math.random() * 100)

    newSletterTires.find({
            tire: tire
        })
        .then(foundTire => {
            if (email && tire && paymentMethod && balance) {
                User.create({
                    email: email,
                    subscription: foundTire._id,
                    paymentMethod: paymentMethod,
                    balance: balance
                }).then(user => {
                    res.status(201).json({
                        message: "created New Subscription",
                        result: user
                    })
                }).catch(error => {
                    res.status(404).json({
                        message: 'there is an error in creating new subscriber',
                        error: error
                    })
                })
            }
        }).catch(error => {
            res.status(404).json({
                message: "cannot find the tire please make sure to write the tire",
                error: error
            })
        })


}

const updateUsersSubscription = (req, res) => {

    User.find().then(allUsers => {
        const users = allUsers

        users.forEach(user => {
            newSletterTires.findOne({
                tire: user.subscription
            }).then(foundTire => {

                    if (user.paymentMethod == 'cash') {
                        updateUserBalance(user, foundTire, false)
                    } else {
                        // this is random function return true or false 
                        if (payWithCredit()) {

                            updateUserBalance(user.foundTire, true)
                        } else {
                            res.status(404).json({
                                message: 'payment with credit Has Filed'
                            })
                        }

                    }
                }

            )

        })

    })

}

const updateUserBalance = (user, tire, hasDiscount) => {

    let balanceAfterUpdated = hasDiscount ? getDiscount(tire.price) : user.price - tire.price

    if (balanceAfterUpdated > 0) {
        User.updateOne({
                _id: user._id
            }, {
                $set: {
                    balance: balanceAfterUpdated
                }
            })
            .status(200).json({
                message: 'subscription payment process success'
            }).catch(error => {

                res.status(404).json({
                    message: 'there is an error in updating payment of subscription ',
                    error: error
                })
            })

    } else {
        res.status(404).json({
            message: `this ${user.email} balance is not enough`
        })
    }
}
exports.updateUsersSubscription = updateUsersSubscription
exports.newSubscription = newSubscription