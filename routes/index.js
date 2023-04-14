const express = require('express')

const router = express.Router()
const passport = require('passport')
const checkinController = require('../controllers/checkin-controller')
const userController = require('../controllers/user-controller')
const { authenticated } = require('../middleware/auth')
const { generalErrorHandler } = require('../middleware/error-handler')

router.get('/signin', userController.signInPage)
router.post('/signin', passport.authenticate('local', { failureRedirect: '/signin', failureFlash: true }), userController.signIn)
router.get('/logout', userController.logout)
router.get('/checkin', authenticated, checkinController.getCheckin)
router.get('/', (req, res) => res.redirect('/checkin'))
router.use('/', generalErrorHandler)

module.exports = router
