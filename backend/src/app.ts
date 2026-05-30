import express, { Application } from 'express';
import cors from 'cors';
import projectRoutes from './routes/projectRoutes';
import { notFound, errorHandler } from './middleware/errorHandler';

const app: Application = express();

const allowedOrigins = [
  process.env.FRONTEND_URL,
  'http://localhost:5173',
  'http://localhost:4173',
].filter(Boolean) as string[];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(null, true);
      }
    },
    credentials: true,
  })
);

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

app.get('/api/health', (_req, res) => {
  res.status(200).json({
    success: true,
    message: 'Portfolio API is running',
    timestamp: new Date().toISOString(),
  });
});

app.use('/api/projects', projectRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
