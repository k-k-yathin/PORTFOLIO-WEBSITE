import { Request, Response } from 'express';
import { Project } from '../models/Project';
import { ProjectInput } from '../types';

export const getProjects = async (_req: Request, res: Response): Promise<void> => {
  const projects = await Project.find().sort({ featured: -1, createdAt: -1 });
  res.status(200).json({ success: true, count: projects.length, data: projects });
};

export const getProjectById = async (req: Request, res: Response): Promise<void> => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    res.status(404).json({ success: false, message: 'Project not found' });
    return;
  }

  res.status(200).json({ success: true, data: project });
};

export const createProject = async (req: Request, res: Response): Promise<void> => {
  const project = await Project.create(req.body as ProjectInput);
  res.status(201).json({ success: true, data: project });
};

export const updateProject = async (req: Request, res: Response): Promise<void> => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!project) {
    res.status(404).json({ success: false, message: 'Project not found' });
    return;
  }

  res.status(200).json({ success: true, data: project });
};

export const deleteProject = async (req: Request, res: Response): Promise<void> => {
  const project = await Project.findByIdAndDelete(req.params.id);

  if (!project) {
    res.status(404).json({ success: false, message: 'Project not found' });
    return;
  }

  res.status(200).json({ success: true, message: 'Project deleted successfully' });
};
