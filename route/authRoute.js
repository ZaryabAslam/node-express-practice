const express = require('express')
const router = express.Router();
const {signup, signin,getall} = require('../controllers/authController')

router.post('/signup', signup)
router.post('/signin',signin)
router.get('/getall', getall)

module.exports = router;