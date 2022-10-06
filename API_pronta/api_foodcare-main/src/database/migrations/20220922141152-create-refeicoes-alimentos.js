'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('refeicoes_alimentos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      refeicao_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'refeicoes', key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      alimento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      qtd_g: {
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
     await queryInterface.dropTable('refeicoes_alimentos');
  }
};
