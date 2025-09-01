import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  base: "/CoreRunners/", // GitHub Pages subpath
  build: {
    chunkSizeWarningLimit: 1000, // Increase limit to 1 MB
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate big dependencies into their own chunks
          react: ["react", "react-dom", "react-router-dom"],
          firebase: ["firebase"],
          lucide: ["lucide-react"],
          reactQuery: ["@tanstack/react-query"],
          sonner: ["sonner"]
        }
      }
    }
  }
});
