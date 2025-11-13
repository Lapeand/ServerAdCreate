const express = require('express');
require('dotenv').config();

const {sequelize, pingDatabase} = require('./db/ads.db.sequelize.js');
const adsRoutes = require('./routes/ads.routes.js');

const app = express();
app.use(express.json());

async function startServer(){
  try{
    await pingDatabase();

    await sequelize.sync({alter: true});

    app.use('/api', adsRoutes);

    const PORT = process.env.PORT || 5432;
    app.listen(PORT, () =>{
      console.log(`Сервер запущен на порту ${PORT}`);
    })

  }catch(error){
    console.error('Ошибка при запуске сервера: ', error);
  }
}

startServer();