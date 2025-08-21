# Backend for Chandan Jain HP Portfolio

TypeScript/Node.js backend providing RESTful APIs for the Apple-style portfolio.

## Features
- JWT-based authentication with role support
- Content management endpoints for profile, experiences, projects, skills, and education
- Media upload and optimization stubs
- Analytics event collection routes
- Contact and newsletter management
- Security middleware stack with Helmet, CORS, rate limiting, and centralized error handling

## Scripts
```bash
npm run dev     # start development server
npm run build   # compile TypeScript to dist/
```

Environment variables are defined in `src/config/env.ts` and should be moved to a real `.env` file in production.
