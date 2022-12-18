'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TICKET extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TICKET.init({
    TIK_CODE: DataTypes.STRING,
    CUS_ID: DataTypes.STRING,
    PLANE_CODE: DataTypes.STRING,
    CHAIR_CODE: DataTypes.STRING,
    TIK_RANK: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TICKET',
  });
  return TICKET;
};