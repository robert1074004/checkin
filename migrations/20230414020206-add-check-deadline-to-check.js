'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Checks', 'deadline', { type: Sequelize.STRING })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Checks', 'deadline')
  }
}
