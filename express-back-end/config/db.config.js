require("dotenv").config();

module.exports = {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT,
  timezone: "UTC",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
// module.exports = {
//   HOST: "db",
//   USER: "postgres",
//   PASSWORD: "12345678",
//   DB: "express-back-end",
//   dialect: "postgres",
//   timezone: "UTC",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000,
//   },
// };

// module.exports = {
//   HOST: "localhost",
//   USER: "postgres",
//   PASSWORD: "12345678",
//   DB: "express-back-end",
//   dialect: "postgres",
//   timezone: "UTC",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000,
//   },
// };
