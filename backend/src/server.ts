import mongoose from 'mongoose';
import { createClient } from 'redis';
import app from './app';
import { config } from './config/env';

async function start() {
  try {
    await mongoose.connect(config.mongoUri);
    const redisClient = createClient({ url: config.redisUrl });
    await redisClient.connect();
    console.log('Connected to MongoDB and Redis');

    app.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`);
    });
  } catch (err) {
    console.error('Startup error', err);
    process.exit(1);
  }
}

start();
