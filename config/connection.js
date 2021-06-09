const Sequelize = require("sequelize");

// create connection to our db
const sequelize = new Sequelize(
  process.env.DB_NAME,
  "root",
  process.env.DB_PW,
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  }
);

module.exports = sequelize;
