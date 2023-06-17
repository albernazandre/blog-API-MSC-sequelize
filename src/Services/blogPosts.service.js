const { BlogPost, PostCategory, Category } = require('../models');

const addingBlogPost = async ({ title, content, userId, categoryIds }) => {
    const arrayVerifying = categoryIds.map(async (categoryId) => {
        const categ = await Category.findOne({ where: { id: categoryId } });
        return !!categ;
    });
    const categVerifying = await Promise.all(arrayVerifying);
    if (categVerifying.includes(false)) {
        return { message: 'one or more "categoryIds" not found' };
    }
    const post = await BlogPost.create({ title, content, userId });
    const returnOfPost = categoryIds.map(async (categoryId) => {
        await PostCategory.create({ postId: post.id, categoryId });
        return BlogPost.findByPk(post.id, {
        attributes: ['id', 'title', 'content', 'userId', 'published', 'updated'],
        }); 
    });
    const [myReturn] = await Promise.all(returnOfPost);
    return myReturn;
};

module.exports = {
    addingBlogPost,
};