const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/feed', postController.getFeed);
router.post('/', postController.createPost);
router.post('/:id/like', postController.likePost);
router.get('/:postId/comments', postController.getComments);
router.post('/:postId/comments', postController.addComment);

module.exports = router; 