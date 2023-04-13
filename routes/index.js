const express = require('express')

const router = express.Router()

const checkinController = require('../controllers/checkin-controller')

router.get('/checkin', checkinController.getCheckin)
router.use('/', (req, res) => res.redirect('/checkin'))

module.exports = router
