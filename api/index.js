// Vercel serverless function entry point
// This file imports and exports the Express app for Vercel

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Import the compiled server and extract the app
const serverModule = require('../dist/index.cjs');

// Export the app for Vercel serverless function
export default serverModule.app;