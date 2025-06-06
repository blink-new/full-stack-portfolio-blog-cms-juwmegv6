const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  technologies: [
    {
      type: String,
    },
  ],
  category: {
    type: String,
    required: true,
  },
  githubUrl: {
    type: String,
  },
  liveUrl: {
    type: String,
  },
  featured: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
