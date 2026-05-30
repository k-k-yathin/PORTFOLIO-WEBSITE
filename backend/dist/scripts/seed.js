"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const Project_1 = require("../models/Project");
const db_1 = require("../config/db");
dotenv_1.default.config();
const sampleProjects = [
    {
        title: 'DeckForge',
        description: 'A full-stack card deck builder and management platform engineered for performance and scalability. Features real-time deck composition, card search with filters, user collections, and a robust API layer. Built with a microservices-minded architecture using Docker for consistent dev/prod environments.',
        techStack: ['Go', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'REST API', 'Gin'],
        githubLink: 'https://github.com/yathinkk',
        liveLink: '',
        image: 'https://images.unsplash.com/photo-1614850715607-099d0c3c8b57?w=800&q=80',
        featured: true,
    },
    {
        title: 'Discipline Tracker',
        description: 'A habit and discipline tracking web app that helps students build consistent routines. Tracks daily goals, streaks, and progress with an intuitive dashboard. Data persists locally for privacy-first usage—no account required to get started.',
        techStack: ['React', 'JavaScript', 'LocalStorage', 'CSS3', 'Responsive Design'],
        githubLink: 'https://github.com/yathinkk',
        liveLink: '',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
        featured: true,
    },
    {
        title: 'DSA Problem Solver Hub',
        description: 'Personal workspace for organizing competitive programming solutions, tagging problems by pattern (graphs, DP, trees), and tracking revision schedules. Integrates notes with time-complexity analysis for interview prep.',
        techStack: ['TypeScript', 'Node.js', 'MongoDB', 'Algorithms', 'Data Structures'],
        githubLink: 'https://github.com/yathinkk',
        liveLink: '',
        image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80',
        featured: false,
    },
    {
        title: 'ML Experiment Logger',
        description: 'Lightweight tool for logging machine learning experiments—hyperparameters, metrics, and model artifacts. Supports comparison across runs to streamline research workflows during coursework and personal projects.',
        techStack: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Jupyter', 'Matplotlib'],
        githubLink: 'https://github.com/yathinkk',
        liveLink: '',
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80',
        featured: false,
    },
];
const seed = async () => {
    try {
        await (0, db_1.connectDB)();
        await Project_1.Project.deleteMany({});
        await Project_1.Project.insertMany(sampleProjects);
        console.log(`Seeded ${sampleProjects.length} projects successfully`);
        process.exit(0);
    }
    catch (error) {
        console.error('Seed failed:', error);
        process.exit(1);
    }
    finally {
        await mongoose_1.default.connection.close();
    }
};
seed();
