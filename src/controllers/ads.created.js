const Ads = require('../models/ads.model');

async function createdAd(req, res){
  try{
    const {title, category, description, price, images, contact} = req.body;

    if(!title || !category || !description || !price || !contact){
      return res.status(400).json({message: 'Заполните все обязательные поля!'});
    }

    const newAd = await Ads.create({
      title: title,
      category: category,
      description: description,
      price: price,
      images: images,
      contact: contact
    })
    console.log('Объявление создано:', newAd.toJSON());
    res.statud(201).json({message: 'Объявление успешно создано!'})

  } catch(error){
    console.error('Ошибка при создании объявления: ', error);
  }
}

module.exports = createdAd; 