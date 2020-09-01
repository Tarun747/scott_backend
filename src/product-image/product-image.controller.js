const ProductImgModel = require('./product-image.model')
const Boom = require('@hapi/boom')
const cloudinary = require('cloudinary')

// ---------------------   REGISTER IMAGE PRODUCT CONTROLLER    ----------------------------
const registerproductImg = async (req, res, next) => {
    try {
        console.log(req.body)
        console.log(req.file)

        if (!req.file) {
            throw Boom.badData('File Missing')
        }
        const result = await cloudinary.v2.uploader.upload(req.file.path, {
            folder: 'Product'
        })

        await new ProductImgModel({
            imageURL: result.secure_url
        }).save()

        return res.status(200).json({
            success: true,
            message: 'Image Saved Successfully'
        })
    } catch (err) {
        next(err)
    }
}

// ----------------------------   DELETE SINGLE PRODUCT CONTROLLER    ----------------------------

const deleteproductImg = async (req, res, next) => {
    try {
        const id = req.params.id
        let productImgExist = await ProductModel.findByIdAndRemove({ _id: id })
        return res.json({
            success: true,
            message: 'Product Image Deleted',
            data: productImgExist
        })
    } catch (err) {
        next(err)
    }
}

// ----------------------------   ALL PRODUCT IMAGE CONTROLLER    ----------------------------
const allproductImg = async (req, res, next) => {
    try {
        const productImgExist = await ProductImgModel.find({})
        return res.json({
            success: true,
            message: 'Complete Product Imgae List',
            data: productImgExist
        })
    } catch (err) {
        next(err)
    }
}

module.exports = {
    registerproductImg,
    allproductImg,
    deleteproductImg
}
