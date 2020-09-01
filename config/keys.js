const NODE_ENV = process.env.NODE_ENV;
const isDev = NODE_ENV === "development";
const isProd = NODE_ENV === "production";
const { MONGO_URI, PORT, TOKEN_KEY, TOKEN_DURATION } = process.env;

module.exports = {
  NODE_ENV,
  MONGO_URI,
  PORT,
  isDev,
  isProd,
  TOKEN_KEY,
  TOKEN_DURATION,
};
