# K K YATHIN — Personal Portfolio

A modern full-stack developer portfolio built with **React**, **TypeScript**, **Tailwind CSS**, **Vite**, **Express**, and **MongoDB**.

![Stack](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript)
![Node](https://img.shields.io/badge/Node.js-Express-339933?style=flat&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=flat&logo=mongodb)

## Features

- Dark-themed responsive UI with Framer Motion animations
- Hero, About, Skills, Projects, and Contact sections
- Projects fetched dynamically from REST API
- Full CRUD API for projects (MongoDB + Mongoose)
- Loading states, error handling, and retry logic
- Deployment-ready for **Vercel** (frontend) and **Render** (backend)

## Project Structure

```
portfolio-website/
├── frontend/                 # React + Vite + Tailwind
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── layout/       # Navbar, Footer
│   │   │   ├── projects/     # ProjectCard
│   │   │   └── ui/           # Button, Spinner, etc.
│   │   ├── sections/         # Page sections
│   │   ├── hooks/            # useProjects
│   │   ├── services/         # Axios API client
│   │   ├── data/             # Static profile data
│   │   └── types/
│   └── vercel.json
├── backend/                  # Express + TypeScript
│   └── src/
│       ├── config/           # Database connection
│       ├── controllers/      # Route handlers
│       ├── middleware/       # Error handling, async wrapper
│       ├── models/           # Mongoose schemas
│       ├── routes/           # API routes
│       └── scripts/          # Seed script
└── README.md
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/projects` | Get all projects |
| GET | `/api/projects/:id` | Get project by ID |
| POST | `/api/projects` | Create project |
| PUT | `/api/projects/:id` | Update project |
| DELETE | `/api/projects/:id` | Delete project |

### Sample POST body

```json
{
  "title": "My Project",
  "description": "Project description here",
  "techStack": ["React", "Node.js"],
  "githubLink": "https://github.com/username/repo",
  "liveLink": "https://myproject.vercel.app",
  "image": "https://example.com/image.jpg",
  "featured": true
}
```

## Prerequisites

- Node.js 18+
- MongoDB (local or [MongoDB Atlas](https://www.mongodb.com/atlas))

## Local Development

### 1. Clone and install

```bash
cd portfolio-website

# Backend
cd backend
cp .env.example .env
npm install

# Frontend (new terminal)
cd ../frontend
cp .env.example .env
npm install
```

### 2. Configure environment

**backend/.env**

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/portfolio
FRONTEND_URL=http://localhost:5173
```

**frontend/.env**

```env
VITE_API_URL=http://localhost:5000/api
```

### 3. Seed sample data

```bash
cd backend
npm run seed
```

### 4. Run dev servers

```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000/api

## Production Build

```bash
# Backend
cd backend
npm run build
npm start

# Frontend
cd frontend
npm run build
npm run preview
```

## Deployment

### Backend — Render

1. Push code to GitHub.
2. Create a new **Web Service** on [Render](https://render.com).
3. Set root directory to `backend`.
4. Build command: `npm install && npm run build`
5. Start command: `npm start`
6. Add environment variables:
   - `MONGODB_URI` — your Atlas connection string
   - `FRONTEND_URL` — your Vercel URL (e.g. `https://your-app.vercel.app`)
   - `NODE_ENV=production`
7. Optionally use `render.yaml` in the backend folder.

### Frontend — Vercel

1. Import the repo on [Vercel](https://vercel.com).
2. Set root directory to `frontend`.
3. Framework preset: **Vite**
4. Add environment variable:
   - `VITE_API_URL` — your Render API URL + `/api` (e.g. `https://portfolio-api.onrender.com/api`)
5. Deploy.

### MongoDB Atlas

1. Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/atlas).
2. Add your IP to Network Access (or `0.0.0.0/0` for cloud deploys).
3. Create a database user and copy the connection string into `MONGODB_URI`.
4. Run seed once against production DB: `npm run seed` (locally with prod URI) or POST projects via API.

## Scripts Reference

| Location | Command | Description |
|----------|---------|-------------|
| backend | `npm run dev` | Start dev server with hot reload |
| backend | `npm run build` | Compile TypeScript |
| backend | `npm start` | Run production server |
| backend | `npm run seed` | Seed sample projects |
| frontend | `npm run dev` | Start Vite dev server |
| frontend | `npm run build` | Production build |
| frontend | `npm run preview` | Preview production build |

## Tech Stack

**Frontend:** React, TypeScript, Vite, Tailwind CSS, Framer Motion, Axios, Lucide Icons

**Backend:** Node.js, Express, TypeScript, Mongoose, MongoDB, CORS

## Author

**K K YATHIN** — B.Tech CSE @ VIT-AP University

- Full-stack developer passionate about DSA, problem solving, and ML
- Built [DeckForge](https://github.com/yathinkk) (Go, React, PostgreSQL, Docker) and Discipline Tracker (React, local storage)

---

MIT License — feel free to use this template for your own portfolio.
