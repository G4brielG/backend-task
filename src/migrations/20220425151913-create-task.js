'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(5)
      },
      descripcion: {
        type: Sequelize.STRING(20)
      },
      estado: {
        type: Sequelize.BOOLEAN
      },
      nivel: {
        type: Sequelize.INTEGER(1)
      },
      user_id: {
        type: Sequelize.INTEGER(5),
        allowNull: true,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tasks');
  }
};