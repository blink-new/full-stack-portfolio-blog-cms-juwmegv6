const asyncHandler = require('express-async-handler');
const Project = require('../models/Project');

// @desc    Fetch all projects
// @route   GET /api/projects
// @access  Public
const getProjects = asyncHandler(async (req, res) => {
  // Placeholder: Fetch projects from DB
  res.status(200).json({ message: 'Fetch all projects' });
});

// @desc    Fetch single project
// @route   GET /api/projects/:id
// @access  Public
const getProjectById = asyncHandler(async (req, res) => {
  // Placeholder: Fetch project by ID from DB
  res.status(200).json({ message: `Fetch project ${req.params.id}` });
});

// @desc    Create a project
// @route   POST /api/projects
// @access  Private/Admin
const createProject = asyncHandler(async (req, res) => {
  // Placeholder: Create project in DB
  res.status(201).json({ message: 'Create project' });
});

// @desc    Update a project
// @route   PUT /api/projects/:id
// @access  Private/Admin
const updateProject = asyncHandler(async (req, res) => {
  // Placeholder: Update project in DB
  res.status(200).json({ message: `Update project ${req.params.id}` });
});

// @desc    Delete a project
// @route   DELETE /api/projects/:id
// @access  Private/Admin
const deleteProject = asyncHandler(async (req, res) => {
  // Placeholder: Delete project from DB
  res.status(200).json({ message: `Delete project ${req.params.id}` });
});

module.exports = {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
