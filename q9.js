//blog object using constructor

function Blog(title, body, author){       //unpublished post
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    isLive = false;
}

let blog = new Blog("JS", "JS stands for JavaScript", "Vedant Nichal");
console.log(blog);