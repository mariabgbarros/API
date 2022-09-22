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
      objetivo_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'objetivos', key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data_nasc: {
        type: Sequelize.DATE,
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
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('usuarios');
  }
};
