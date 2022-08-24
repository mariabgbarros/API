'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('objetivos', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        descricao: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        createdAat: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updatedAat: {
          type: Sequelize.DATE,
          allowNull: false,
        },
    });
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.dropTable('objetivos');
  }
};
