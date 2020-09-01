const bcrypt = require('bcrypt')
const UserModel = require('./user.model')
const { TOKEN_KEY } = require('../../config/keys')
const Boom = require('@hapi/boom')
const jwt = require('jsonwebtoken')

// ---------------------   REGISTER CONTROLLER    ----------------------------
const register = async (req, res, next) => {
  try {
    // return res.sendStatus(200)
    console.log(req.body)
    const { name, email, password } = req.body

    const userExist = await UserModel.find({ email }).lean()
    if (userExist[0]) {
      throw Boom.conflict('user already exists, try to login')
    }

    const hash = await bcrypt.hash(password, 12)

    const newAdminUser = new UserModel({
      name,
      email,
      password: hash
    })

    await newAdminUser.save()

    return res.status(200).json({
      success: true,
      message: 'Admin is now created! try to login'
    })
  } catch (err) {
    next(err)
  }
}

// ----------------------------   LOGIN CONTROLLER    ----------------------------
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const userExist = await UserModel.findOne({
      email
    })

    if (!userExist) {
      throw Boom.unauthorized("User doesn't exist")
    }

    const isMatch = await bcrypt.compare(password, userExist.password)

    if (isMatch) {
      const payload = {
        id: userExist._id,
        name: userExist.name,
        email: userExist.email
      }

      const token = await jwt.sign(payload, TOKEN_KEY, {
        expiresIn: '1d'
      })

      return res
        .status(200)
        .cookie('token', token, {
          maxAge: 1000 * 60 * 60 * 24
        })
        .json({
          success: true,
          isLoggedIn: true,
          message: 'Logged In Successfully completed',
          payload
        })
    } else {
      throw Boom.unauthorized('Incorrect Password, Contact Admin to Reset')
    }
  } catch (err) {
    next(err)
  }
}

// ----------------------------   ALL USER CONTROLLER    ----------------------------
const alluser = async (req, res, next) => {
  try {
    const userExist = await UserModel.find({})
    return res.json({
      success: true,
      message: 'Logged In Successfully completed',
      data: userExist
    })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  login,
  register,
  alluser
}
