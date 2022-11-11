'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('necessidades_nutricionais', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuarios', key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      qtd_cal: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      qtd_prot: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      qtd_carb: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      qtd_lip: {
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
    await queryInterface.dropTable('necessidades_nutricionais');
  }
};
