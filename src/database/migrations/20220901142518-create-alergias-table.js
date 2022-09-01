'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('alergias', {
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

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('alergias');
  }
};