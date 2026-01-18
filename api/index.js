// Vercel serverless function entry point
// This file imports and exports the Express app for Vercel

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

try {
  console.log('[Vercel API] Loading optimized server module...');
  
  // Import the optimized compiled server and extract the app
  const serverModule = require('../dist/index-optimized.cjs');
  
  console.log('[Vercel API] Server module loaded:', typeof serverModule);
  console.log('[Vercel API] Server module keys:', Object.keys(serverModule));
  
  // Export the app for Vercel serverless function
  // The optimized server exports 'app' directly
  const app = serverModule.app || serverModule;
  
  console.log('[Vercel API] App extracted:', typeof app);
  
  if (!app || typeof app !== 'function') {
    throw new Error('Invalid app export from server module');
  }
  
  export default app;
  
} catch (error) {
  console.error('[Vercel API] Failed to load server module:', error);
  
  // Return a minimal error handler app
  const errorApp = (req, res) => {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      error: 'Server initialization failed',
      message: error.message 
    }));
  };
  
  export default errorApp;
}