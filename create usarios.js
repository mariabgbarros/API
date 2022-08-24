'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('usuarios', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        dataNascimento: {
          type: Sequelize.DATEONLY,
          allowNull: false,
        },
        peso: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        altura: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        altura: {
          type: Sequelize.INTEGER,
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
     await queryInterface.dropTable('usuarios');
  }
};
