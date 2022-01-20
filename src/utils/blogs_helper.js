const initialBlogs = [
    {
        "_id": "61c092dd02cc9cc0f9006ae4",
        "title": "test",
        "author": "me",
        "url": "google.com",
        "likes": 2,
        "__v": 0
    },
    {
        "_id": "61c0945cade115a71dbd1e5f",
        "title": "Build An E-Commerce Backend With Minimal Code",
        "author": "Catalin Pit",
        "url": "https://catalins.tech/hasura-ecommerce-backend",
        "likes": 97,
        "__v": 0
    }
];

const totalLikes = (blogs) => {
    let total = 0;
    
    for(let i = 0; i < blogs.length; i++) {
        total += blogs[i].likes;
    }

    return total;
};

const topBlog = (blogs) => {
    let top = {};
    let topLikes = 0;

    for(let i = 0; i < blogs.length; i++) {
        if(blogs[i].likes > topLikes) {
            top = blogs[i];
            topLikes = blogs[i].likes;
        }
    }

    return top;
};

module.exports = {
    initialBlogs,
    totalLikes,
    topBlog
};