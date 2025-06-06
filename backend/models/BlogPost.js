const mongoose = require('mongoose');

const blogPostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  excerpt: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  author: {
    type: String,
    required: true,
  },
  publishedAt: {
    type: Date,
    required: true,
  },
  readTime: {
    type: Number,
  },
  tags: [
    {
      type: String,
    },
  ],
  featured: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;
