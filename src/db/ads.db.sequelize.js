const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  dialect: 'postgres',
  logging: false  

})

async function pingDatabase(){
  try{
    await sequelize.authenticate();
    console.log('Успешное подключение к базе данных!');
  } catch (error){
    console.error('Произошла ошбика при подключени к базе данных: ', error);
  }
}

module.exports = {sequelize, pingDatabase};