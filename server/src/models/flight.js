'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FLIGHT extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FLIGHT.init({
    FLI_CODE: DataTypes.STRING,
    PLANE_CODE: DataTypes.STRING,
    FLI_S_PLACE: DataTypes.STRING,
    FLI_E_PLACE: DataTypes.STRING,
    FLI_S_DATE: DataTypes.STRING,
    FLI_E_DATE: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'FLIGHT',
  });
  return FLIGHT;
};