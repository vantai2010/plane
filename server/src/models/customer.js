'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CUSTOMER extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CUSTOMER.init({
    CUS_ID: DataTypes.STRING,
    CUS_NAME: DataTypes.STRING,
    CUS_PHONE: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CUSTOMER',
  });
  return CUSTOMER;
};