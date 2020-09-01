const router = require('express').Router()
const authRouter = require('./auth/auth.routes')
const reportBug = require('./report-bug/report-bug.routes')
const productImage = require('./product-image/product-image.routes')
router.use('/auth', authRouter)
router.use('/report-bug', reportBug)
router.use('/product-image', productImage)
module.exports = router
