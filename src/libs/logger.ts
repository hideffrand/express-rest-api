const { format, createLogger, transports } = require("winston");
const chalk = require("chalk");

const { combine, timestamp, printf } = format;

const customFormat = printf(
  ({
    level,
    message,
    timestamp,
  }: {
    level: string;
    message: string;
    timestamp: string;
  }) => {
    switch (level) {
      case "debug":
        return chalk.gray(`[${level.toUpperCase()}] ${timestamp} : ${message}`);
      case "info":
        return chalk.white(
          `[${level.toUpperCase()}] ${timestamp} : ${message}`
        );
      case "warn":
        return chalk.yellow(
          `[${level.toUpperCase()}] ${timestamp} : ${message}`
        );
      case "error":
        return chalk.red(`[${level.toUpperCase()}] ${timestamp} : ${message}`);
      default:
        return chalk.gray(`[${level.toUpperCase()}] ${timestamp} : ${message}`);
    }
  }
);

const logger = createLogger({
  level: "debug",
  format: combine(timestamp(), customFormat),
  transports: [new transports.Console()],
});

module.exports = logger;
