const router = require('express').Router()
const { registersilver, allsilver } = require('./silver.controller')

router.get('/all-silver', allsilver)
router.post('/register', registersilver)

module.exports = router
