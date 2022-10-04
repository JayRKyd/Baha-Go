const express = require('express')
const router = express.Router()
const aboutController = require('../controllers/about')
const {ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', aboutController.getAbout)

module.exports = router