const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/ads.db.sequelize');


const Ads = sequelize.define("Ads",{
  id:{
    type: DataTypes.INTEGER, 
    autoIncrement: true,
    primaryKey: true
  },

  title:{
    type: DataTypes.STRING(255), 
    allowNull: false,
    validate: { notEmpty: true }
  },

  category:{
    type: DataTypes.ENUM('channel-sale', 'promotion', 'design', 'seo', 'other'), 
    allowNull: false,
    validate: { notEmpty: true }
  },

  description:{
    type: DataTypes.TEXT, 
    allowNull: false,
    validate: { notEmpty: true }
  },

  price:{
    type: DataTypes.DECIMAL(10, 2), 
    allowNull: false,
    validate: {
      notEmpty: true,
      min: 0
    }
  },

  images:{
    type: DataTypes.JSON, 
    allowNull: true
  },

  contact:{
    type: DataTypes.TEXT, 
    allowNull: true,
    validate: { notEmpty: true }
  }
})

module.exports = Ads;