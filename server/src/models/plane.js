'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PLANE extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PLANE.init({
    PLANE_CODE: DataTypes.STRING,
    CHAIR_FREE: DataTypes.TEXT,
    CHAIR_BOOKED: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'PLANE',
  });
  return PLANE;
};