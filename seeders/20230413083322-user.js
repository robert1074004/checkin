'use strict'
const bcrypt = require('bcryptjs')
const SEED_USER = {
  name: 'root',
  account: 'root',
  password: 'acuser'
}
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      name: SEED_USER.name,
      account: SEED_USER.account,
      password: bcrypt.hashSync(SEED_USER.password, bcrypt.genSaltSync(10), null),
      created_at: new Date(),
      updated_at: new Date()
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {})
  }
}
