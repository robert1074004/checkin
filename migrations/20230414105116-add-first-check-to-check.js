'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Checks', 'first_check', { type: Sequelize.DATE })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Checks', 'first_check')
  }
}
