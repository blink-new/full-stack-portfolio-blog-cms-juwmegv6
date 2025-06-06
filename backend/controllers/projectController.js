const asyncHandler = require('express-async-handler');
const Project = require('../models/Project');

// @desc    Fetch all projects
// @route   GET /api/projects
// @access  Public
const getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find({});
  res.json(projects);
});

// @desc    Fetch single project
// @route   GET /api/projects/:id
// @access  Public
const getProjectById = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (project) {
    res.json(project);
  } else {
    res.status(404);
    throw new Error('Project not found');
  }
});

// @desc    Create a project
// @route   POST /api/projects
// @access  Private/Admin
const createProject = asyncHandler(async (req, res) => {
  const { title, description, image, technologies, category, githubUrl, liveUrl, featured } = req.body;

  const project = new Project({
    title,
    description,
    image,
    technologies,
    category,
    githubUrl,
    liveUrl,
    featured: featured || false,
  });

  const createdProject = await project.save();
  res.status(201).json(createdProject);
});

// @desc    Update a project
// @route   PUT /api/projects/:id
// @access  Private/Admin
const updateProject = asyncHandler(async (req, res) => {
  const { title, description, image, technologies, category, githubUrl, liveUrl, featured } = req.body;

  const project = await Project.findById(req.params.id);

  if (project) {
    project.title = title || project.title;
    project.description = description || project.description;
    project.image = image || project.image;
    project.technologies = technologies || project.technologies;
    project.category = category || project.category;
    project.githubUrl = githubUrl || project.githubUrl;
    project.liveUrl = liveUrl || project.liveUrl;
    project.featured = featured !== undefined ? featured : project.featured;

    const updatedProject = await project.save();
    res.json(updatedProject);
  } else {
    res.status(404);
    throw new Error('Project not found');
  }
});

// @desc    Delete a project
// @route   DELETE /api/projects/:id
// @access  Private/Admin
const deleteProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (project) {
    await project.deleteOne();
    res.json({ message: 'Project removed' });
  } else {
    res.status(404);
    throw new Error('Project not found');
  }
});

module.exports = {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};