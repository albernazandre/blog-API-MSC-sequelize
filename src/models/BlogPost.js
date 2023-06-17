// Model dos posts do Blog

module.exports = (sequel, TypeOfData) => {
    const postOnBlog = sequel.define('BlogPost', {
        id: { type: TypeOfData.INTEGER, primaryKey: true, autoIncrement: true },
        title: TypeOfData.STRING,
        content: TypeOfData.STRING,
        published: {
            type: TypeOfData.DATE,
            defaultValue: sequel.fn('now'),
         },
        updated: {
           type: TypeOfData.DATE,
           defaultValue: sequel.fn('now'),
        },
        userId: {
            type: TypeOfData.INTEGER,
            references: {
                model: 'users',
                key: 'id',
            },
        },
    }, {
        timestamps: false,
        underscored: true,
        tableName: 'blog_posts',
    });

    postOnBlog.associate = (mod) => {
        postOnBlog.belongsTo(mod.User, {
            foreignKey: 'userid',
            as: 'user',
        });
    };

    return postOnBlog;
};
