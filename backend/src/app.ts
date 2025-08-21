import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';

import { apiRateLimiter } from './middleware/rateLimiter';
import { errorHandler } from './middleware/errorHandler';

import authRoutes from './routes/auth';
import contentRoutes from './routes/content';
import mediaRoutes from './routes/media';
import analyticsRoutes from './routes/analytics';
import contactRoutes from './routes/contact';

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(compression());
app.use(express.json());
app.use(apiRateLimiter);

app.use('/api/auth', authRoutes);
app.use('/api', contentRoutes);
app.use('/api/media', mediaRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/contact', contactRoutes);

app.use(errorHandler);

export default app;
