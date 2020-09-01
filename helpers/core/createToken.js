const jwt = require("jsonwebtoken");
const { TOKEN_DURATION, TOKEN_KEY } = require("../../config/keys");

module.exports = function createToken(data) {
  return jwt.sign(data, TOKEN_KEY, {
    expiresIn: TOKEN_DURATION,
  });
};
