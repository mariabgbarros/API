'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'usuarios', 
      'sexo',
      {
        type: Sequelize.STRING,
        allowNull: false,
      },
    );
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn(
      'usuarios',
      'sexe'
    );
  }
};

