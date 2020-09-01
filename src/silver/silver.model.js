const { Schema, model } = require('mongoose')

const SilverModel = new Schema(
  {
    silverprice: {
      type: Number
    }
  },
  {
    minimize: true,
    timestamps: true
  }
)

module.exports = model('silver', SilverModel)
