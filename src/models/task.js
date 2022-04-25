'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      task.belongsTo(models.user,
        {
          as: 'user',
          foreignKey: 'user_id'
        }
        )
    }
  }
  task.init({
    descripcion: DataTypes.STRING(20),
    estado: DataTypes.BOOLEAN,
    nivel: DataTypes.INTEGER(1),
    user_id: DataTypes.INTEGER(5)
  }, {
    sequelize,
    modelName: 'task',
  });
  return task;
};