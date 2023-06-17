// Criando table de categorias
'use strict';

module.exports = {
  up: async (qInter, DataType) => {
    await qInter.createTable('categories', {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataType.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataType.STRING,
      },
    }, {
      timestamps: false,
      underscored: true,
    });
  },

  down: async (qInter, _DataType) => {
    await qInter.dropTable('categories');
  }
};
