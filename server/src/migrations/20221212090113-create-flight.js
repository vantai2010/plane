'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('FLIGHTs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      FLI_CODE: {
        allowNull: false,
        type: Sequelize.STRING
      },
      PLANE_CODE: {
        allowNull: false,
        type: Sequelize.STRING
      },
      FLI_S_PLACE: {
        allowNull: false,
        type: Sequelize.STRING
      },
      FLI_E_PLACE: {
        allowNull: false,
        type: Sequelize.STRING
      },
      FLI_S_DATE: {
        allowNull: false,
        type: Sequelize.STRING
      },
      FLI_E_DATE: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('FLIGHTs');
  }
};