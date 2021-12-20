const blogsHelper = require('../utils/blogs_helper');

test('dummy returns 0', () => {
    const result = blogsHelper.dummy([]);

    expect(result).toBe(1);
});