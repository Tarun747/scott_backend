const SilverModel = require('./silver.model')
const Boom = require('@hapi/boom')

// ---------------------   REGISTER SILVER PRICE CONTROLLER    ----------------------------
const registersilver = async (req, res, next) => {
  try {
    console.log(req.body)
    console.log(req.file)
    const { silverprice } = req.body

    const newSilver = new SilverModel({
      silverprice
    })

    await newSilver.save()

    return res.status(200).json({
      success: true,
      message: 'Silver Price is added'
    })
  } catch (err) {
    next(err)
  }
}

// ----------------------------   ALL SILVER PRICE CONTROLLER    ----------------------------
const allsilver = async (req, res, next) => {
  try {
    const silverExist = await SilverModel.find({})
    return res.json({
      success: true,
      message: 'Complete Silver Price List',
      data: silverExist
    })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  registersilver,
  allsilver
}
