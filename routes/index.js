const express = require('express')

const router = express.Router()

const checkinController = require('../controllers/checkin-controller')
const { generalErrorHandler } = require('../middleware/error-handler')

router.get('/checkin', checkinController.getCheckin)
router.get('/', (req, res) => res.redirect('/checkin'))
router.use('/', generalErrorHandler)

module.exports = router
