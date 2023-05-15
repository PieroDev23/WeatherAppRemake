import winston from "winston";
import path from "path";

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
      filename: path.join(__dirname, "../../logs/application-messages.log"),
      level: "info",
      format,
    }),
    new winston.transports.File({
      filename: path.join(__dirname, "../../logs/application-errors.log"),
      level: "error",
      format,
    }),
  ],
});

export default applicationLogger;
