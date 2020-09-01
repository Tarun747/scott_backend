const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports.hash = function (password) {
    return bcrypt.hash(password, saltRounds);
};

module.exports.compareHash = function (plainPassword, encryptedPassword) {
    return bcrypt.compare(plainPassword, encryptedPassword)
};