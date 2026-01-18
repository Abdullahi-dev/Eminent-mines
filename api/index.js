// Vercel serverless function entry point
// This file imports and exports the Express app for Vercel

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

let app;

try {
  console.log('[Vercel API] Loading optimized server module...');
  
  // Import the optimized compiled server and extract the app
  const serverModule = require('../dist/index-optimized.cjs');
  
  console.log('[Vercel API] Server module loaded:', typeof serverModule);
  console.log('[Vercel API] Server module keys:', Object.keys(serverModule));
  
  // Extract the app from the server module
  app = serverModule.app || serverModule;
  
  console.log('[Vercel API] App extracted:', typeof app);
  
  if (!app || typeof app !== 'function') {
    throw new Error('Invalid app export from server module');
  }
  
} catch (error) {
  console.error('[Vercel API] Failed to load server module:', error);
  
  // Create a minimal error handler app
  const express = require('express');
  const errorApp = express();
  errorApp.use((req, res) => {
    res.status(500).json({ 
      error: 'Server initialization failed',
      message: error.message 
    });
  });
  
  app = errorApp;
}

// Export the app at the top level
export default app;