const router = require('express').Router()
const adminControllers = require('../controllers/admin')
const newSletterContent = require('../controllers/newSletterContent')

router.post('/api/add-new-sletter',adminControllers.createNewSletter)

router.put('/api/update-new-sletter',adminControllers.updateNewSletter)














module.exports=router