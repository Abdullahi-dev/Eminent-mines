import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { metaImagesPlugin } from "./vite-plugin-meta-images";

// Dev-only API middleware to unblock newsletter submissions when API server is offline
const devApiPlugin = {
  name: "dev-api",
  configureServer(server: any) {
    server.middlewares.use(async (req: any, res: any, next: any) => {
      const url = req.url || "";
      if (req.method === "POST" && url.startsWith("/api/newsletter/subscribe")) {
        try {
          const chunks: Buffer[] = [];
          req.on("data", (c: Buffer) => chunks.push(c));
          await new Promise<void>((resolve) => req.on("end", () => resolve()));
          const bodyStr = Buffer.concat(chunks).toString("utf-8");
          const data = JSON.parse(bodyStr || "{}");

          if (!data?.email || typeof data.email !== "string") {
            res.statusCode = 400;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ message: "Invalid email address" }));
            return;
          }

          // Simulate success response
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ ok: true, email: data.email }));
          return;
        } catch (e) {
          res.statusCode = 400;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ message: "Invalid request" }));
          return;
        }
      }

      next();
    });
  },
};

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    tailwindcss(),
    metaImagesPlugin(),
    devApiPlugin,
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  css: {
    postcss: {
      plugins: [],
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    host: "0.0.0.0",
    allowedHosts: true,
    proxy: {
      "/api": {
        target: "http://localhost:5001",
        changeOrigin: true,
        ws: true
      }
    },
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
