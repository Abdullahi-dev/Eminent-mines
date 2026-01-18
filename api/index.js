import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Import your Express app from the server build
const { app } = require('../dist/index.cjs');

// Export for Vercel serverless function
export default app;