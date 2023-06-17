// Criando table de users
'use strict';

module.exports = {
  up: async (qInter, DataType) => {
    await qInter.createTable('users', {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataType.INTEGER,
    },
      display_name: {
        allowNull: false,
        type: DataType.STRING,
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataType.STRING
      },
      password: {
        allowNull: false,
        type: DataType.STRING,
      },
      image: {
        allowNull: true,
        type: DataType.STRING,
      },
  }, {
    timestamps: false,
    underscored: true,
  });
  },

  down: async (qInter, _DataType) => {
    await qInter.dropTable('users');
  }
};
