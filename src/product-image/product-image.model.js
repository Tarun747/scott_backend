const { Schema, model } = require('mongoose')

const ProductImgModel = new Schema(
    {
        imageURL: {
            type: String
        }
    },
    {
        minimize: true,
        timestamps: true
    }
)

module.exports = model('product-image', ProductImgModel)
