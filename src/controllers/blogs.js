const express = require('express');
const Blog = require('../models/Blog');
const blogRouter = express.Router();

blogRouter.get('/', (request, response, next) => {
    Blog
        .find({})
        .then(blogs => {
            response.json(blogs)
        })
        .catch(error => next(error));
});

blogRouter.post('/', (request, response, next) => {
    const blog = new Blog(request.body);

    Blog
        .save()
        .then(result => {
            response.status(201).json(result)
        })
        .catch(error => next(error));
});

blogRouter.put('/:id', (request, response, next) => {
    const updates = request.body;

    Blog
        .findByIdAndUpdate(request.params.id, updates, { new: true })
        .then(updatedBlog => {
            response.status(200).json(updatedBlog)
        })
        .catch(error => next(error));
});

blogRouter.delete('/:id', (request, response, next) => {
    Blog
        .findByIdAndRemove(request.params.id)
        .then(result => {
            response.status(204).end();
        })
        .catch(error => next(error));
});

module.exports = blogRouter;