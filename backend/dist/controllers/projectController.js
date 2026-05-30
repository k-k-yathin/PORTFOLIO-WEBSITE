"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProject = exports.updateProject = exports.createProject = exports.getProjectById = exports.getProjects = void 0;
const Project_1 = require("../models/Project");
const getProjects = async (_req, res) => {
    const projects = await Project_1.Project.find().sort({ featured: -1, createdAt: -1 });
    res.status(200).json({ success: true, count: projects.length, data: projects });
};
exports.getProjects = getProjects;
const getProjectById = async (req, res) => {
    const project = await Project_1.Project.findById(req.params.id);
    if (!project) {
        res.status(404).json({ success: false, message: 'Project not found' });
        return;
    }
    res.status(200).json({ success: true, data: project });
};
exports.getProjectById = getProjectById;
const createProject = async (req, res) => {
    const project = await Project_1.Project.create(req.body);
    res.status(201).json({ success: true, data: project });
};
exports.createProject = createProject;
const updateProject = async (req, res) => {
    const project = await Project_1.Project.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    if (!project) {
        res.status(404).json({ success: false, message: 'Project not found' });
        return;
    }
    res.status(200).json({ success: true, data: project });
};
exports.updateProject = updateProject;
const deleteProject = async (req, res) => {
    const project = await Project_1.Project.findByIdAndDelete(req.params.id);
    if (!project) {
        res.status(404).json({ success: false, message: 'Project not found' });
        return;
    }
    res.status(200).json({ success: true, message: 'Project deleted successfully' });
};
exports.deleteProject = deleteProject;
