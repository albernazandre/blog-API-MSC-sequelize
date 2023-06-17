module.exports = (sequel, TypeOfData) => {
    const categPost = sequel.define('PostCategory', {
        postId: {
            type: TypeOfData.INTEGER,
            primaryKey: true,
            references: {
                model: 'BlogPost',
                key: 'id'
            }
        },
        categoryId: {
            type: TypeOfData.INTEGER,
            primaryKey: true,
            references: {
                model: 'Category',
                key: 'id'
            }
        }
    }, {
        timestamps: false,
        underscored: true,
        tableName: 'posts_categories'
    });
    categPost.associate = (mod) => {
        categPost.belongsTo(mod.BlogPost, {
            foreignKey: 'postId',
            as: 'blogPost'
        });

        categPost.belongsTo(mod.Category, {
            foreignKey: 'categoryId',
            as: 'category'
        });
        mod.Category.belongsToMany(mod.BlogPost, {
            through: mod.PostCategory,
            foreignKey: 'category_id',
            otherKey: 'post_id',
            as: 'blog_posts'
        });
        mod.BlogPost.belongsToMany(mod.Category, {
            through: mod.PostCategory,
            foreignKey: 'post_id',
            otherKey: 'category_id',
            as: 'categories'
        });
    };
    return categPost;
};
