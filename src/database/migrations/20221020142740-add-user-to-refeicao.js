'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'refeicoes', 
      'usuario_id',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuarios', key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    );
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn(
      'refeicoes',
      'usuario_id'
    );
  }
};
