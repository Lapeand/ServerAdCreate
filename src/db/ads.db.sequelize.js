const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
  port: proccess.env.DB_PORT,
  user: proccess.env.DB_USER,
  password: proccess.env.DB_PASSWORD,
  database: proccess.env.DB_NAME,
  host: proccess.env.DB_HOST,

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