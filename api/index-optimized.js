// Optimized Vercel serverless function entry point
// This file provides a minimal, fast-loading Express app for Vercel

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Import the compiled server
const serverModule = require('../dist/index.cjs');
const { app } = serverModule;

// Export the app for Vercel serverless function
export default app;