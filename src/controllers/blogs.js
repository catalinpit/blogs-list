const express = require('express');
const Blog = require('../models/Blog');
const blogRouter = express.Router();

blogRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({});

    response.json(blogs);
});

blogRouter.post('/', async (request, response) => {
    const blog = new Blog(request.body);

    const result = await blog.save();
    response.status(201).json(result);
});

blogRouter.put('/:id', async (request, response) => {
    const updates = request.body;

    const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, updates, { new: true });
    response.status(200).json(updatedBlog);
});

blogRouter.delete('/:id', async (request, response) => {
    await Blog.findByIdAndRemove(request.params.id);

    response.status(204).end();
});

module.exports = blogRouter;