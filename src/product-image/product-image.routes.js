const router = require('express').Router()
const {
    registerproductImg,
    allproductImg,
    deleteproductImg
} = require('./product-image.controller')
const { fileUpload } = require('../services/multer.service')
const multer = require('multer')

router.post('/register', fileUpload.single('file'), registerproductImg)
router.get('/all-image', allproductImg)
router.delete('/:id', deleteproductImg)


module.exports = router
