const router = require('express').Router()
const newSletterContentControllers = require('../controllers/newSletterContent')
const userControllers = require('../controllers/user')

router.post('/api/add-new-sletter-content',newSletterContentControllers.createNewSletterContent,userControllers.updateUsersSubscription)















module.exports = router