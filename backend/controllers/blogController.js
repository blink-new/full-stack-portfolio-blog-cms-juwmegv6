const asyncHandler = require('express-async-handler');
const BlogPost = require('../models/BlogPost');

// @desc    Fetch all blog posts
// @route   GET /api/blog
// @access  Public
const getBlogPosts = asyncHandler(async (req, res) => {
  const blogPosts = await BlogPost.find({});
  res.json(blogPosts);
});

// @desc    Fetch single blog post
// @route   GET /api/blog/:id
// @access  Public
const getBlogPostById = asyncHandler(async (req, res) => {
  const blogPost = await BlogPost.findById(req.params.id);

  if (blogPost) {
    res.json(blogPost);
  } else {
    res.status(404);
    throw new Error('Blog post not found');
  }
});

// @desc    Create a blog post
// @route   POST /api/blog
// @access  Private/Admin
const createBlogPost = asyncHandler(async (req, res) => {
  const { title, slug, excerpt, content, image, author, publishedAt, readTime, tags, featured } = req.body;

  const blogPost = new BlogPost({
    title,
    slug,
    excerpt,
    content,
    image,
    author,
    publishedAt: publishedAt || Date.now(),
    readTime,
    tags,
    featured: featured || false,
  });

  const createdBlogPost = await blogPost.save();
  res.status(201).json(createdBlogPost);
});

// @desc    Update a blog post
// @route   PUT /api/blog/:id
// @access  Private/Admin
const updateBlogPost = asyncHandler(async (req, res) => {
  const { title, slug, excerpt, content, image, author, publishedAt, readTime, tags, featured } = req.body;

  const blogPost = await BlogPost.findById(req.params.id);

  if (blogPost) {
    blogPost.title = title || blogPost.title;
    blogPost.slug = slug || blogPost.slug;
    blogPost.excerpt = excerpt || blogPost.excerpt;
    blogPost.content = content || blogPost.content;
    blogPost.image = image || blogPost.image;
    blogPost.author = author || blogPost.author;
    blogPost.publishedAt = publishedAt || blogPost.publishedAt;
    blogPost.readTime = readTime || blogPost.readTime;
    blogPost.tags = tags || blogPost.tags;
    blogPost.featured = featured !== undefined ? featured : blogPost.featured;

    const updatedBlogPost = await blogPost.save();
    res.json(updatedBlogPost);
  } else {
    res.status(404);
    throw new Error('Blog post not found');
  }
});

// @desc    Delete a blog post
// @route   DELETE /api/blog/:id
// @access  Private/Admin
const deleteBlogPost = asyncHandler(async (req, res) => {
  const blogPost = await BlogPost.findById(req.params.id);

  if (blogPost) {
    await blogPost.deleteOne();
    res.json({ message: 'Blog post removed' });
  } else {
    res.status(404);
    throw new Error('Blog post not found');
  }
});

module.exports = {
  getBlogPosts,
  getBlogPostById,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
};