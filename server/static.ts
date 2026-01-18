import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  
  // In Vercel, static files are handled by the platform, so we don't need to throw an error
  if (!fs.existsSync(distPath)) {
    console.log(`[Static] Build directory not found: ${distPath}, skipping static file serving`);
    return;
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
