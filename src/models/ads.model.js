const { DataTypes } = require('sequelize');
const sequelize = require('../db/ads.db.sequelize');


const Ad = sequelize.define("Ad",{
  id:{

  },
  titleAd:{

  },
  categoryAd:{

  },
  descriptionAd:{

  },
  priceAd:{

  },
  imagesAd:{

  },
  contactAd:{
    
  }
})