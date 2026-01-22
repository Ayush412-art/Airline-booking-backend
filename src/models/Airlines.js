'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airlines extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Airlines.init({
    ModelNo: {
      type : DataTypes.STRING,
      allowNull : false
      },
    capacity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Airlines',
  });
  return Airlines;
};