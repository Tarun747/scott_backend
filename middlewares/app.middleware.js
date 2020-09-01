const cors = require("cors");
const morgan = require("morgan");
const pinoExpress = require("express-pino-logger");
const helmet = require("helmet");
const compression = require("compression");
const logger = require("./logger");
const { isDev, isProd } = require("../config/keys");

const loggerMiddleware = pinoExpress({
  logger,
});

const main = (express, app) => {
  if (isDev) {
    app.use(morgan("dev"));
  }

  app.use(cors());

  app.use(express.json());

  app.use(express.urlencoded({ extended: false }));
  app.use(helmet());
  app.use(compression());

  if (isProd) {
    app.use(loggerMiddleware);
  }
};

module.exports = main;
