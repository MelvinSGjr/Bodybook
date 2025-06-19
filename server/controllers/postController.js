exports.getFeed = async (req, res) => {
    // TODO: вернуть список постов
    res.json([{ id: 1, author: 'John Doe', text: 'Hello Bodybook!', likes: 2, comments: 1 }]);
};

exports.createPost = async (req, res) => {
    // TODO: создать пост
    res.json({ id: 2, ...req.body });
};

exports.likePost = async (req, res) => {
    // TODO: лайк поста
    res.json({ success: true });
};

exports.getComments = async (req, res) => {
    // TODO: вернуть комментарии к посту
    res.json([{ id: 1, author: 'Jane', text: 'Nice!' }]);
};

exports.addComment = async (req, res) => {
    // TODO: добавить комментарий
    res.json({ id: 2, ...req.body });
}; 