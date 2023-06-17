// Criando table de categorias de posts do blog
'use strict';

module.exports = {
  up: async (qInter, DataType) => {
    await qInter.createTable('posts_categories', {
      post_id: {
        allowNull: false,
        type: DataType.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'blog_posts',
          key: 'id',
        }
      },
      category_id: {
        allowNull: false,
        type: DataType.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'categories',
          key: 'id',
        }
      }
    }, {
      underscored: true,
      timestamps: false,    
    });
  },

  down: async (queryInterface, _DataType) => {
      await queryInterface.dropTable('posts_categories');
  }
};
