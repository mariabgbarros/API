'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.renameColumn('refeicoes_alimentos', 'alimento', 'nome');
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.renameColumn('refeicoes_alimentos', 'nome', 'alimento');
  }
};
