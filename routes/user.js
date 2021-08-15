const router= require('express').Router()
const userController = require('../controllers/user')

router.post('/api/new-subscriber',userController.newSubscription)











module.exports = router