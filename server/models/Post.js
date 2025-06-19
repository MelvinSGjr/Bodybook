// Модель поста (заглушка)
class Post {
    constructor(id, author, text, likes, comments, attachments) {
        this.id = id;
        this.author = author;
        this.text = text;
        this.likes = likes;
        this.comments = comments;
        this.attachments = attachments;
    }
}
module.exports = Post; 