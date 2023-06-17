// Criando table de posts do blog
'use strict';

module.exports = {
  up: async (qInter, DataType) => {
    await qInter.createTable('blog_posts', {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataType.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataType.STRING,
      },
      content: {
        allowNull: false,
        type: DataType.STRING,
      },
      user_id: {
        allowNull: false,
        type: DataType.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
        }
      },
      published: {
        type: DataType.DATE,
      },
      updated: {
        type: DataType.DATE,
      },
    }, {
      underscored: true,
    });
  },

  down: async (qInter, _DataType) => {
      await qInter.dropTable('blog_posts');
    
  }
};
