const blogsHelper = require('../utils/blogs_helper');

test('dummy returns 0', () => {
    const result = blogsHelper.dummy([]);

    expect(result).toBe(1);
});

describe('testing total likes', () => {
    const oneBlog = [
        {
            "_id": "61c0945cade115a71dbd1e5f",
            "title": "Build An E-Commerce Backend With Minimal Code",
            "author": "Catalin Pit",
            "url": "https://catalins.tech/hasura-ecommerce-backend",
            "likes": 97
        }
    ];

    test('empty list is zero', () => {
        expect(blogsHelper.totalLikes([])).toBe(0);
    });

    test('one blog total likes', () => {
        expect(blogsHelper.totalLikes(oneBlog)).toBe(oneBlog[0].likes);
    });
});

describe('top blogs', () => {
    const blogs = [
        {
          _id: "5a422a851b54a676234d17f7",
          title: "React patterns",
          author: "Michael Chan",
          url: "https://reactpatterns.com/",
          likes: 7,
          __v: 0
        },
        {
          _id: "5a422aa71b54a676234d17f8",
          title: "Go To Statement Considered Harmful",
          author: "Edsger W. Dijkstra",
          url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
          likes: 5,
          __v: 0
        },
        {
          _id: "5a422b3a1b54a676234d17f9",
          title: "Canonical string reduction",
          author: "Edsger W. Dijkstra",
          url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
          likes: 12,
          __v: 0
        },
        {
          _id: "5a422b891b54a676234d17fa",
          title: "First class tests",
          author: "Robert C. Martin",
          url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
          likes: 10,
          __v: 0
        },
        {
          _id: "5a422ba71b54a676234d17fb",
          title: "TDD harms architecture",
          author: "Robert C. Martin",
          url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
          likes: 0,
          __v: 0
        },
        {
          _id: "5a422bc61b54a676234d17fc",
          title: "Type wars",
          author: "Robert C. Martin",
          url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
          likes: 2,
          __v: 0
        }  
    ]

    test('most likes', () => {
        expect(blogsHelper.topBlog(blogs)).toEqual(blogs[2]);
    });
});