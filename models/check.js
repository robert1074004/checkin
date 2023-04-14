'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Check extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Check.belongsTo(models.User, { foreignKey: 'userId' })
    }
  };
  Check.init({
    lastCheck: DataTypes.DATE,
    status: DataTypes.STRING,
    deadline: DataTypes.DATE,
    firstCheck: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Check',
    tableName: 'Checks',
    underscored: true
  })
  return Check
}
