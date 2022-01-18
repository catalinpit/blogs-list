const dummy = (blogs) => {
    return 1;
};

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
    dummy,
    totalLikes,
    topBlog
};