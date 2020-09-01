const router = require('express').Router()
const { register, login, alluser } = require('./auth.controller')
// const verfyUser = require("./verifyUser.utils");

router.post('/register', register)
router.post('/login', login)
router.post('/all-user', alluser)
// router.get("/auth-check", verfyUser, authCheck);
// router.post("/logout", logout);

module.exports = router
