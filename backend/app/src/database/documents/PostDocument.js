class Post {

    constructor(comment) {
        this.comment = comment;
        this.dateCreated = new Date().toISOString();
    }

    getComment() {
        return this.comment;
    }
    getDateCreated() {
        return this.dateCreated;
    }

}

module.exports = Post;