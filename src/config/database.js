const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("todo-app", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = { sequelize };
