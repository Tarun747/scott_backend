const { Schema, model } = require('mongoose')

const UserModel = new Schema(
  {
    name: {
      type: String
    },

    email: {
      type: String,
      required: true
    },

    password: {
      type: String,
      required: true
    }
  },
  {
    minimize: true,
    timestamps: true
  }
)

module.exports = model('user', UserModel)
