const express = require('express');
const router = express.Router();
const { 
  getBlogPosts, 
  getBlogPostById, 
  createBlogPost, 
  updateBlogPost, 
  deleteBlogPost 
} = require('../controllers/blogController');

router.route('/').get(getBlogPosts).post(createBlogPost);
router.route('/:id').get(getBlogPostById).put(updateBlogPost).delete(deleteBlogPost);

module.exports = router;
