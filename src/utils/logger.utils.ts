import winston from "winston";

const format = winston.format.combine(
  winston.format.timestamp(),
  winston.format.json()
);

const applicationLogger: winston.Logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "weatherAppRemake", version: "1.0.0" },
  transports: [
    new winston.transports.File({
      filename: "../logs/application-msg.log",
      level: "info",
      format,
    }),
    new winston.transports.File({
      filename: "../logs/application-error.log",
      level: "error",
      format,
    }),
  ],
});

export default applicationLogger;
