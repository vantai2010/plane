'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TICKETs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      TIK_CODE: {
        allowNull: false,
        type: Sequelize.STRING
      },
      CUS_ID: {
        allowNull: false,
        type: Sequelize.STRING
      },
      PLANE_CODE: {
        allowNull: false,
        type: Sequelize.STRING
      },
      CHAIR_CODE: {
        allowNull: false,
        type: Sequelize.STRING
      },
      TIK_RANK: {
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
    await queryInterface.dropTable('TICKETs');
  }
};