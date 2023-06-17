const blogPostServ = require('../Services/blogPosts.service');

const addingBlogPostControl = async (request, response) => {
    const { title, content, categoryIds } = request.body;
    const { id } = response.locals.user;
    const post = await blogPostServ.addingBlogPost({ title, content, userId: id, categoryIds });
    if (post.message) return response.status(400).json(post);
    response.status(201).json(post);
};

module.exports = {
    addingBlogPostControl,
};