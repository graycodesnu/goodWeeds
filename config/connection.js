const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    // ! Grayson has to use 127.0.0.1 ... DOUBLE-CHECK THAT YOURS IS SET TO LOCALHOST! 
    host: 'localhost',
    dialect: 'mysql',
    port: 3001,
  }
);

module.exports = sequelize;
