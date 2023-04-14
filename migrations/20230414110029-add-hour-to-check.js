'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Checks', 'hour', { type: Sequelize.INTEGER, defaultValue: 0 })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Checks', 'hour')
  }
}
