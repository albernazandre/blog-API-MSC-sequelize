// Criando Model de users

module.exports = (sequel, TypeOfData) => {
    const blogUser = sequel.define('User', {
        id: { type: TypeOfData.INTEGER,
            primaryKey: true,
            autoIncrement: true },
        displayName: TypeOfData.STRING,
        email: TypeOfData.STRING,
        password: TypeOfData.STRING,
        image: TypeOfData.STRING,
    }, {
        timestamps: false,
        underscored: true,
        tableName: 'users',
    });

    blogUser.associate = (mod) => {
        blogUser.hasMany(mod.BlogPost, { foreignKey: 'user_id', as: 'blog_posts' });
    };

    return blogUser;
};
