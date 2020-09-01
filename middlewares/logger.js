const pino = require("pino");
const pkg = require("../package.json");

const logger = pino({
  name: pkg.name,
  timestamp: true,
  level: "info",
  useLevelLabels: true,
  redact: {
    paths: ["req.body.otp", "req.body.password"],
    censor: "**CURSED**",
  },
});

module.exports = logger;
